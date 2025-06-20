import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // For now, return a mock image URL since @vercel/og is causing build issues
    // In production, this would generate the actual viral image
    const mockScanData = {
      missedDeals: Math.floor(Math.random() * 100) + 20,
      missedValue: Math.floor(Math.random() * 50000) + 5000,
      mutualFollowers: Math.floor(Math.random() * 500) + 50,
      ethosScore: Math.floor(Math.random() * 2000) + 500,
      yaps: Math.floor(Math.random() * 200) + 20
    };

    // Return mock image URL - in production this would be the generated image
    const mockImageUrl = `https://res.cloudinary.com/demo/image/upload/v1/dm-audit-${id}.png`;

    return NextResponse.json({
      imageUrl: mockImageUrl,
      scanId: id,
      generatedAt: new Date().toISOString(),
      scanData: mockScanData,
      message: 'Image generation temporarily using mock data - will be replaced with @vercel/og implementation'
    });

  } catch (error) {
    console.error('Image generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}

