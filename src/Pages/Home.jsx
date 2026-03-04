import React from 'react'
import Icon from '../Images/nativelogo.png'

const Home = () => {
  return (
    <div className='mt-50 text-amber-50 flex flex-col justify-center items-center'>
        <p className='flex items-center border-[0.5px] h-15 w-70 border-gray-500 rounded-2xl'>
          <img src={Icon} alt="Native Logo" className='size-10'/><span className='text-2xl'>The Bitcoin Yield Hub</span>
        </p>
    </div>
  )
}

export default Home