import React from 'react'
import { Link } from 'react-router-dom'

const GDPRPolicy = () => {
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
          GDPR Compliance & Data Protection
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
            DM Filter Pro is committed to protecting your personal data and respecting your privacy rights under the General Data Protection Regulation (GDPR). This page explains your rights as a data subject and how we comply with GDPR requirements.
          </p>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>2. Legal Basis for Processing</h2>
          <p style={{ marginBottom: '20px' }}>
            We process your personal data based on the following legal grounds under GDPR Article 6:
          </p>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>2.1 Consent (Article 6(1)(a))</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Marketing communications and newsletters</li>
            <li>Non-essential analytics and tracking</li>
            <li>Optional feature usage and personalization</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>2.2 Contract Performance (Article 6(1)(b))</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Providing DM filtering services</li>
            <li>Telegram notification delivery</li>
            <li>Account management and authentication</li>
            <li>Customer support and service delivery</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>2.3 Legitimate Interest (Article 6(1)(f))</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Service improvement and optimization</li>
            <li>Security monitoring and fraud prevention</li>
            <li>Technical support and troubleshooting</li>
            <li>Business analytics and performance monitoring</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>2.4 Legal Obligation (Article 6(1)(c))</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Tax and accounting requirements</li>
            <li>Regulatory compliance and reporting</li>
            <li>Law enforcement cooperation when required</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>3. Your Rights Under GDPR</h2>
          <p style={{ marginBottom: '20px' }}>
            As a data subject under GDPR, you have the following rights:
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.1 Right of Access (Article 15)</h3>
          <p style={{ marginBottom: '20px' }}>
            You have the right to obtain confirmation that we are processing your personal data and access to that data. You can request:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>A copy of your personal data we hold</li>
            <li>Information about how we use your data</li>
            <li>Details about data sharing and transfers</li>
            <li>Retention periods for your data</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.2 Right to Rectification (Article 16)</h3>
          <p style={{ marginBottom: '20px' }}>
            You can request correction of inaccurate or incomplete personal data. We will update your information promptly and notify any third parties who received the incorrect data.
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.3 Right to Erasure (Article 17)</h3>
          <p style={{ marginBottom: '20px' }}>
            You can request deletion of your personal data when:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>The data is no longer necessary for the original purpose</li>
            <li>You withdraw consent and there's no other legal basis</li>
            <li>You object to processing and there are no overriding legitimate grounds</li>
            <li>The data has been unlawfully processed</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.4 Right to Restrict Processing (Article 18)</h3>
          <p style={{ marginBottom: '20px' }}>
            You can request restriction of processing when:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>You contest the accuracy of the data</li>
            <li>Processing is unlawful but you don't want erasure</li>
            <li>We no longer need the data but you need it for legal claims</li>
            <li>You've objected to processing pending verification</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.5 Right to Data Portability (Article 20)</h3>
          <p style={{ marginBottom: '20px' }}>
            You can request your personal data in a structured, commonly used, machine-readable format and have it transmitted to another controller.
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.6 Right to Object (Article 21)</h3>
          <p style={{ marginBottom: '20px' }}>
            You can object to processing based on legitimate interests or for direct marketing purposes. We will stop processing unless we have compelling legitimate grounds.
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>3.7 Rights Related to Automated Decision-Making (Article 22)</h3>
          <p style={{ marginBottom: '20px' }}>
            You have the right not to be subject to decisions based solely on automated processing. Our DM filtering uses automated processing, but you can:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Request human intervention in filtering decisions</li>
            <li>Express your point of view on automated decisions</li>
            <li>Contest automated filtering results</li>
            <li>Adjust filtering sensitivity and criteria</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>4. How to Exercise Your Rights</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>4.1 Contact Methods</h3>
          <p style={{ marginBottom: '20px' }}>
            To exercise your GDPR rights, contact us through:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Email: gdpr@dmfilterpro.com</li>
            <li>Data Protection Officer: dpo@dmfilterpro.com</li>
            <li>Online form: https://dm-filter-pro.vercel.app/gdpr-request</li>
            <li>In-app settings: Account → Privacy → Data Rights</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>4.2 Response Timeline</h3>
          <p style={{ marginBottom: '20px' }}>
            We will respond to your requests within one month of receipt. In complex cases, we may extend this by two additional months and will inform you of any delay.
          </p>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>4.3 Identity Verification</h3>
          <p style={{ marginBottom: '20px' }}>
            To protect your privacy, we may need to verify your identity before processing requests. We may ask for:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Account email verification</li>
            <li>Additional identifying information</li>
            <li>Proof of identity for sensitive requests</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>5. Data Protection Measures</h2>
          
          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>5.1 Technical Safeguards</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>End-to-end encryption for sensitive data</li>
            <li>Regular security audits and penetration testing</li>
            <li>Access controls and authentication systems</li>
            <li>Automated backup and disaster recovery</li>
            <li>Secure development practices and code reviews</li>
          </ul>

          <h3 style={{ marginBottom: '15px', color: '#4a5568' }}>5.2 Organizational Measures</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Staff training on data protection principles</li>
            <li>Data processing agreements with third parties</li>
            <li>Privacy impact assessments for new features</li>
            <li>Incident response and breach notification procedures</li>
            <li>Regular compliance monitoring and auditing</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>6. International Data Transfers</h2>
          <p style={{ marginBottom: '20px' }}>
            When we transfer your data outside the European Economic Area (EEA), we ensure adequate protection through:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>European Commission adequacy decisions</li>
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Binding Corporate Rules where applicable</li>
            <li>Certification schemes and codes of conduct</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>7. Data Retention</h2>
          <p style={{ marginBottom: '20px' }}>
            We retain personal data only as long as necessary for the purposes outlined in our Privacy Policy:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li><strong>Account data:</strong> Until account deletion or 2 years of inactivity</li>
            <li><strong>DM filtering data:</strong> 30 days for processing, then anonymized</li>
            <li><strong>Usage analytics:</strong> Up to 2 years in aggregated form</li>
            <li><strong>Support communications:</strong> Up to 3 years for quality assurance</li>
            <li><strong>Legal compliance data:</strong> As required by applicable laws</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>8. Data Breach Notification</h2>
          <p style={{ marginBottom: '20px' }}>
            In the event of a data breach that poses a risk to your rights and freedoms, we will:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Notify the relevant supervisory authority within 72 hours</li>
            <li>Inform affected individuals without undue delay</li>
            <li>Provide clear information about the breach and our response</li>
            <li>Offer guidance on protective measures you can take</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>9. Supervisory Authority</h2>
          <p style={{ marginBottom: '20px' }}>
            You have the right to lodge a complaint with a supervisory authority if you believe we have violated GDPR. You can contact:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Your local data protection authority</li>
            <li>The authority in the EU country where you reside or work</li>
            <li>The authority where the alleged violation occurred</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>10. Contact Our Data Protection Officer</h2>
          <p style={{ marginBottom: '20px' }}>
            For any questions about GDPR compliance or data protection, contact our Data Protection Officer:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Email: dpo@dmfilterpro.com</li>
            <li>Subject line: "GDPR Inquiry - [Your Request Type]"</li>
            <li>Response time: Within 5 business days</li>
          </ul>

          <h2 style={{ marginBottom: '20px', color: '#667eea' }}>11. Updates to GDPR Compliance</h2>
          <p style={{ marginBottom: '20px' }}>
            We regularly review and update our GDPR compliance measures. Any material changes will be communicated through:
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Email notifications to registered users</li>
            <li>In-app notifications and announcements</li>
            <li>Updates to this GDPR policy page</li>
            <li>Blog posts about significant privacy changes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GDPRPolicy

