import React from 'react'
import { FaTruckArrowRight } from "react-icons/fa6";
import { RiLeafLine } from "react-icons/ri";
import { RiCoinsFill } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";
import bottom from '../assets/bottom.svg'
const BottomBanner = () => {
  return (
    <div className='mt-16 md:mt-20 xl:mt-24 flex flex-col md:flex-row items-center md:justify-between px-2 md:px-6 lg:px-10 xl:px-14 '>
      <div className='w-[300px] md:w-[42%]'>
        <img src={bottom} alt='bottom_banner' className='mt-6' />
      </div>
      <div className='flex flex-col w-full md:w-[50%] items-center'>
        <div className='mt-10 flex flex-col gap-10'>
          <div>
            <h1 className='text-lg sm:text-2xl md:text-3xl xl:text-5xl font-semibold text-gray-600 text-center'>Why We Are <span className='text-green-600'>Best?</span></h1>
          </div>
          <div className='flex gap-4 items-center'>
            <FaTruckArrowRight className='w-6 h-6 sm:w-8 sm:h-8  md:w-10 md:h-10' />
            <div>
              <h3 className='text-gray-600 md:font-bold text-md md:text-xl'>Fastest Delivery</h3>
              <p className='text-sm text-gray-500'>Groceries delivered in under 30 minutes</p>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <RiLeafLine className='w-6 h-6 sm:w-8 sm:h-8  md:w-10 md:h-10' />
            <div>
              <h3 className='text-gray-600 md:font-bold text-md md:text-xl'>Freshness Guaranteed</h3>
              <p className='text-sm text-gray-500'>Fresh produce straight from the source.</p>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <RiCoinsFill className='w-6 h-6 sm:w-8 sm:h-8  md:w-10 md:h-10' />
            <div>
              <h3 className='text-gray-600 md:font-bold text-md md:text-xl'>Affordable Prices</h3>
              <p className='text-sm text-gray-500'>Quality groceries at unbeatable prices.</p>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <FaHandHoldingHeart className='w-6 h-6 sm:w-8 sm:h-8  md:w-10 md:h-10' />
            <div>
              <h3 className='text-gray-600 md:font-bold text-md md:text-xl'>Trusted by Thousands</h3>
              <p className='text-sm text-gray-500'>Loved by 10,000+ happy customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner
