import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { images } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const { currency } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(0);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        console.log(item);
      }
    })
  };
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}


        {/* Main Image */}
        <div className="w-full sm:w-[80%] flex justify-left gap-12">
          <img
            src={images[image]}
            alt="product"
            className="w-1/2  rounded-lg"
          />
          <div>
            <h2 className='font-semibold capitalize text-2xl' >{productData.name}</h2>
            <p className='Capitalize text-xl' >{productData.description}</p>
            <h6>Price : {productData.price}{currency}<span className='px-7'>Size : {productData.sizes}</span></h6>
            <div className="flex flex-row gap-7 py-4">
              <button className="border w-18 text-xl" onClick={handleIncrement}>+</button>
              <h6>{quantity}</h6>
              <button className="border w-18 text-xl" onClick={handleDecrement}>-</button>
            </div>
            <button onClick="/">Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
