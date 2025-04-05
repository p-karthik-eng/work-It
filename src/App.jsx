import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import DownloadAPK from './Components/DownloadAPK'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Appimages from './Components/Appimages'
import Contact from './Components/Contact'


const App = () => {
  return (
    <>
      <Navbar />
    <Hero />
    <About />
    <DownloadAPK />
    <Features />
    <Appimages />
    <Contact/>
    <Footer />
    </>
  )
}

export default App
