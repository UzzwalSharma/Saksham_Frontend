import React from 'react'
import Hero from './Hero'
import Header from './Header'
import Features from './Features'
import HowItWorks from './Workflow'
import Footer from './Footer'
import FAQ from './FAQS'
import Demo from './Demo'
function Landingpage() {
  return (
    <div>
      <Header/>
     <Hero/>
     <Features/>
     <HowItWorks/>
     <Demo/>
     <FAQ/>
    <Footer/>
    </div>
  )
}

export default Landingpage
