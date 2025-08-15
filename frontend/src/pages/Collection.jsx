import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { CircleArrowRight } from 'lucide-react'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyfilter = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }



    setFilterProducts(productsCopy)
  }


  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'Low-High':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'High-Low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyfilter();
        break;
    }
  }
  useEffect(() => {
    applyfilter();
  }, [category, subCategory])

useEffect(() => {
    sortProduct();
  }, [sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS

          <CircleArrowRight className={`h-5 sm:hidden ${showFilter ? "rotate-90" : ""}`} />
        </p>
        {/* Category filter */}
        <div className={`px-4 py-4 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='uppercase'>Categories</p>
          <div className='flex flex-col gap-1 pt-4'>

            <p className='flex hover:text-lg text-base cursor-pointer hover:border-rounded  hover:border-gray-400 hover:bg-gray-100 gap-3'>
              <input className='w-3' type='checkbox' value={'Hair Accessories'} onChange={toggleCategory} />
              Hair Accessories</p>
            <p className='flex hover:text-lg text-base cursor-pointer hover:border-rounded  hover:border-gray-400 hover:bg-gray-100 gap-3'>
              <input className='w-3' type='checkbox' value={'Fashion Accessories'} onChange={toggleCategory} />
              Fashion Accessories</p>
            <p className='flex hover:text-lg text-base cursor-pointer hover:border-rounded  hover:border-gray-400 hover:bg-gray-100 gap-3'>
              <input className='w-3' type='checkbox' value={'Style Accessories'} onChange={toggleCategory} />
              Style Accessories</p>
          </div>
        </div>
        {/* SubCategory */}
        <div className={` text-base px-4 py-4 mt-4 ${showFilter ? " " : "hidden"} sm:block`}>
          <p className='uppercase'>SubCatergories</p>
          <div className='flex flex-col gap-1 pt-4'>

            <p className='flex hover:text-lg text-base cursor-pointer hover:border-rounded  hover:border-gray-400 hover:bg-gray-100 gap-3'>
              <input className='w-3' type='checkbox' value={'Scrunchies'} onChange={toggleSubCategory} />
              Scrunchies</p>
            <p className='flex hover:text-lg text-base cursor-pointer hover:border-rounded  hover:border-gray-400 hover:bg-gray-100 gap-3'>
              <input className='w-3' type='checkbox' value={'Headbands'} onChange={toggleSubCategory} />
              Headbands</p>
            <p className='flex hover:text-lg text-base cursor-pointer hover:border-rounded  hover:border-gray-400 hover:bg-gray-100 gap-3'>
              <input className='w-3' type='checkbox' value={'Scarves'} onChange={toggleSubCategory} />
              Scarves</p>
            <p className='flex hover:text-lg text-base cursor-pointer hover:border-rounded  hover:border-gray-400 hover:bg-gray-100 gap-3'>
              <input className='w-3' type='checkbox' value={'Bows'} onChange={toggleSubCategory} />
              Bows</p>
            <p className='flex hover:text-lg text-base cursor-pointer hover:border-rounded  hover:border-gray-400 hover:bg-gray-100 gap-3'>
              <input className='w-3' type='checkbox' value={'Hair Clips'} onChange={toggleSubCategory} />
              Hair Clips
            </p>
            <p className='flex hover:text-lg text-base cursor-pointer hover:border-rounded  hover:border-gray-400 hover:bg-gray-100 gap-3'>
              <input className='w-3' type='checkbox' value={'Jewelry'} onChange={toggleSubCategory} />
              Jewelry</p>
            <p className='flex hover:text-lg text-base cursor-pointer hover:border-rounded  hover:border-gray-400 hover:bg-gray-100 gap-3'>
              <input className='w-3' type='checkbox' value={'Hats'} onChange={toggleSubCategory} />
              Hats</p>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between flex-col sm:flex-row'>
          <Title text1="All" text2="Collections" />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='capitalize' >
            <option value="relavent">Relavent</option>
            <option value="Low-High">Low to High</option>
            <option value="Hight-Low">High to Low</option>
          </select>
        </div>
        {/* MAPPING PRODUCTS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 hover:text-lg text-base cursor-pointer gap-3 gap-y-5">
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default Collection

