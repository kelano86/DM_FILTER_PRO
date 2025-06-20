import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: isScrolled ? '1px solid #e2e8f0' : 'none',
      zIndex: 1000,
      padding: '1rem 0',
      transition: 'all 0.3s ease'
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

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <nav style={{
              display: 'flex',
              gap: '2rem'
            }} className="desktop-nav">
              <a href="#features" style={{
                textDecoration: 'none',
                color: '#4a5568',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                position: 'relative'
              }} onMouseEnter={(e) => {
                e.target.style.color = '#667eea'
              }} onMouseLeave={(e) => {
                e.target.style.color = '#4a5568'
              }}>
                Features
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  width: '0',
                  height: '2px',
                  background: '#667eea',
                  transition: 'width 0.3s ease'
                }} className="nav-underline"></span>
              </a>
              <a href="#how-it-works" style={{
                textDecoration: 'none',
                color: '#4a5568',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                position: 'relative'
              }} onMouseEnter={(e) => {
                e.target.style.color = '#667eea'
              }} onMouseLeave={(e) => {
                e.target.style.color = '#4a5568'
              }}>
                How It Works
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  width: '0',
                  height: '2px',
                  background: '#667eea',
                  transition: 'width 0.3s ease'
                }} className="nav-underline"></span>
              </a>
              <a href="#pricing" style={{
                textDecoration: 'none',
                color: '#4a5568',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                position: 'relative'
              }} onMouseEnter={(e) => {
                e.target.style.color = '#667eea'
              }} onMouseLeave={(e) => {
                e.target.style.color = '#4a5568'
              }}>
                Pricing
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  width: '0',
                  height: '2px',
                  background: '#667eea',
                  transition: 'width 0.3s ease'
                }} className="nav-underline"></span>
              </a>
              <a href="#faq" style={{
                textDecoration: 'none',
                color: '#4a5568',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                position: 'relative'
              }} onMouseEnter={(e) => {
                e.target.style.color = '#667eea'
              }} onMouseLeave={(e) => {
                e.target.style.color = '#4a5568'
              }}>
                FAQ
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  width: '0',
                  height: '2px',
                  background: '#667eea',
                  transition: 'width 0.3s ease'
                }} className="nav-underline"></span>
              </a>
            </nav>

            <a 
              href="#download" 
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              🚀 Get Extension
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                flexDirection: 'column',
                gap: '4px'
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              <span style={{
                width: '24px',
                height: '2px',
                background: '#4a5568',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }}></span>
              <span style={{
                width: '24px',
                height: '2px',
                background: '#4a5568',
                transition: 'all 0.3s ease',
                opacity: isMenuOpen ? '0' : '1'
              }}></span>
              <span style={{
                width: '24px',
                height: '2px',
                background: '#4a5568',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
              }}></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div style={{
          display: isMenuOpen ? 'block' : 'none',
          background: 'white',
          borderTop: '1px solid #e2e8f0',
          marginTop: '1rem',
          padding: '1rem 0',
          animation: isMenuOpen ? 'slideDown 0.3s ease' : 'none'
        }} className="mobile-menu">
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <a href="#features" style={{
              textDecoration: 'none',
              color: '#4a5568',
              fontWeight: '500',
              padding: '12px 0',
              borderBottom: '1px solid #f7fafc'
            }} onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" style={{
              textDecoration: 'none',
              color: '#4a5568',
              fontWeight: '500',
              padding: '12px 0',
              borderBottom: '1px solid #f7fafc'
            }} onClick={() => setIsMenuOpen(false)}>
              How It Works
            </a>
            <a href="#pricing" style={{
              textDecoration: 'none',
              color: '#4a5568',
              fontWeight: '500',
              padding: '12px 0',
              borderBottom: '1px solid #f7fafc'
            }} onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <a href="#faq" style={{
              textDecoration: 'none',
              color: '#4a5568',
              fontWeight: '500',
              padding: '12px 0',
              borderBottom: '1px solid #f7fafc'
            }} onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <a 
              href="#download" 
              className="btn btn-primary"
              style={{ 
                textDecoration: 'none',
                marginTop: '1rem',
                textAlign: 'center'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              🚀 Get Extension
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

