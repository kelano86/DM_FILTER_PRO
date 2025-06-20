import React, { useState, useEffect } from 'react'

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const features = [
    {
      icon: '🤖',
      title: 'Smart Response Templates',
      description: 'AI-generated response templates with your personal links (Calendly, email, website) for instant professional replies.',
      highlight: 'NEW',
      color: '#667eea'
    },
    {
      icon: '📊',
      title: 'Real Influence Scoring',
      description: 'Authentic Yap scores from Kaito AI and credibility ratings from Ethos Network - no fake metrics.',
      highlight: 'VERIFIED',
      color: '#48bb78'
    },
    {
      icon: '📱',
      title: 'Instant Telegram Alerts',
      description: 'Get notified immediately when important DMs arrive with contextual response buttons.',
      highlight: 'INSTANT',
      color: '#4299e1'
    },
    {
      icon: '🎯',
      title: 'Advanced Filtering',
      description: 'Filter by mutual followers, keywords, influence scores, and custom criteria you define.',
      highlight: 'PRECISE',
      color: '#ed8936'
    },
    {
      icon: '⚡',
      title: 'One-Click Responses',
      description: 'Tap a template button in Telegram → Twitter opens with personalized response ready to send.',
      highlight: 'FAST',
      color: '#9f7aea'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'No data collection, local processing, works without API keys. Your privacy is protected.',
      highlight: 'SECURE',
      color: '#f56565'
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="features" style={{ background: 'white' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        width: '100%'
      }}>
        <div className="section-header">
          <h2>Powerful Features for Modern Influencers</h2>
          <p>
            Everything you need to manage Twitter DMs professionally and never miss 
            important business opportunities again.
          </p>
        </div>

        <div className="grid features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card fade-in-up" 
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: hoveredFeature === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Hover effect background */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${feature.color}10 0%, ${feature.color}05 100%)`,
                opacity: hoveredFeature === index ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}></div>

              <div style={{
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  position: 'relative'
                }}>
                  <div className="card-icon" style={{
                    background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}dd 100%)`,
                    transform: hoveredFeature === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                    transition: 'all 0.3s ease'
                  }}>
                    {feature.icon}
                  </div>
                  {feature.highlight && (
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      background: feature.color,
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      transform: 'translateY(-8px)',
                      animation: hoveredFeature === index ? 'pulse 1s infinite' : 'none'
                    }}>
                      {feature.highlight}
                    </div>
                  )}
                </div>
                
                <h3 style={{ 
                  marginBottom: '12px',
                  color: hoveredFeature === index ? feature.color : '#4a5568',
                  transition: 'color 0.3s ease'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  marginBottom: '0', 
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>

                {/* Learn more link */}
                <div style={{
                  marginTop: '16px',
                  opacity: hoveredFeature === index ? 1 : 0,
                  transform: hoveredFeature === index ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.3s ease'
                }}>
                  <a 
                    href="#learn-more" 
                    style={{
                      color: feature.color,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '60px',
          padding: '40px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 0.6s'
        }} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
          {/* Animated background elements */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            animation: 'rotate 20s linear infinite'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ color: 'white', marginBottom: '16px' }}>
              🚀 Ready to Transform Your DM Management?
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              marginBottom: '24px',
              fontSize: '1.1rem'
            }}>
              Join thousands of influencers and creators who never miss important opportunities.
            </p>
            <a 
              href="#download" 
              className="btn"
              style={{
                background: 'white',
                color: '#667eea',
                textDecoration: 'none',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}
            >
              Install Free Extension Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

