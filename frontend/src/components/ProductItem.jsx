import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { images } from '../assets/assets';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden  rounded-xl">
                <img
                    src={images[image[0]]}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-110 transition ease-in-out"

                    alt={name}
                />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">
                <span>{currency}</span><span className="ml-1">{price}</span>
            </p>
        </Link>
    );
};

export default ProductItem;
