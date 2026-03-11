import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Certificates from './Components/Certificates'
import Connect from './Components/Connect'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='w-full h-screen bg-black bg-radial from-gray-900 to-black dotted-bg'>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Certificates />
      <Connect />
      <Footer />
    </div>
  )
}

export default App