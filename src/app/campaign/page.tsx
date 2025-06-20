'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CampaignPage() {
  const [dealValue, setDealValue] = useState(100);
  const [scanResults, setScanResults] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);

  const runScan = async () => {
    setIsScanning(true);
    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ avgValue: dealValue })
      });
      const data = await response.json();
      setScanResults(data);
    } catch (error) {
      console.error('Scan failed:', error);
    }
    setIsScanning(false);
  };

  const shareOnTwitter = () => {
    if (scanResults) {
      const text = `I just discovered I missed ${scanResults.missedDeals} potential deals worth $${scanResults.missedValue.toLocaleString()}! 😱 Check what you're missing with @DMFilterPro`;
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <Link 
          href="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '40px',
            display: 'inline-block'
          }}
        >
          ← DM Filter Pro
        </Link>

        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          DM Deal Audit
        </h1>

        <p style={{
          fontSize: '18px',
          marginBottom: '60px',
          opacity: 0.9
        }}>
          Discover how many potential deals you've been missing in your Twitter DMs
        </p>

        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '40px',
          borderRadius: '20px',
          marginBottom: '40px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{
            fontSize: '24px',
            marginBottom: '20px'
          }}>
            Configure Your Audit
          </h3>
          
          <p style={{
            marginBottom: '30px',
            opacity: 0.8
          }}>
            Set your average deal value to calculate missed opportunities
          </p>

          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              marginBottom: '15px',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              Average Deal Value: ${dealValue}
            </label>
            
            <input
              type="range"
              min="0"
              max="10000"
              value={dealValue}
              onChange={(e) => setDealValue(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: 'rgba(255, 255, 255, 0.3)',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
              fontSize: '14px',
              opacity: 0.7
            }}>
              <span>$0</span>
              <span>$10,000</span>
            </div>
          </div>

          <button
            onClick={runScan}
            disabled={isScanning}
            style={{
              background: isScanning 
                ? 'rgba(139, 92, 246, 0.5)' 
                : 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '18px',
              fontWeight: '600',
              cursor: isScanning ? 'not-allowed' : 'pointer',
              width: '100%'
            }}
          >
            {isScanning ? '🔍 Scanning...' : '🔍 Run DM Audit'}
          </button>
        </div>

        {scanResults && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{
              fontSize: '24px',
              marginBottom: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}>
              📊 Audit Results
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              <div style={{
                background: 'rgba(239, 68, 68, 0.2)',
                padding: '30px',
                borderRadius: '15px',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}>
                <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>
                  {scanResults.missedDeals}
                </div>
                <div style={{ opacity: 0.8 }}>Missed Deals</div>
              </div>

              <div style={{
                background: 'rgba(251, 191, 36, 0.2)',
                padding: '30px',
                borderRadius: '15px',
                border: '1px solid rgba(251, 191, 36, 0.3)'
              }}>
                <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>
                  ${scanResults.missedValue.toLocaleString()}
                </div>
                <div style={{ opacity: 0.8 }}>Missed Value</div>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#60a5fa' }}>
                  {scanResults.mutualFollowers}
                </div>
                <div style={{ opacity: 0.7, fontSize: '14px' }}>Mutual Followers</div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#a78bfa' }}>
                  {scanResults.ethosScore}
                </div>
                <div style={{ opacity: 0.7, fontSize: '14px' }}>Ethos Score</div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#34d399' }}>
                  {scanResults.yaps}
                </div>
                <div style={{ opacity: 0.7, fontSize: '14px' }}>Yaps</div>
              </div>
            </div>

            <button
              onClick={shareOnTwitter}
              style={{
                background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              🐦 Share on Twitter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

