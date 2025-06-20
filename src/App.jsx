import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <CTA />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App

