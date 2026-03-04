import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

const App = () => {
  return (
  <BrowserRouter>
    <Banner />
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App