import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { avgValue } = await request.json();
    
    // Generate realistic mock data
    const totalDMs = Math.floor(Math.random() * 300) + 100; // 100-400 DMs
    const qualificationRate = 0.1 + Math.random() * 0.3; // 10-40% qualify
    const missedDeals = Math.floor(totalDMs * qualificationRate);
    const missedValue = missedDeals * avgValue;
    
    const scanData = {
      missedDeals,
      missedValue,
      totalDMs,
      mutualFollowers: Math.floor(Math.random() * 500) + 50,
      ethosScore: Math.floor(Math.random() * 2000) + 500,
      yaps: Math.floor(Math.random() * 200) + 20,
      avgValue,
      scanId: Math.random().toString(36).substring(7)
    };

    return NextResponse.json(scanData);
  } catch (error) {
    console.error('Scan error:', error);
    return NextResponse.json(
      { error: 'Failed to run scan' },
      { status: 500 }
    );
  }
}

