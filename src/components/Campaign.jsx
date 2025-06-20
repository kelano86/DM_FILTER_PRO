import React, { useState } from 'react'

const Campaign = () => {
  const [dealValue, setDealValue] = useState(100)
  const [isScanning, setIsScanning] = useState(false)
  const [results, setResults] = useState(null)

  const runScan = async () => {
    setIsScanning(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const totalDMs = Math.floor(Math.random() * 300) + 100
    const qualificationRate = 0.1 + Math.random() * 0.3
    const missedDeals = Math.floor(totalDMs * qualificationRate)
    const missedValue = missedDeals * dealValue
    
    setResults({
      missedDeals,
      missedValue,
      totalDMs,
      mutualFollowers: Math.floor(Math.random() * 500) + 50,
      ethosScore: Math.floor(Math.random() * 2000) + 500,
      yaps: Math.floor(Math.random() * 200) + 20,
      avgValue: dealValue
    })
    
    setIsScanning(false)
  }

  const shareOnTwitter = () => {
    if (results) {
      const text = `I just discovered I missed ${results.missedDeals} potential deals worth $${results.missedValue.toLocaleString()}! 😱 Check what you're missing with @DMFilterPro`
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
      window.open(url, '_blank')
    }
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <a 
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
        </a>
        
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          margin: '0 0 20px 0'
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
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)'
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
          
          <div style={{ margin: '30px 0' }}>
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
              onChange={(e) => setDealValue(e.target.value)}
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
              background: isScanning ? 'rgba(139, 92, 246, 0.5)' : 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '18px',
              fontWeight: '600',
              cursor: isScanning ? 'not-allowed' : 'pointer',
              width: '100%',
              transition: 'transform 0.2s'
            }}
          >
            {isScanning ? '🔍 Scanning...' : '🔍 Run DM Audit'}
          </button>
        </div>
        
        {results && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)'
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
                padding: '30px',
                borderRadius: '15px',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                background: 'rgba(239, 68, 68, 0.2)'
              }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  {results.missedDeals}
                </div>
                <div style={{ opacity: 0.8 }}>
                  Missed Deals
                </div>
              </div>
              
              <div style={{
                padding: '30px',
                borderRadius: '15px',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                background: 'rgba(251, 191, 36, 0.2)'
              }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  ${results.missedValue.toLocaleString()}
                </div>
                <div style={{ opacity: 0.8 }}>
                  Missed Value
                </div>
              </div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                  color: '#60a5fa'
                }}>
                  {results.mutualFollowers}
                </div>
                <div style={{
                  opacity: 0.7,
                  fontSize: '14px'
                }}>
                  Mutual Followers
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                  color: '#a78bfa'
                }}>
                  {results.ethosScore}
                </div>
                <div style={{
                  opacity: 0.7,
                  fontSize: '14px'
                }}>
                  Ethos Score
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                  color: '#34d399'
                }}>
                  {results.yaps}
                </div>
                <div style={{
                  opacity: 0.7,
                  fontSize: '14px'
                }}>
                  Yaps
                </div>
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
  )
}

export default Campaign

