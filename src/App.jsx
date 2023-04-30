import React from 'react'
import './App.css'
import { logo } from './assets'
import Navbar from './components/Navbar/Navbar'
import { Brand, Hero, Products } from './container'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      
      <Hero />
      <Brand />
      <Products />
      <Footer />

    </div>
  )
}

export default App