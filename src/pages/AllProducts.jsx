import React, { useEffect, useState } from 'react'
import { useShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard'
const AllProducts = () => {
  const { products, search } = useShopContext();
  const [searchProduct, setSearchProduct] = useState([]);
  
  useEffect(() => {
    setSearchProduct(products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())));
  }, [search])

  return (
    <div className='mt-10 px-4 lg:px-10 xl:px-20'>
      <div className='flex items-center gap-2 justify-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-gray-700'>All Products</h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
        {
          searchProduct && searchProduct.length > 0 ? searchProduct.map((product, index) => (
            <ProductCard product={product} key={index} />
          )) : (search.length > 0 ? <h1 className='text-xl md:text-3xl text-red-400'>No Data Match</h1> : (products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))))
        }
      </div>
    </div>
  )
}

export default AllProducts
