import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import FAQp from './Pages/FAQp'

const App = () => {
  return (
  <BrowserRouter>
    <div className='bg-slate-950 m-0 overflow-hidden'>
      <Banner />
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="FAQp" element={<FAQp />} />
        </Routes>
        <Footer />
    </div>
  </BrowserRouter>
  )
}

export default App