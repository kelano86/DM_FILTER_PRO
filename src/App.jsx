import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Campaign from './components/Campaign'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import GDPRPolicy from './components/GDPRPolicy'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <Pricing />
              <FAQ />
              <Footer />
            </>
          } />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/gdpr" element={<GDPRPolicy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

