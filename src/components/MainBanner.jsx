import React from 'react'
import banner1 from '../assets/banner1.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const MainBanner = () => {
  return (
    <div className='flex flex-col md:flex-row border-t border-gray-300 pt-8 md:pt-0'>
      <div className='w-full md:w-[50%] '>
        <div className='flex flex-col ml-10 items-center md:items-start sm:ml-12 md:ml-15 sm:pt-15 md:pt-25 lg:pt-40 sm:gap-2 md:gap-4 lg:gap-6 mb-4'>
          <h1 className='text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium xl:font-bold text-gray-700'><span className='text-green-600'>Freshness</span> You Can Trust</h1>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium xl:font-bold text-gray-700'>Savings You Will Love</h1>
          <div className='flex gap-3 sm:gap-5 md:gap-8 items-center mt-4 xl:mt-10'>
            <Link to={'products'} className=' px-4 md:px-6 py-2 md:py-3 rounded bg-green-600 text-white text-sm lg:text-lg cursor-pointer hover:bg-green-500'>Shop Now</Link>
            <Link to={'/products'} className='border flex items-center gap-1 border-green-600 px-4 py-2 group rounded text-sm cursor-pointer hover:bg-gray-100 lg:text-lg md:px-5 md:py-3'>Explore <FaArrowRightLong className='transition group-hover:translate-x-1' /></Link>
          </div>
        </div>
      </div>
      <div className='w-full md:w-[50%]'>
        <img src={banner1} alt='banner' />
      </div>
    </div>
  )
}

export default MainBanner
