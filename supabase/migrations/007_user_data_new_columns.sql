-- Add q_notes (per-question annotations) and first_read (first-read checklist)
-- to user_data for cloud sync of new features

ALTER TABLE user_data
  ADD COLUMN IF NOT EXISTS q_notes    JSONB DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS first_read JSONB DEFAULT '{}';
