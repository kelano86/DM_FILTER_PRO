import React, { useState, useEffect } from 'react'

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email)
    }
  }

  return (
    <section style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease'
        }} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 style={{
            color: 'white',
            marginBottom: '24px',
            fontSize: '3rem'
          }}>
            Ready to Transform Your DM Management?
          </h2>
          
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Join thousands of influencers who never miss important opportunities. 
            Get started in 30 seconds - no credit card required.
          </p>

          {!isSubmitted ? (
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              <a 
                href="#download" 
                className="btn btn-large"
                style={{
                  background: 'white',
                  color: '#667eea',
                  textDecoration: 'none',
                  fontWeight: '600',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                }}
              >
                🚀 Install Free Extension
              </a>
              <a 
                href="#demo" 
                className="btn btn-large"
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                📱 Watch Demo
              </a>
            </div>
          ) : (
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '40px',
              backdropFilter: 'blur(10px)'
            }}>
              <p style={{
                color: 'white',
                fontSize: '1.1rem',
                margin: 0
              }}>
                ✅ Thanks! We'll send you setup instructions and exclusive tips.
              </p>
            </div>
          )}

          {/* Email Signup */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '30px',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <h3 style={{
              color: 'white',
              marginBottom: '16px',
              fontSize: '1.3rem'
            }}>
              Get Early Access & Exclusive Tips
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '20px',
              fontSize: '0.95rem'
            }}>
              Join our newsletter for advanced filtering strategies and influencer insights.
            </p>
            
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  flex: '1',
                  minWidth: '250px',
                  padding: '12px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: 'white'
                }}
              />
              <button
                type="submit"
                className="btn"
                style={{
                  background: '#48bb78',
                  color: 'white',
                  border: 'none',
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Trust Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.9rem'
            }}>
              <span>🔒</span>
              <span>Privacy First</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.9rem'
            }}>
              <span>⚡</span>
              <span>30s Setup</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.9rem'
            }}>
              <span>🎯</span>
              <span>98% Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA 