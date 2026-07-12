-- Contact messages table for the /contact form
-- Run this in Supabase SQL editor
CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Basic RLS: allow inserts from anon key (for public form)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON contact_messages
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only service role can read (protects user privacy)
CREATE POLICY "Service role can read" ON contact_messages
  FOR SELECT TO service_role
  USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
