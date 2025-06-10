import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
