import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '60px 40px',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '20px',
          background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          DM Filter Pro
        </h1>
        
        <div style={{
          background: 'linear-gradient(45deg, #10b981, #059669)',
          padding: '12px 24px',
          borderRadius: '25px',
          display: 'inline-block',
          marginBottom: '30px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          🚀 New Feature: DM Deal Audit
        </div>

        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          Stop Missing Million Dollar DMs
        </h2>

        <p style={{
          fontSize: '18px',
          marginBottom: '40px',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          Discover how many potential deals you've been missing in your Twitter DMs. 
          Our AI-powered audit reveals the hidden opportunities in your message requests.
        </p>

        <Link 
          href="/campaign"
          style={{
            background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '600',
            display: 'inline-block',
            transition: 'transform 0.2s',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          🔍 Run Your DM Audit
        </Link>
      </div>

      <div style={{
        marginTop: '60px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        maxWidth: '900px',
        width: '100%'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '30px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>🎯 Deal Discovery</h3>
          <p style={{ opacity: 0.8, lineHeight: '1.5' }}>
            AI-powered analysis reveals hidden opportunities in your message requests
          </p>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '30px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>📈 Viral Sharing</h3>
          <p style={{ opacity: 0.8, lineHeight: '1.5' }}>
            Generate shareable images that showcase your missed opportunities
          </p>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '30px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>🔒 Privacy First</h3>
          <p style={{ opacity: 0.8, lineHeight: '1.5' }}>
            Your data stays secure with enterprise-grade privacy protection
          </p>
        </div>
      </div>
    </div>
  );
}

