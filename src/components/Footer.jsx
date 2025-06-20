import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{
      background: '#2d3748',
      color: 'white',
      padding: '60px 0 30px 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(4, 1fr)' : '1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
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
                fontWeight: '700'
              }}>
                DM Filter Pro
              </span>
            </div>
            <p style={{
              color: '#a0aec0',
              marginBottom: '20px',
              fontSize: '1rem'
            }}>
              AI-powered Twitter DM management for influencers, creators, and businesses. 
              Never miss important opportunities again.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <a href="#" style={{
                color: '#a0aec0',
                fontSize: '1.5rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                🐦
              </a>
              <a href="#" style={{
                color: '#a0aec0',
                fontSize: '1.5rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                📧
              </a>
              <a href="#" style={{
                color: '#a0aec0',
                fontSize: '1.5rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                💬
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 style={{
              marginBottom: '20px',
              color: 'white',
              fontSize: '1.2rem'
            }}>
              Product
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="#features" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Features
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#pricing" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Pricing
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/campaign" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  DM Audit
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{
              marginBottom: '20px',
              color: 'white',
              fontSize: '1.2rem'
            }}>
              Support
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="#faq" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  FAQ
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Documentation
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="mailto:hello@dmfilterpro.com" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Contact
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{
              marginBottom: '20px',
              color: 'white',
              fontSize: '1.2rem'
            }}>
              Legal
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/privacy" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Privacy Policy
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/terms" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Terms of Service
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/cookies" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Cookie Policy
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/gdpr" style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Download CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h3 style={{
            color: 'white',
            marginBottom: '16px',
            fontSize: '1.8rem'
          }}>
            Ready to Transform Your DM Management?
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '24px',
            fontSize: '1.1rem'
          }}>
            Join thousands of influencers who never miss important business opportunities.
          </p>
          <a 
            href="https://chrome.google.com/webstore/detail/dm-filter-pro" 
            className="btn"
            style={{
              background: 'white',
              color: '#667eea',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              padding: '16px 32px'
            }}
          >
            🚀 Install Free Chrome Extension
          </a>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid #4a5568',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{
            color: '#a0aec0',
            fontSize: '0.9rem'
          }}>
            © 2025 DM Filter Pro. All rights reserved.
          </div>
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center'
          }}>
            <span style={{
              color: '#a0aec0',
              fontSize: '0.9rem'
            }}>
              Made with ❤️ for creators
            </span>
            <div style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#48bb78',
                fontSize: '0.8rem'
              }}>
                ● Online
              </span>
              <span style={{
                color: '#a0aec0',
                fontSize: '0.8rem'
              }}>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

