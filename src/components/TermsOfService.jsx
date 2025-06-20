import React from 'react'
import { Link } from 'react-router-dom'

const TermsOfService = () => {
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
          Terms of Service
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
          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>1. Acceptance of Terms</h2>
          <p style={{ marginBottom: '20px' }}>
            By accessing or using DM Filter Pro's services, including our browser extension, Telegram bot, and website, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>2. Description of Service</h2>
          <p style={{ marginBottom: '20px' }}>
            DM Filter Pro provides AI-powered Twitter/X direct message filtering services, including:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Browser extension for automated DM filtering</li>
            <li>Telegram bot for instant notifications</li>
            <li>Influence scoring using Kaito and Ethos data</li>
            <li>DM audit and analytics tools</li>
            <li>Business opportunity identification</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>3. User Accounts and Registration</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.1 Account Creation</h3>
          <p style={{ marginBottom: '20px' }}>
            To use our services, you must provide accurate and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials.
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.2 Account Responsibility</h3>
          <p style={{ marginBottom: '20px' }}>
            You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>4. Acceptable Use Policy</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>4.1 Permitted Uses</h3>
          <p style={{ marginBottom: '15px' }}>You may use our services for:</p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Filtering and managing your Twitter/X direct messages</li>
            <li>Receiving notifications about important business opportunities</li>
            <li>Analyzing your DM patterns and missed opportunities</li>
            <li>Legitimate business and professional networking purposes</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>4.2 Prohibited Uses</h3>
          <p style={{ marginBottom: '15px' }}>You may not use our services to:</p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Transmit spam, malware, or malicious content</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Reverse engineer or attempt to extract our algorithms</li>
            <li>Use automated tools to abuse our services</li>
            <li>Violate Twitter/X's Terms of Service</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>5. Privacy and Data Protection</h2>
          <p style={{ marginBottom: '20px' }}>
            Your privacy is important to us. Our collection and use of your information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>6. Third-Party Services</h2>
          <p style={{ marginBottom: '20px' }}>
            Our services integrate with third-party platforms including Twitter/X, Telegram, Kaito, and Ethos. Your use of these platforms is subject to their respective terms of service and privacy policies.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>7. Service Availability</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>7.1 Uptime</h3>
          <p style={{ marginBottom: '20px' }}>
            We strive to maintain high service availability but do not guarantee uninterrupted access. We may perform maintenance, updates, or experience technical issues that temporarily affect service availability.
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>7.2 Service Modifications</h3>
          <p style={{ marginBottom: '20px' }}>
            We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice to users.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>8. Intellectual Property</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>8.1 Our Rights</h3>
          <p style={{ marginBottom: '20px' }}>
            DM Filter Pro and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>8.2 User Content</h3>
          <p style={{ marginBottom: '20px' }}>
            You retain ownership of any content you provide to our services. By using our services, you grant us a limited license to use your content solely for providing and improving our services.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>9. Payment and Billing</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>9.1 Free and Paid Services</h3>
          <p style={{ marginBottom: '20px' }}>
            We offer both free and paid tiers of service. Paid services are billed according to the pricing plan you select.
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>9.2 Refunds</h3>
          <p style={{ marginBottom: '20px' }}>
            Refunds are provided according to our refund policy. Generally, we offer refunds within 30 days of purchase for annual plans and within 7 days for monthly plans.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>10. Disclaimers and Limitations</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>10.1 Service Disclaimer</h3>
          <p style={{ marginBottom: '20px' }}>
            Our services are provided "as is" without warranties of any kind. We do not guarantee the accuracy of influence scores or the completeness of DM filtering.
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>10.2 Limitation of Liability</h3>
          <p style={{ marginBottom: '20px' }}>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits or business opportunities.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>11. Indemnification</h2>
          <p style={{ marginBottom: '20px' }}>
            You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>12. Termination</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>12.1 Termination by You</h3>
          <p style={{ marginBottom: '20px' }}>
            You may terminate your account at any time by contacting us or using the account deletion feature in our services.
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>12.2 Termination by Us</h3>
          <p style={{ marginBottom: '20px' }}>
            We may terminate or suspend your account immediately if you violate these Terms or engage in prohibited activities.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>13. Governing Law</h2>
          <p style={{ marginBottom: '20px' }}>
            These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to conflict of law principles.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>14. Changes to Terms</h2>
          <p style={{ marginBottom: '20px' }}>
            We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>15. Contact Information</h2>
          <p style={{ marginBottom: '20px' }}>
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Email: legal@dmfilterpro.com</li>
            <li>Website: https://dm-filter-pro.vercel.app/contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService

