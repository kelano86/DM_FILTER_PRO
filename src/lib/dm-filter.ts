// Mock DM filtering logic for the campaign feature
export interface DMScanResult {
  scanId: string;
  deals: {
    missedDeals: number;
    missedValue: number;
    totalDMs: number;
    mutualFollowers: number;
    ethosScore: number;
    yaps: number;
  };
  avgValue: number;
  createdAt: string;
}

export interface ScanRequest {
  avgValue: number;
}

export interface ImageGenerationResult {
  imageUrl: string;
  scanId: string;
  generatedAt: string;
}

// Simulate DM filtering with realistic data
export function simulateDMFilter(): Omit<DMScanResult['deals'], 'missedDeals' | 'missedValue'> {
  return {
    totalDMs: Math.floor(Math.random() * 300) + 100, // 100-400 DMs
    mutualFollowers: Math.floor(Math.random() * 500) + 50, // 50-550 mutual followers
    ethosScore: Math.floor(Math.random() * 2000) + 500, // 500-2500 ethos score
    yaps: Math.floor(Math.random() * 200) + 20, // 20-220 yaps
  };
}

// Calculate qualifying DMs based on filter criteria
export function calculateQualifyingDMs(totalDMs: number): number {
  // Simulate 10-40% of DMs qualifying as potential deals
  const qualificationRate = Math.random() * 0.3 + 0.1;
  return Math.floor(totalDMs * qualificationRate);
}

// Generate viral sharing text
export function generateShareText(imageUrl: string): string {
  return `Check what I was missing ➜ ${imageUrl} @DMDealAlert`;
}

// Validate scan request
export function validateScanRequest(data: any): data is ScanRequest {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.avgValue === 'number' &&
    data.avgValue >= 0 &&
    data.avgValue <= 10000
  );
}

