import React from 'react'
import { useShopContext } from '../context/ShopContext'
import { IoCartOutline } from "react-icons/io5";
const ProductCard = ({product}) => {

  const { currency, navigate, addToCart, cartItems, getCartCount, updateQuantity } = useShopContext();

  return (
    <div onClick={()=>{navigate(`/products/${product.category.toLowerCase()}/${product._id}`),scrollTo(0,0)}} className='border border-gray-300 min-w-34 min-h-36 md:min-w-56 md:min-h-56 rounded-md px-4 mt-10'>
      <div className='flex items-center justify-center group cursor-pointer px-2'>
        <img className='group-hover:scale-105 transition max-w-30 sm:max-w-36' src={product.image[0]} alt={product.name}/>
      </div>
      <div className='text-gray-500 text-sm'>
        <p>{product.category}</p>
        <p className='text-gray-700 text-sm md:text-lg font-medium'>{product.name}</p>
      </div>
      <div className='flex items-center gap-0.5'>
        <p className='text-gray-500 text-sm'>Rating : (4.5)</p>
      </div>
      <div className=' flex justify-between p-2 flex-col sm:flex-row'>
        <div className='flex items-center gap-2'>
          <p>{currency}{product.price}</p>
          <p className='line-through text-gray-500 text-sm'>{currency}{product.offerPrice}</p>
        </div>
        <div onClick={(e)=>e.stopPropagation()}>
          {cartItems.find((item)=>item.id === product._id)  ? <div className='flex items-center gap-1 cursor-pointer bg-green-100 hover:bg-green-200 rounded border border-green-600 px-1 py-1 md:px-2'>
          <span onClick={()=>updateQuantity(product)}>-</span>{getCartCount(product._id)}<span onClick={()=>addToCart(product)}>+</span>
        </div>:<div onClick={()=>addToCart(product)} className='flex items-center gap-1 cursor-pointer bg-green-100 hover:bg-green-200 rounded border border-green-600 px-1 py-1 md:px-2'>
          <IoCartOutline className='w-5 h-5' />
          Add
        </div>}
        </div>
      </div>
      
    </div>
  )
}

export default ProductCard
