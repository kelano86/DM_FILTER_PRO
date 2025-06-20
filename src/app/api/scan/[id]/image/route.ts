import { NextRequest, NextResponse } from 'next/server';
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // In a real implementation, we would fetch scan data from Supabase using the ID
    // For now, we'll use mock data for the image generation
    const mockScanData = {
      missedDeals: 54,
      missedValue: 10000,
      mutualFollowers: 204,
      ethosScore: 1670,
      yaps: 123
    };

    // Generate the viral marketing image using @vercel/og with enhanced design
    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            height: '1080px',
            width: '1080px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f0f23',
            backgroundImage: 'radial-gradient(circle at 25% 25%, #1e1b4b 0%, transparent 50%), radial-gradient(circle at 75% 75%, #7c3aed 0%, transparent 50%), linear-gradient(135deg, #1e1b4b 0%, #0f0f23 50%, #1e1b4b 100%)',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            color: 'white',
            padding: '60px',
            position: 'relative',
          }}
        >
          {/* Main headline with enhanced typography */}
          <div
            style={{
              fontSize: '76px',
              fontWeight: '900',
              textAlign: 'center',
              marginBottom: '24px',
              lineHeight: '0.95',
              color: 'white',
            }}
          >
            You fumbled {mockScanData.missedDeals} deals
          </div>
          
          {/* Value highlight with glow effect */}
          <div
            style={{
              fontSize: '52px',
              fontWeight: '700',
              color: '#fbbf24',
              textAlign: 'center',
              marginBottom: '80px',
            }}
          >
            worth ${mockScanData.missedValue.toLocaleString()}
          </div>

          {/* Stats section with improved layout */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              fontSize: '36px',
              fontWeight: '500',
              marginBottom: '100px',
              padding: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: '#fbbf24', fontSize: '24px' }}>●</span>
              <span>{mockScanData.mutualFollowers} mutual followers</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: '#8b5cf6', fontSize: '24px' }}>●</span>
              <span>{mockScanData.ethosScore} Ethos score</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: '#06b6d4', fontSize: '24px' }}>●</span>
              <span>{mockScanData.yaps} yaps</span>
            </div>
          </div>

          {/* Enhanced footer with logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              fontSize: '28px',
              fontWeight: '600',
              opacity: 0.95,
              padding: '20px 32px',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: '#0f0f23',
                fontWeight: '900',
              }}
            >
              DM
            </div>
            <span style={{ color: '#e5e7eb' }}>dm-filter-pro.vercel.app</span>
          </div>
        </div>
      ),
      {
        width: 1080,
        height: 1080,
      }
    );

    // In a real implementation, we would upload this to Cloudinary
    // For now, we'll return a mock URL
    const mockImageUrl = `https://res.cloudinary.com/demo/image/upload/v1/dm-audit-${id}.png`;

    return NextResponse.json({
      imageUrl: mockImageUrl,
      scanId: id,
      generatedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Image generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}

