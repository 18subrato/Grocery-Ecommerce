import React from 'react'
import {useShopContext} from '../context/ShopContext'
import ProductCard from './ProductCard'
const BestSeller = () => {

    const { products } = useShopContext();
    
    return (
        <div className='mt-16 px-6'>
            <div className='flex items-center gap-2 justify-center'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl text-gray-700'>Best Seller</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
                {products.filter((product)=>product.inStock).slice(0,5).map((product,index)=>(
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </div>
    )
}

export default BestSeller
