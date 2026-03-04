import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

const App = () => {
  return (
  <BrowserRouter>
    <div className='bg-gray-900 m-0 overflow-hidden'>
      <Banner />
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

    </div>
  </BrowserRouter>
  )
}

export default App