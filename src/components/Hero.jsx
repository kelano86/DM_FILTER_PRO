import React from 'react'

const Hero = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
      paddingTop: '140px',
      paddingBottom: '80px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div className="fade-in-up">
            <h1 style={{ marginBottom: '24px' }}>
              Never Miss Important 
              <br />
              <span className="gradient-text">Business DMs</span> Again
            </h1>
            
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '32px',
              color: '#4a5568',
              lineHeight: '1.6'
            }}>
              AI-powered Twitter DM filtering with real influence scoring from Kaito and Ethos. 
              Get instant Telegram notifications for partnership opportunities, media requests, 
              and business inquiries.
            </p>

            <div style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}>
              <a href="#download" className="btn btn-primary btn-large" style={{ textDecoration: 'none' }}>
                🚀 Install Free Extension
              </a>
              <a 
                href="https://t.me/DMFilterProBot?start=website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-large" 
                style={{ textDecoration: 'none' }}
              >
                📱 Start Telegram Setup
              </a>
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '32px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🔍</span>
                <strong style={{ color: '#10b981' }}>New: DM Deal Audit!</strong>
              </div>
              <p style={{
                margin: 0,
                color: '#4a5568',
                fontSize: '0.95rem',
                marginBottom: '12px'
              }}>
                Discover how many potential deals you've been missing in your Twitter DMs. 
                Our AI reveals hidden opportunities worth thousands!
              </p>
              <a 
                href="/campaign" 
                style={{
                  background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'inline-block'
                }}
              >
                🔍 Run Your DM Audit
              </a>
            </div>

            <div style={{
              background: 'rgba(102, 126, 234, 0.1)',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '32px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🚀</span>
                <strong style={{ color: '#667eea' }}>One-Click Setup!</strong>
              </div>
              <p style={{
                margin: 0,
                color: '#4a5568',
                fontSize: '0.95rem'
              }}>
                Click "Start Telegram Setup" → Send /start → Automatic configuration complete! 
                No manual Chat ID copying required.
              </p>
            </div>

            <div style={{
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#667eea'
                }}>
                  5,000+
                </div>
                <div style={{
                  color: '#718096',
                  fontSize: '0.9rem'
                }}>
                  DMs Filtered
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#667eea'
                }}>
                  98%
                </div>
                <div style={{
                  color: '#718096',
                  fontSize: '0.9rem'
                }}>
                  Accuracy Rate
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#667eea'
                }}>
                  30s
                </div>
                <div style={{
                  color: '#718096',
                  fontSize: '0.9rem'
                }}>
                  Setup Time
                </div>
              </div>
            </div>
          </div>

          <div style={{
            position: 'relative',
            textAlign: 'center'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0',
              maxWidth: '400px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '20px',
                color: 'white'
              }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>
                  🔥 Important DM Alert
                </div>
                <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>
                  From: @cryptopartner
                </div>
                <div style={{ fontSize: '0.9rem', opacity: '0.9', marginBottom: '12px' }}>
                  "Hi! I'd love to collaborate on a new DeFi project..."
                </div>
                <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>
                  📊 Yap Score: 94 | Ethos Score: 87 | Importance: 91/100
                </div>
              </div>

              <div style={{
                display: 'grid',
                gap: '8px'
              }}>
                <button style={{
                  background: '#48bb78',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  🤝 Accept Partnership
                </button>
                <button style={{
                  background: '#4299e1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  📋 Request Details
                </button>
                <button style={{
                  background: '#ed8936',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  📱 View DM
                </button>
              </div>
            </div>

            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              background: '#48bb78',
              color: 'white',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              boxShadow: '0 8px 20px rgba(72, 187, 120, 0.4)'
            }}>
              ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

