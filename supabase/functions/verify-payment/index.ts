// Supabase Edge Function: verify-payment
// Verifies Razorpay HMAC signature and records the subscription in Supabase.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { crypto } from "https://deno.land/std@0.168.0/crypto/mod.ts";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PLAN_DAYS: Record<string, number> = { monthly: 30, cycle: 180 };
const PLAN_PAISE: Record<string, number> = { monthly: 19900, cycle: 89900 };

async function verifySignature(
  orderId: string,
  paymentId: string,
  signature: string,
  secret: string,
): Promise<boolean> {
  const payload = `${orderId}|${paymentId}`;
  const keyData = new TextEncoder().encode(secret);
  const msgData = new TextEncoder().encode(payload);

  const key = await crypto.subtle.importKey(
    "raw", keyData,
    { name: "HMAC", hash: "SHA-256" },
    false, ["sign"]
  );
  const sigBuf   = await crypto.subtle.sign("HMAC", key, msgData);
  const expected = Array.from(new Uint8Array(sigBuf))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

  return expected === signature;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });

  try {
    const { orderId, paymentId, signature, plan } =
      await req.json() as {
        orderId: string; paymentId: string; signature: string; plan: string;
      };

    if (!PLAN_DAYS[plan]) {
      return new Response(JSON.stringify({ error: "Invalid plan" }), {
        status: 400, headers: { ...CORS, "Content-Type": "application/json" },
      });
    }

    // Authenticate the caller
    const authHeader = req.headers.get("Authorization") ?? "";
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } }
    );
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401, headers: { ...CORS, "Content-Type": "application/json" },
      });
    }

    const keySecret = Deno.env.get("RAZORPAY_KEY_SECRET")!;
    const valid = await verifySignature(orderId, paymentId, signature, keySecret);
    if (!valid) {
      return new Response(JSON.stringify({ error: "Invalid signature" }), {
        status: 400, headers: { ...CORS, "Content-Type": "application/json" },
      });
    }

    // Compute expiry
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + PLAN_DAYS[plan]);

    // Write to subscriptions using service role (bypasses RLS)
    const adminSupabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: insertError } = await adminSupabase
      .from("subscriptions")
      .insert({
        user_id: user.id,
        plan,
        status: "active",
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        amount_paise: PLAN_PAISE[plan],
        expires_at: expiresAt.toISOString(),
      });

    if (insertError) {
      console.error("[verify-payment] DB insert error:", insertError);
      return new Response(JSON.stringify({ error: "Failed to record subscription" }), {
        status: 500, headers: { ...CORS, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ success: true, expiresAt: expiresAt.toISOString() }),
      { headers: { ...CORS, "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("[verify-payment] Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500, headers: { ...CORS, "Content-Type": "application/json" },
    });
  }
});
