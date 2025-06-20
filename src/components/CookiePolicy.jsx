import React from 'react'
import { Link } from 'react-router-dom'

const CookiePolicy = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        <Link 
          to="/" 
          style={{
            color: '#667eea',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '30px',
            display: 'inline-block'
          }}
        >
          ← Back to DM Filter Pro
        </Link>
        
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#2d3748'
        }}>
          Cookie Policy
        </h1>
        
        <p style={{
          fontSize: '16px',
          color: '#4a5568',
          marginBottom: '30px'
        }}>
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          lineHeight: '1.6',
          color: '#2d3748'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>1. What Are Cookies?</h2>
          <p style={{ marginBottom: '20px' }}>
            Cookies are small text files that are stored on your device when you visit our website or use our browser extension. They help us provide you with a better experience by remembering your preferences and analyzing how you use our services.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>2. How We Use Cookies</h2>
          <p style={{ marginBottom: '20px' }}>
            DM Filter Pro uses cookies and similar technologies for the following purposes:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Essential functionality and security</li>
            <li>Remembering your preferences and settings</li>
            <li>Analyzing website performance and usage</li>
            <li>Improving our services and user experience</li>
            <li>Providing personalized content and features</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>3. Types of Cookies We Use</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.1 Essential Cookies</h3>
          <p style={{ marginBottom: '15px' }}>
            These cookies are necessary for our website and browser extension to function properly. They enable core functionality such as:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>User authentication and session management</li>
            <li>Security features and fraud prevention</li>
            <li>Basic website functionality and navigation</li>
            <li>Extension configuration and settings storage</li>
          </ul>
          <p style={{ marginBottom: '20px', fontStyle: 'italic' }}>
            <strong>Duration:</strong> Session cookies (deleted when you close your browser) and persistent cookies (up to 1 year)
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.2 Analytics Cookies</h3>
          <p style={{ marginBottom: '15px' }}>
            We use analytics cookies to understand how visitors interact with our website and extension. This helps us improve our services. These cookies collect information such as:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Pages visited and time spent on each page</li>
            <li>Click patterns and user interactions</li>
            <li>Browser type and device information</li>
            <li>Extension usage patterns and feature adoption</li>
            <li>Error reports and performance metrics</li>
          </ul>
          <p style={{ marginBottom: '20px', fontStyle: 'italic' }}>
            <strong>Duration:</strong> Up to 2 years<br/>
            <strong>Third-party services:</strong> Google Analytics, Mixpanel
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.3 Functional Cookies</h3>
          <p style={{ marginBottom: '15px' }}>
            These cookies enable enhanced functionality and personalization, including:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Remembering your filter preferences</li>
            <li>Storing your notification settings</li>
            <li>Maintaining your dashboard customizations</li>
            <li>Language and region preferences</li>
            <li>Theme and display preferences</li>
          </ul>
          <p style={{ marginBottom: '20px', fontStyle: 'italic' }}>
            <strong>Duration:</strong> Up to 1 year
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.4 Performance Cookies</h3>
          <p style={{ marginBottom: '15px' }}>
            These cookies help us monitor and improve the performance of our services:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Page load times and response speeds</li>
            <li>Extension performance metrics</li>
            <li>API response times and error rates</li>
            <li>System resource usage</li>
          </ul>
          <p style={{ marginBottom: '20px', fontStyle: 'italic' }}>
            <strong>Duration:</strong> Up to 30 days
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>4. Third-Party Cookies</h2>
          <p style={{ marginBottom: '20px' }}>
            We may use third-party services that set their own cookies. These include:
          </p>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>4.1 Analytics Services</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li><strong>Google Analytics:</strong> Website and extension usage analytics</li>
            <li><strong>Mixpanel:</strong> User behavior and feature usage tracking</li>
            <li><strong>Hotjar:</strong> User experience and heatmap analysis</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>4.2 Support Services</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li><strong>Intercom:</strong> Customer support chat functionality</li>
            <li><strong>Zendesk:</strong> Help desk and ticket management</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>4.3 Infrastructure Services</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li><strong>Cloudflare:</strong> Security and performance optimization</li>
            <li><strong>Vercel:</strong> Website hosting and delivery</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>5. Browser Extension Storage</h2>
          <p style={{ marginBottom: '20px' }}>
            Our browser extension uses local storage mechanisms to function effectively:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li><strong>Local Storage:</strong> User preferences and configuration data</li>
            <li><strong>Session Storage:</strong> Temporary data for current browsing session</li>
            <li><strong>IndexedDB:</strong> Cached DM data and filtering rules</li>
            <li><strong>Chrome Storage API:</strong> Extension settings and sync data</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>6. Managing Your Cookie Preferences</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>6.1 Browser Settings</h3>
          <p style={{ marginBottom: '20px' }}>
            You can control cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>View and delete existing cookies</li>
            <li>Block cookies from specific websites</li>
            <li>Block third-party cookies</li>
            <li>Clear all cookies when you close your browser</li>
            <li>Set up notifications when cookies are being set</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>6.2 Extension Settings</h3>
          <p style={{ marginBottom: '20px' }}>
            Within our browser extension, you can:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Disable analytics and tracking features</li>
            <li>Clear stored data and preferences</li>
            <li>Opt out of performance monitoring</li>
            <li>Manage data sync settings</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>6.3 Opt-Out Links</h3>
          <p style={{ marginBottom: '20px' }}>
            You can opt out of specific third-party tracking:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>Google Analytics Opt-out</a></li>
            <li><a href="https://mixpanel.com/optout/" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>Mixpanel Opt-out</a></li>
            <li><a href="https://www.hotjar.com/legal/compliance/opt-out" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>Hotjar Opt-out</a></li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>7. Impact of Disabling Cookies</h2>
          <p style={{ marginBottom: '20px' }}>
            Disabling certain cookies may affect your experience with our services:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li><strong>Essential cookies:</strong> May prevent core functionality from working</li>
            <li><strong>Functional cookies:</strong> May reset your preferences on each visit</li>
            <li><strong>Analytics cookies:</strong> Won't affect functionality but limits our ability to improve services</li>
            <li><strong>Performance cookies:</strong> May result in slower performance optimization</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>8. Cookie Consent</h2>
          <p style={{ marginBottom: '20px' }}>
            By continuing to use our website and browser extension, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>9. Updates to This Policy</h2>
          <p style={{ marginBottom: '20px' }}>
            We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>10. Contact Us</h2>
          <p style={{ marginBottom: '20px' }}>
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Email: privacy@dmfilterpro.com</li>
            <li>Website: https://dm-filter-pro.vercel.app/contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicy

