import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Star, StarHalf, Star as StarEmpty, Truck, ShieldCheck, PackageIcon } from "lucide-react";
import { images } from '../assets/assets';
import StarRating from '../components/Star';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  }, [productId, products]);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!productData) return <div className="opacity-0">Loading...</div>;

  return (
    <div className="flex justify-center pt-10 px-4 sm:px-8 lg:px-20">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Left: Product Image */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={images[image]}
            alt="product"
            className="w-full max-w-md object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-center gap-4 md:gap-2 lg:w-1/2 ">
          <h2 className="text-xl md:text-3xl font-semibold capitalize text-pink-600">{productData.name}</h2>
            <div className="flex flex-row gap-1 bg-pink-200 w-fit px-2 rounded-lg ">
              <StarRating rating={productData.rating}   />
              <p>({productData.reviews})</p>
            </div>

          <h6 className="text-xl  font-medium">
             <span className="text-pink-600">{productData.price} {currency}</span>
          </h6>
          <p className="text-lg md:text-xl text-gray-600   mt-4 capitalize">{productData.description}</p>
          <h6 className="text-lg mt-2 ">
            Size: <span className="text-gray-700">{productData.sizes}</span>
          </h6>

          {/* Quantity Selector */}
          <div className=" flex items-center gap-4">
            <button
              className="w-10 h-10 border rounded text-xl hover:bg-gray-100"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="w-10 h-10 border rounded text-xl hover:bg-gray-100"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-6 w-1/4 bg-pink-600 hover:bg-pink-700 cursor-pointer text-white px-6 py-3 rounded transition"
            onClick={() => alert('Added to cart!')}
          >
            Add to Cart
          </button>
      <hr className=' mt-4 sm:w-4/5 text-gray-200'/>
      <div className=' text-gray-600 flex flex-row mt-4 pt-4 gap-2 text-sm sm:text-base '>
        <p><ShieldCheck/> 100% Quality Assurance</p>
        <p><Truck/> Cash on Delivery Available</p>
        <p> <PackageIcon/>Easy return and Exchange policy with 7 days</p>
      </div>
        </div>  
      </div>
    </div>
  );
};

export default Product;
