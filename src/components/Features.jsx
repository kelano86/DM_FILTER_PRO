import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '🤖',
      title: 'Smart Response Templates',
      description: 'AI-generated response templates with your personal links (Calendly, email, website) for instant professional replies.',
      highlight: 'NEW'
    },
    {
      icon: '📊',
      title: 'Real Influence Scoring',
      description: 'Authentic Yap scores from Kaito AI and credibility ratings from Ethos Network - no fake metrics.',
      highlight: 'VERIFIED'
    },
    {
      icon: '📱',
      title: 'Instant Telegram Alerts',
      description: 'Get notified immediately when important DMs arrive with contextual response buttons.',
      highlight: 'INSTANT'
    },
    {
      icon: '🎯',
      title: 'Advanced Filtering',
      description: 'Filter by mutual followers, keywords, influence scores, and custom criteria you define.',
      highlight: 'PRECISE'
    },
    {
      icon: '⚡',
      title: 'One-Click Responses',
      description: 'Tap a template button in Telegram → Twitter opens with personalized response ready to send.',
      highlight: 'FAST'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'No data collection, local processing, works without API keys. Your privacy is protected.',
      highlight: 'SECURE'
    }
  ]

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

        <div className="grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className="card fade-in-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <div style={{
                position: 'relative'
              }}>
                <div className="card-icon">
                  {feature.icon}
                </div>
                {feature.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    background: '#48bb78',
                    color: 'white',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    transform: 'translateY(-8px)'
                  }}>
                    {feature.highlight}
                  </div>
                )}
              </div>
              
              <h3 style={{ marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ marginBottom: '0', fontSize: '1rem' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '60px',
          padding: '40px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          color: 'white',
          textAlign: 'center'
        }}>
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
              fontWeight: '600'
            }}
          >
            Install Free Extension Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Features

