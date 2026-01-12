import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Home from './pages/Home'
import Projects from './pages/Projects'

import Navbar from './components/navbar/Navbar'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <main className='bg-[#16213d] min-h-screen flex flex-col'>
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      <Contact />
      <Footer />
    </main>
  )
}
