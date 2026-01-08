/*
  # Create team registrations table

  1. New Tables
    - `team_registrations`
      - `id` (uuid, primary key)
      - `team_name` (text, unique)
      - `leader_name` (text)
      - `leader_phone` (text)
      - `college` (text)
      - `branch` (text)
      - `year` (text - 1st, 2nd, 3rd, 4th year)
      - `members` (jsonb array - stores member details)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `team_registrations` table
    - Add policy for anyone to insert registrations
    - Add policy for public read access (optional, can view own team)
*/

CREATE TABLE IF NOT EXISTS team_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_name text UNIQUE NOT NULL,
  leader_name text NOT NULL,
  leader_phone text NOT NULL,
  college text NOT NULL,
  branch text NOT NULL,
  year text NOT NULL,
  members jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE team_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert registrations"
  ON team_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view all registrations"
  ON team_registrations
  FOR SELECT
  TO anon, authenticated
  USING (true);
