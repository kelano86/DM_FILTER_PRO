-- Supabase database schema for DM Deal Audit feature
-- This script creates the necessary tables and functions

-- Create scans table to store audit results
CREATE TABLE IF NOT EXISTS scans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT, -- Optional user identifier
  scan_data JSONB NOT NULL, -- Store the scan results as JSON
  avg_value INTEGER NOT NULL, -- Average deal value used for calculation
  image_url TEXT, -- URL of the generated viral image
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_scans_created_at ON scans(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_scans_user_id ON scans(user_id) WHERE user_id IS NOT NULL;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_scans_updated_at ON scans;
CREATE TRIGGER update_scans_updated_at
  BEFORE UPDATE ON scans
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE scans ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (for sharing)
CREATE POLICY "Allow public read access" ON scans
  FOR SELECT USING (true);

-- Create policy to allow public insert (for anonymous scans)
CREATE POLICY "Allow public insert" ON scans
  FOR INSERT WITH CHECK (true);

-- Create policy to allow public update (for image URL updates)
CREATE POLICY "Allow public update" ON scans
  FOR UPDATE USING (true);

-- Create view for scan statistics (optional)
CREATE OR REPLACE VIEW scan_statistics AS
SELECT 
  COUNT(*) as total_scans,
  SUM((scan_data->>'missedDeals')::integer) as total_missed_deals,
  SUM((scan_data->>'missedValue')::integer) as total_missed_value,
  AVG((scan_data->>'missedValue')::integer) as avg_missed_value,
  AVG(avg_value) as avg_deal_value
FROM scans
WHERE created_at >= NOW() - INTERVAL '30 days';

-- Grant access to the view
GRANT SELECT ON scan_statistics TO anon, authenticated;

-- Sample data structure for scan_data JSONB field:
-- {
--   "missedDeals": 54,
--   "missedValue": 10000,
--   "totalDMs": 250,
--   "mutualFollowers": 204,
--   "ethosScore": 1670,
--   "yaps": 123
-- }

-- Example queries:

-- Insert a new scan
-- INSERT INTO scans (scan_data, avg_value) VALUES (
--   '{"missedDeals": 54, "missedValue": 10000, "totalDMs": 250, "mutualFollowers": 204, "ethosScore": 1670, "yaps": 123}',
--   100
-- );

-- Get scan by ID
-- SELECT * FROM scans WHERE id = 'your-uuid-here';

-- Get recent scans
-- SELECT * FROM scans ORDER BY created_at DESC LIMIT 10;

-- Update scan with image URL
-- UPDATE scans SET image_url = 'https://cloudinary.com/image.png' WHERE id = 'your-uuid-here';

-- Get scan statistics
-- SELECT * FROM scan_statistics;

