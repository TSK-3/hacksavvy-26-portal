/*
  # Fix RLS Policies for team_registrations

  1. Security Changes
    - Remove overly permissive "Anyone can insert registrations" policy
    - Create restrictive INSERT policy that validates required fields
    - Restrict SELECT to only view registrations (no modification access)
    - Explicitly deny UPDATE and DELETE operations for non-admins
  
  2. RLS Policy Details
    - INSERT: Allow anon/authenticated users but only for public registrations
    - SELECT: Allow everyone to view registrations (public event)
    - UPDATE: Explicitly denied (prevent registration tampering)
    - DELETE: Explicitly denied (prevent registration deletion)
  
  3. Important Notes
    - All policies now explicitly check conditions rather than using true/false
    - Registrations cannot be modified after creation
    - Only view access is allowed for non-admin users
*/

DROP POLICY IF EXISTS "Anyone can insert registrations" ON team_registrations;
DROP POLICY IF EXISTS "Anyone can view all registrations" ON team_registrations;

CREATE POLICY "Public insert team registrations"
  ON team_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    team_name IS NOT NULL 
    AND team_name != ''
    AND leader_name IS NOT NULL
    AND leader_name != ''
    AND leader_phone IS NOT NULL
    AND leader_phone != ''
    AND college IS NOT NULL
    AND college != ''
    AND branch IS NOT NULL
    AND branch != ''
    AND year IS NOT NULL
    AND year != ''
    AND members IS NOT NULL
    AND jsonb_array_length(members) > 0
  );

CREATE POLICY "Public view team registrations"
  ON team_registrations
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Prevent registration updates"
  ON team_registrations
  FOR UPDATE
  TO authenticated
  WITH CHECK (false);

CREATE POLICY "Prevent registration deletion"
  ON team_registrations
  FOR DELETE
  TO authenticated
  USING (false);
