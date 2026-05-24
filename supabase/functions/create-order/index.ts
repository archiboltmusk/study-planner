// Supabase Edge Function: create-order
// Creates a Razorpay order server-side and returns the order_id to the client.
// The Razorpay Key Secret never leaves this function.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PLANS = {
  monthly: { amount: 19900, days: 30  },  // ₹199 in paise
  cycle:   { amount: 89900, days: 180 },  // ₹899 in paise
} as const;

type Plan = keyof typeof PLANS;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });

  try {
    const { plan } = await req.json() as { plan: Plan };

    if (!PLANS[plan]) {
      return new Response(JSON.stringify({ error: "Invalid plan" }), {
        status: 400, headers: { ...CORS, "Content-Type": "application/json" },
      });
    }

    // Verify the caller is an authenticated Supabase user
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

    const keyId     = Deno.env.get("RAZORPAY_KEY_ID")!;
    const keySecret = Deno.env.get("RAZORPAY_KEY_SECRET")!;
    const { amount } = PLANS[plan];

    // Create Razorpay order
    const body = JSON.stringify({
      amount,
      currency: "INR",
      receipt: `inicet_${user.id.slice(0, 8)}_${Date.now()}`,
      notes: { plan, userId: user.id },
    });

    const credentials = btoa(`${keyId}:${keySecret}`);
    const rzpRes = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body,
    });

    if (!rzpRes.ok) {
      const err = await rzpRes.json();
      console.error("[create-order] Razorpay error:", err);
      return new Response(JSON.stringify({ error: "Failed to create order" }), {
        status: 502, headers: { ...CORS, "Content-Type": "application/json" },
      });
    }

    const order = await rzpRes.json();

    return new Response(
      JSON.stringify({ orderId: order.id, amount, currency: "INR", keyId }),
      { headers: { ...CORS, "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("[create-order] Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500, headers: { ...CORS, "Content-Type": "application/json" },
    });
  }
});
