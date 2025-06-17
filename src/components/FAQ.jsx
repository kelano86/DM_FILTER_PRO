import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How does DM Filter Pro work?",
      answer: "DM Filter Pro monitors your Twitter DMs and uses AI to analyze each message based on sender influence (Kaito Yap scores), credibility (Ethos scores), mutual followers, and keywords you define. When an important DM is detected, you get an instant Telegram notification with smart response templates."
    },
    {
      question: "Do I need API keys to use DM Filter Pro?",
      answer: "No! DM Filter Pro works immediately without any API keys. We use public APIs from Kaito and Ethos to get real influence and credibility scores. Just install the extension, connect your Telegram bot, and start filtering."
    },
    {
      question: "What are Smart Response Templates?",
      answer: "Smart Response Templates are AI-generated, personalized responses that include your contact information (Calendly, email, website). When you get a partnership inquiry, you can tap a button in Telegram and Twitter opens with a professional response ready to send - including your scheduling link and contact details."
    },
    {
      question: "Is my data safe and private?",
      answer: "Absolutely. DM Filter Pro processes everything locally in your browser. We don't collect, store, or transmit your personal data. The extension only sends filtered notifications to your Telegram bot - no DM content is stored on our servers."
    },
    {
      question: "How accurate is the filtering?",
      answer: "Our filtering achieves 98% accuracy by combining multiple data sources: real Kaito Yap scores (influence), Ethos credibility ratings, mutual follower counts, and your custom keywords. This multi-factor approach ensures you never miss important opportunities while filtering out noise."
    },
    {
      question: "Can I customize the filtering criteria?",
      answer: "Yes! You can adjust Yap score thresholds, Ethos score minimums, mutual follower requirements, and add custom keywords. You can also customize notification templates and response templates to match your brand and communication style."
    },
    {
      question: "How do I set up Telegram notifications?",
      answer: "Create a Telegram bot using @BotFather, get your bot token, and add it to the extension settings along with your chat ID. The setup takes about 2 minutes and we provide step-by-step instructions in the extension."
    },
    {
      question: "Does this work on mobile?",
      answer: "The Chrome extension works on desktop. However, Telegram notifications work perfectly on mobile, so you'll get instant alerts on your phone with response templates that open Twitter mobile app with pre-filled responses."
    },
    {
      question: "What's the difference between Free and Pro?",
      answer: "Free includes all core filtering features, real API scores, and smart response templates. Pro adds advanced analytics, custom filtering rules, team collaboration features, and priority support. Perfect for agencies and high-volume users."
    },
    {
      question: "Can I use this for my team or agency?",
      answer: "Yes! Pro and Enterprise plans support team collaboration. You can set up multiple Telegram recipients, create shared filtering rules, and manage DMs for multiple clients. Enterprise plans include white-label options and custom integrations."
    }
  ]

  return (
    <section id="faq" style={{
      background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)'
    }}>
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know about DM Filter Pro. Can't find what you're looking for? 
            <a href="mailto:hello@dmfilterpro.com" style={{ color: '#667eea', textDecoration: 'none' }}> Contact us</a>.
          </p>
        </div>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '12px',
              marginBottom: '16px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden'
            }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                style={{
                  width: '100%',
                  padding: '24px',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#2d3748'
                }}
              >
                {faq.question}
                <span style={{
                  fontSize: '1.5rem',
                  color: '#667eea',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div style={{
                  padding: '0 24px 24px 24px',
                  color: '#4a5568',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  borderTop: '1px solid #f7fafc'
                }}>
                  {faq.answer}
                </div>
              )}
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
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ marginBottom: '16px', color: '#2d3748' }}>
              Still have questions?
            </h3>
            <p style={{ 
              marginBottom: '24px',
              color: '#4a5568',
              fontSize: '1.1rem'
            }}>
              Our team is here to help. Get in touch and we'll answer any questions about 
              DM Filter Pro and how it can transform your Twitter DM management.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="mailto:hello@dmfilterpro.com" 
                className="btn btn-primary"
                style={{ textDecoration: 'none' }}
              >
                📧 Email Support
              </a>
              <a 
                href="#download" 
                className="btn btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                🚀 Try It Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

