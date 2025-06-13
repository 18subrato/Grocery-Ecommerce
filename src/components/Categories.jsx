import React from 'react'
import { categories } from '../assets/assets'
import { useShopContext } from '../context/ShopContext'
const Categories = () => {
    const { navigate }  = useShopContext();
    return (
        <div className='mt-16 px-10'>
            <div className='flex items-center gap-2 justify-center'>
                <div className='flex flex-col '>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl text-gray-700 '>Categories</h1>
                </div>
            </div>
            <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-10'>

                {categories.map((item, index) => (
                    <div onClick={()=>navigate(`/products/${item.path}`)} style={{backgroundColor:item.bgColor}} key={index} className='group cursor-pointer border border-gray-400 mt-2 p-2 min-w-30 min-h-30 md:min-w-40 md:min-h-40 rounded-2xl mx-auto'>
                        <div className='flex flex-col items-center'>
                            <img className='group-hover:scale-108 transition max-w-28' src={item.image} />
                            <h3>{item.text}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories
