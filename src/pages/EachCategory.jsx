import React, { useEffect, useState } from 'react'
import { useShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom';
const EachCategory = () => {
    const { products } = useShopContext();
    const [categoryVise,setCategoryVise] = useState([]);
    const { category } = useParams();
    
    useEffect(()=>{
        setCategoryVise(products.filter((item)=>item.category.toLowerCase() === category.toLowerCase()));
    },[category,products])



    return (
        <div className='mt-10 px-4 lg:px-10 xl:px-20'>
            <div className='flex items-center gap-2 justify-center'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl text-gray-700'>{category}</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
                {categoryVise && categoryVise.length > 0 &&  categoryVise.map((product,index)=>{
                    return <ProductCard key={index} product={product} />
                })}
            </div>
        </div>
    )
}

export default EachCategory
