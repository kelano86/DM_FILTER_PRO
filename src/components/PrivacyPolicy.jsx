import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
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
          Privacy Policy
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
          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>1. Introduction</h2>
          <p style={{ marginBottom: '20px' }}>
            DM Filter Pro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our browser extension, Telegram bot, and website services.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>2. Information We Collect</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>2.1 Information You Provide</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Telegram chat ID for notification delivery</li>
            <li>Twitter/X account information for DM filtering</li>
            <li>Configuration preferences and filter settings</li>
            <li>Support communications and feedback</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>2.2 Information Automatically Collected</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Browser extension usage data and performance metrics</li>
            <li>DM filtering statistics and effectiveness data</li>
            <li>Device information and browser type</li>
            <li>IP address and general location data</li>
            <li>Website usage analytics and interaction data</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>2.3 Third-Party Data</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Influence scores from Kaito and Ethos platforms</li>
            <li>Public Twitter/X profile information</li>
            <li>Mutual follower data and social connections</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>3. How We Use Your Information</h2>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Provide and maintain our DM filtering services</li>
            <li>Send Telegram notifications for important DMs</li>
            <li>Analyze and improve our filtering algorithms</li>
            <li>Generate DM audit reports and statistics</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>4. Information Sharing and Disclosure</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>4.1 We Do Not Sell Your Data</h3>
          <p style={{ marginBottom: '20px' }}>
            We do not sell, trade, or rent your personal information to third parties for marketing purposes.
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>4.2 Service Providers</h3>
          <p style={{ marginBottom: '20px' }}>
            We may share information with trusted service providers who assist in operating our services, including:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Cloud hosting and infrastructure providers</li>
            <li>Analytics and monitoring services</li>
            <li>Customer support platforms</li>
            <li>Security and fraud prevention services</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>4.3 Legal Requirements</h3>
          <p style={{ marginBottom: '20px' }}>
            We may disclose information when required by law, court order, or to protect our rights and safety.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>5. Data Security</h2>
          <p style={{ marginBottom: '20px' }}>
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. This includes:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security audits and monitoring</li>
            <li>Access controls and authentication measures</li>
            <li>Secure development practices</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>6. Data Retention</h2>
          <p style={{ marginBottom: '20px' }}>
            We retain your information only as long as necessary to provide our services and comply with legal obligations. Specifically:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Account data: Until account deletion or 2 years of inactivity</li>
            <li>Usage analytics: Up to 2 years for service improvement</li>
            <li>Support communications: Up to 3 years for quality assurance</li>
            <li>Legal compliance data: As required by applicable laws</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>7. Your Rights and Choices</h2>
          <p style={{ marginBottom: '15px' }}>You have the right to:</p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Access and review your personal information</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Delete your account and associated data</li>
            <li>Opt-out of non-essential communications</li>
            <li>Export your data in a portable format</li>
            <li>Object to certain processing activities</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>8. International Data Transfers</h2>
          <p style={{ marginBottom: '20px' }}>
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>9. Children's Privacy</h2>
          <p style={{ marginBottom: '20px' }}>
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>10. Changes to This Privacy Policy</h2>
          <p style={{ marginBottom: '20px' }}>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>11. Contact Us</h2>
          <p style={{ marginBottom: '20px' }}>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy

