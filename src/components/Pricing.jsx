import React from 'react'

const Pricing = () => {
  return (
    <section id="pricing" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>
            Start free and upgrade as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Free Plan */}
          <div className="card" style={{
            position: 'relative',
            textAlign: 'center'
          }}>
            <div style={{
              background: '#f7fafc',
              color: '#4a5568',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '20px',
              display: 'inline-block'
            }}>
              STARTER
            </div>
            
            <h3 style={{ marginBottom: '8px' }}>Free</h3>
            <div style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#2d3748',
              marginBottom: '8px'
            }}>
              $0
            </div>
            <p style={{ 
              color: '#718096',
              marginBottom: '30px',
              fontSize: '1rem'
            }}>
              Perfect for getting started
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              marginBottom: '30px',
              textAlign: 'left'
            }}>
              <li style={{ 
                padding: '8px 0',
                color: '#4a5568',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#48bb78' }}>✓</span>
                Basic DM filtering
              </li>
              <li style={{ 
                padding: '8px 0',
                color: '#4a5568',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#48bb78' }}>✓</span>
                Telegram notifications
              </li>
              <li style={{ 
                padding: '8px 0',
                color: '#4a5568',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#48bb78' }}>✓</span>
                Real Kaito & Ethos scores
              </li>
              <li style={{ 
                padding: '8px 0',
                color: '#4a5568',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#48bb78' }}>✓</span>
                Smart response templates
              </li>
              <li style={{ 
                padding: '8px 0',
                color: '#718096',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#e53e3e' }}>✗</span>
                Advanced analytics
              </li>
            </ul>

            <a 
              href="#download" 
              className="btn btn-secondary"
              style={{ 
                textDecoration: 'none',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              Get Started Free
            </a>
          </div>

          {/* Pro Plan */}
          <div className="card" style={{
            position: 'relative',
            textAlign: 'center',
            border: '2px solid #667eea',
            transform: 'scale(1.05)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '8px 24px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              MOST POPULAR
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '20px',
              marginTop: '20px',
              display: 'inline-block'
            }}>
              PRO
            </div>
            
            <h3 style={{ marginBottom: '8px', color: '#2d3748' }}>Pro</h3>
            <div style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#2d3748',
              marginBottom: '8px'
            }}>
              $9
            </div>
            <p style={{ 
              color: '#718096',
              marginBottom: '30px',
              fontSize: '1rem'
            }}>
              per month
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              marginBottom: '30px',
              textAlign: 'left'
            }}>
              <li style={{ 
                padding: '8px 0',
                color: '#2d3748',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#48bb78' }}>✓</span>
                Everything in Free
              </li>
              <li style={{ 
                padding: '8px 0',
                color: '#2d3748',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#48bb78' }}>✓</span>
                Advanced analytics dashboard
              </li>
              <li style={{ 
                padding: '8px 0',
                color: '#2d3748',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#48bb78' }}>✓</span>
                Custom filtering rules
              </li>
              <li style={{ 
                padding: '8px 0',
                color: '#2d3748',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#48bb78' }}>✓</span>
                Team collaboration
              </li>
              <li style={{ 
                padding: '8px 0',
                color: '#2d3748',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#48bb78' }}>✓</span>
                Priority support
              </li>
            </ul>

            <a 
              href="#download" 
              className="btn btn-secondary"
              style={{ 
                textDecoration: 'none',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              Start Pro Trial
            </a>
          </div>
        </div>

        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          padding: '30px',
          background: '#f7fafc',
          borderRadius: '12px'
        }}>
          <h3 style={{ marginBottom: '16px', color: '#2d3748' }}>
            🎯 Start Free, Upgrade When Ready
          </h3>
          <p style={{ 
            color: '#4a5568',
            marginBottom: '0',
            fontSize: '1.1rem'
          }}>
            All plans include our core DM filtering features. Upgrade for advanced analytics, 
            team collaboration, and enterprise features.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing

