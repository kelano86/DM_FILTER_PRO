import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e2e8f0',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container">
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              DM
            </div>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#2d3748'
            }}>
              DM Filter Pro
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <nav style={{
              display: window.innerWidth > 768 ? 'flex' : 'none',
              gap: '2rem'
            }}>
              <a href="#features" style={{
                textDecoration: 'none',
                color: '#4a5568',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}>Features</a>
              <a href="#how-it-works" style={{
                textDecoration: 'none',
                color: '#4a5568',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}>How It Works</a>
              <a href="#pricing" style={{
                textDecoration: 'none',
                color: '#4a5568',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}>Pricing</a>
              <a href="#faq" style={{
                textDecoration: 'none',
                color: '#4a5568',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}>FAQ</a>
            </nav>

            <a 
              href="#download" 
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              🚀 Get Extension
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

