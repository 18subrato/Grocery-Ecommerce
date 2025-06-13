import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard'
const ProductDetails = () => {
  const { products, addToCart } = useShopContext();
  const { category, id } = useParams();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  
  useEffect(() => {
    const filterProducts = products.filter((item) => item._id === id);
    setProductDetails(filterProducts);
  }, [id,products])

  useEffect(() => {
    const relatedItem = products.filter((item) => item.category.toLowerCase() == category);
    setRelatedProducts(relatedItem);
  }, [category,products])

  return (
    <div className='mt-10'>
      <p className='text-gray-500 ml-4 sm:ml-14 md:ml-20 mb-4'>Home / Products / {category} / <span className='text-green-500'>{id}</span></p>
      <div className='flex flex-col'>
        <div className='flex flex-col md:gap-10 md:flex-row  sm:px-10 md:px-20'>
          {productDetails.map((item) => (
            <React.Fragment key={item._id}>
              <div className=' min-w-[320px] sm:min-w-[420px] h-full mb-10 md:w-[600px] '>
                <div className='flex gap-5'>
                  <div className='h-[90px] w-[100px] border border-gray-300 shadow-2xl'>
                    <img src={item.image[0]} />
                  </div>
                  <div className='border border-gray-300 '>
                    <img src={item.image[0]} />
                  </div>
                </div>
              </div>
              <div className=' min-w-[320px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-[500px]'>
                <div className='ml-2 flex flex-col'>
                  <div>

                    <h1 className='text-gray-600 text-xl md:text-2xl xl:text-4xl'>{item.name}
                    </h1>
                    <div className='flex items-center gap-0.5 mt-2'>
                      <p className='text-gray-500 text-sm'>Rating : ({(4+Math.random()).toFixed(1)})</p>
                    </div>
                    <div className='mt-8 '>
                      <p className='line-through text-gray-500'>MRP: {item.offerPrice}</p>
                      <h1 className='text-2xl'>MRP: {item.price}</h1>
                      <p className='text-gray-600'>(inclusive of all taxes)</p>
                    </div>
                    <div className='mt-8'>
                      <h3 className='text-gray-800 mb-2'>About Product</h3>
                      {item.description.map((des, index) => (
                        <li key={index} className='text-gray-500'>{des}</li>
                      ))}
                    </div>
                    <div className='flex mt-10 items-center gap-4'>
                      <button onClick={() => addToCart(productDetails[0])} className='border border-gray-300 text-lg text-white px-4 py-2 rounded cursor-pointer w-[300px] hover:bg-green-500 bg-green-600 outline-none'>
                        Add To Cart
                      </button>
                     
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className='flex items-center gap-2 justify-center mt-10'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-gray-700 '>Related Products</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 xl:px-20'>
          {relatedProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
