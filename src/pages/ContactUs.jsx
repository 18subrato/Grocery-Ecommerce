import React from 'react'
import contactUs from '../assets/contactUs.svg'
const ContactUs = () => {
    return (
        <div className='mt-16'>
            <div className='flex flex-col md:flex-row md:justify-between px-10 border border-gray-400 rounded p-4'>
                <div className='mt-16'>
                    <h1 className='text-3xl lg:text-5xl text-gray-600 text-center'><span className='text-green-600'>Contact</span> Us</h1>
                    <div className='p-10 flex flex-col gap-4'>
                        <div>
                            <p className='text-gray-600'><span className='font-bold mr-2'>Address:</span> Gorakhpur, Uttar Pradesh , 273001</p>
                        </div>
                        <div>
                            <p className='text-gray-600'><span className='font-bold mr-2'>Phone:</span> +91 6393925797</p>
                        </div>
                        <div>
                            <p className='text-gray-600'><span className='font-bold mr-2'>Email:</span> subratoverma7@gmail.com</p>
                        </div>
                        <div>
                            <p className='text-gray-600'><span className='font-bold mr-2'>Business hours:</span> Mon - Sat 9 Am - 5 Pm</p>
                        </div>
                    </div>
                </div>
                <div className='border rounded-full border-green-400'>
                    <img src={contactUs} className='h-[400px] lg:h-[400px]' alt='contact' />
                </div>
            </div>
        </div>
    )
}

export default ContactUs
