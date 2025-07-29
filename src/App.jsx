import { useState } from 'react'
import { useEffect } from 'react'
import Wrapper from './assets/Wrapper'; // Assuming Wrapper.js is in the same directory
import About from './assets/About';
import './App.css'
import Header from './assets/Header'
import Projects from './assets/Projects'
import Title from './assets/Title'
import Socials from './assets/Socials'

function App() {

  const mainStyle = { 
      backgroundColor: 'white', // Background of the element
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      display: 'inline-block', // Optional: Prevents expanding to full width

  };

  const bgStyle = {
    zIndex: -10,
  }

  return (
    <div class="min-h-screen">
      <div class="w-[100%] h-[300%] flex items-center absolute" style={bgStyle}>
        <div class="flex-1 bg-white h-full"></div>
        <div class="flex-1 bg-[rgb(245,245,247)] h-full"></div>
      </div>

    <div class="h-6"> </div>
    <div id="about" class="mx-auto w-[92%] z-20 h-[50%]" style={mainStyle}>
    <Header/>
    <Wrapper />
    </div>
    
    <div class="mx-auto w-[92%] z-20 h-[50%] mt-12" style={mainStyle}>
      <About/>
    </div>

    <Title text="Projects" />

    <div id="projects" class="mx-auto w-[92%]">
      <Projects />
    </div>
    
    <div id="socials" class="mx-auto z-0 h-12 mt-12">
      <Socials />
    </div>

    </div>
  )
}

export default App
