import React from 'react'
import Background from '../assets/BgHome.jpg'

function Hero() {
  return (
    <div className='w-full mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>The <span className='text-orange-600'>Best</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'><span className='text-orange-600'>Foods</span> Delivered</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src={Background} alt=''/>
      </div>
    </div>
  )
}

export default Hero