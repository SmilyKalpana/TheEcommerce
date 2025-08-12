
import React, { useContext, useEffect, useState } from 'react'
import  { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext)
    const [ latestProducts, setLatestProducts ] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10))
    }, [products])

    return (
        <div className='my-10'>
            <div className="text-center py-10 text-3xl">
                <Title text1={"Latest"} text2={"Collection"} />
                <p className="w-3/4 m-auto text-xs sm:text-xs md:text-base text-gray-600">
                    Discover our latest collection of stylish accessories, crafted to add a touch of charm to every look. From scrunchies to statement jewelry, find your perfect match today.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4   gap-y-10'>
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
               ))}
            </div>
        </div>

    )
}


export default LatestCollection