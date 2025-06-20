import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
        paddingTop: '140px',
        paddingBottom: '80px',
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'block'
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }}>
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
              <a href="#demo" className="btn btn-secondary btn-large" style={{ textDecoration: 'none' }}>
                📱 See Demo
              </a>
            </div>

            <div style={{
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.7)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'transform 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)'
              }} onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'
              }}>
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
              <div style={{
                textAlign: 'center',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.7)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'transform 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)'
              }} onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'
              }}>
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
              <div style={{
                textAlign: 'center',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.7)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'transform 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)'
              }} onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'
              }}>
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
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s'
          }} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0',
              maxWidth: '400px',
              margin: '0 auto',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Animated background gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #667eea, #764ba2, #667eea)',
                backgroundSize: '200% 100%',
                animation: 'gradientMove 3s ease infinite'
              }}></div>
              
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '20px',
                color: 'white',
                position: 'relative'
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
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 4px 12px rgba(72, 187, 120, 0.4)'
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
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
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 4px 12px rgba(66, 153, 225, 0.4)'
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
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
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 4px 12px rgba(237, 137, 54, 0.4)'
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
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
              boxShadow: '0 8px 20px rgba(72, 187, 120, 0.4)',
              animation: 'pulse 2s infinite'
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

