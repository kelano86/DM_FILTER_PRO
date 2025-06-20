// Supabase configuration and client setup
import { createClient } from '@supabase/supabase-js';

// Environment variables for Supabase connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for TypeScript
export interface ScanRecord {
  id: string;
  user_id?: string;
  scan_data: {
    missedDeals: number;
    missedValue: number;
    totalDMs: number;
    mutualFollowers: number;
    ethosScore: number;
    yaps: number;
  };
  avg_value: number;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

// Database operations
export class ScanDatabase {
  // Save scan results to database
  static async saveScan(scanData: Omit<ScanRecord, 'id' | 'created_at' | 'updated_at'>): Promise<ScanRecord | null> {
    try {
      const { data, error } = await supabase
        .from('scans')
        .insert([{
          ...scanData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (error) {
        console.error('Error saving scan:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Database error:', error);
      return null;
    }
  }

  // Get scan by ID
  static async getScan(scanId: string): Promise<ScanRecord | null> {
    try {
      const { data, error } = await supabase
        .from('scans')
        .select('*')
        .eq('id', scanId)
        .single();

      if (error) {
        console.error('Error fetching scan:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Database error:', error);
      return null;
    }
  }

  // Update scan with image URL
  static async updateScanImage(scanId: string, imageUrl: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('scans')
        .update({ 
          image_url: imageUrl,
          updated_at: new Date().toISOString()
        })
        .eq('id', scanId);

      if (error) {
        console.error('Error updating scan image:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Database error:', error);
      return false;
    }
  }

  // Get recent scans (for analytics)
  static async getRecentScans(limit: number = 10): Promise<ScanRecord[]> {
    try {
      const { data, error } = await supabase
        .from('scans')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Error fetching recent scans:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Database error:', error);
      return [];
    }
  }

  // Get scan statistics
  static async getScanStats(): Promise<{
    totalScans: number;
    totalMissedDeals: number;
    totalMissedValue: number;
    avgMissedValue: number;
  }> {
    try {
      const { data, error } = await supabase
        .from('scans')
        .select('scan_data, avg_value');

      if (error) {
        console.error('Error fetching scan stats:', error);
        return {
          totalScans: 0,
          totalMissedDeals: 0,
          totalMissedValue: 0,
          avgMissedValue: 0
        };
      }

      const stats = data?.reduce((acc, scan) => {
        acc.totalScans += 1;
        acc.totalMissedDeals += scan.scan_data.missedDeals;
        acc.totalMissedValue += scan.scan_data.missedValue;
        return acc;
      }, {
        totalScans: 0,
        totalMissedDeals: 0,
        totalMissedValue: 0,
        avgMissedValue: 0
      }) || {
        totalScans: 0,
        totalMissedDeals: 0,
        totalMissedValue: 0,
        avgMissedValue: 0
      };

      stats.avgMissedValue = stats.totalScans > 0 ? stats.totalMissedValue / stats.totalScans : 0;

      return stats;
    } catch (error) {
      console.error('Database error:', error);
      return {
        totalScans: 0,
        totalMissedDeals: 0,
        totalMissedValue: 0,
        avgMissedValue: 0
      };
    }
  }
}

