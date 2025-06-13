import React, { useState } from 'react'
import assets from '../assets/assets'
import { toast } from 'react-toastify';
import {useShopContext} from '../context/ShopContext'

const AddAddress = () => {

  const { navigate } = useShopContext();
  const [address, setAddress] = useState({
    userName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
  })

  function handleChange(e) {
    const { name, value } = e.target;

    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('address',JSON.stringify(address));
    toast.success('Address Added');
    navigate('/cart');
  }

  return (
    <div className='mt-16 px-3 sm:px-6 md:px-10 lg:px-14 xl:px-26'>
      <div className='flex items-center gap-2 justify-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-gray-700'>Add Shipping <span className='text-green-600'>Address</span></h1>
      </div>
      <div className='flex justify-between mt-2'>
        <div className='flex-1 max-w-md'>
          <form onSubmit={handleSubmit} className='space-y-1 mt-16 text-sm'>
            <div className='grid grid-cols-2 gap-4'>
              <input type='text' placeholder='Enter Name' onChange={handleChange} name='userName' value={address.userName} required className='w-full px-2 py-2.5 border border-gray-500 rounded outline-none text-gray-700 focus:border-green-600 transition'
              />
              <input type='text' placeholder='Enter email' onChange={handleChange} name='email' value={address.email}  className='w-full px-2 py-2.5 border border-gray-500 rounded outline-none text-gray-700 focus:border-green-600 transition'
              />
            </div>

             <input type='text' placeholder='Enter Street' onChange={handleChange} name='street' value={address.street} required className='w-full px-2 py-2.5 border border-gray-500 rounded outline-none text-gray-700 focus:border-green-600 transition'
              />

             <input type='text' placeholder='Enter City' onChange={handleChange} name='city' value={address.city} required className='w-full px-2 py-2.5 border border-gray-500 rounded outline-none text-gray-700 focus:border-green-600 transition'
              />

            <div className='grid grid-cols-2 gap-4'>
               <input type='text' placeholder='Enter State' onChange={handleChange} name='state' value={address.state} required className='w-full px-2 py-2.5 border border-gray-500 rounded outline-none text-gray-700 focus:border-green-600 transition'
              />
               <input type='text' placeholder='Enter PIN Code' onChange={handleChange} name='pincode' value={address.pincode} required className='w-full px-2 py-2.5 border border-gray-500 rounded outline-none text-gray-700 focus:border-green-600 transition'
              />
            </div>

             <input type='number' placeholder='Enter Phone Number' onChange={handleChange} name='phone' value={address.phone} required className='w-full px-2 py-2.5 border border-gray-500 rounded outline-none text-gray-700 focus:border-green-600 transition'
              />

            <button className='w-full mt-6 bg-green-600 text-white py-3
            hover:bg-green-500 cursor-pointer transition uppercase
            '>Save address</button>

          </form>
        </div>
        <img className='h-[400px]  w-[400px] mt-10 hidden lg:block' src={assets.add_address_iamge} alt='add_address' />
      </div>
    </div>
  )
}

export default AddAddress
