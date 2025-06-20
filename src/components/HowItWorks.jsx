import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Install Extension',
      description: 'Add DM Filter Pro to Chrome in 30 seconds. No API keys needed - works immediately.',
      icon: '⬇️'
    },
    {
      number: '2',
      title: 'One-Click Telegram Setup',
      description: 'Click our Telegram link → Chat opens → Send /start → Automatic setup complete! No manual Chat ID copying.',
      icon: '🚀'
    },
    {
      number: '3',
      title: 'Configure Preferences',
      description: 'Set filtering thresholds, add keywords, and configure your personal links (Calendly, email, website).',
      icon: '⚙️'
    },
    {
      number: '4',
      title: 'Get Smart Alerts',
      description: 'Receive instant Telegram notifications with AI-generated response templates when important DMs arrive.',
      icon: '🔔'
    },
    {
      number: '5',
      title: 'Respond Instantly',
      description: 'Tap a template button → Twitter opens with personalized response ready to send. Professional replies in seconds.',
      icon: '⚡'
    }
  ]

  return (
    <section id="how-it-works" style={{
      background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        width: '100%'
      }}>
        <div className="section-header">
          <h2>How It Works</h2>
          <p>
            Get started in minutes and transform your Twitter DM management forever. 
            No technical skills required.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gap: '40px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '24px',
              background: 'white',
              padding: '30px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: '700',
                flexShrink: 0
              }}>
                {step.number}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <h3 style={{ 
                    margin: 0,
                    color: '#2d3748'
                  }}>
                    {step.title}
                  </h3>
                  <span style={{ fontSize: '1.5rem' }}>
                    {step.icon}
                  </span>
                </div>
                <p style={{
                  margin: 0,
                  color: '#4a5568',
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '60px',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h3 style={{ marginBottom: '16px', color: '#2d3748' }}>
              ⏱️ Setup Time: Under 3 Minutes
            </h3>
            <p style={{ 
              marginBottom: '24px',
              color: '#4a5568',
              fontSize: '1.1rem'
            }}>
              With our new one-click Telegram setup, most users are filtering DMs in under 3 minutes. 
              No manual Chat ID copying - everything is automated!
            </p>
            <a 
              href="#download" 
              className="btn btn-primary btn-large"
              style={{ textDecoration: 'none' }}
            >
              Start Your 3-Minute Setup
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

