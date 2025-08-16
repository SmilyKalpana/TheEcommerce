import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { CircleArrowRight } from 'lucide-react'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

// Debounce hook to avoid excessive filtering on each keystroke
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  // Using debounced search value
  const debouncedSearch = useDebounce(search, 500);

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

  const applyFilter = () => {
    if (!products || products.length === 0) return;  // Check if products array is empty

    let productsCopy = [...products];  // Copy the products array to avoid mutating original

    // Filter based on search term
    if (showSearch && debouncedSearch) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
    }

    // Filter by categories
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    // Filter by subcategories
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy);
  }

  const uniqueCategories = [...new Set(products.map((item) => item.category))]
  const uniqueSubCategories = [...new Set(products.map((item) => item.subCategory))]

  const sortProduct = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case 'Low-High':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'High-Low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, debouncedSearch, showSearch])

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
          {uniqueCategories.map((category, index) => (
            <div key={index} className='flex flex-col gap-1 pt-4'>
              <label className='flex items-center hover:text-lg text-base cursor-pointer hover:rounded hover:border-gray-400 hover:bg-gray-100 gap-3'>
                <input
                  className='w-3'
                  type='checkbox'
                  value={category}
                  onChange={toggleCategory}
                  aria-label={`Filter by category: ${category}`}
                />
                {category}
              </label>
            </div>
          ))}
        </div>

        {/* SubCategory */}
        <div className={` text-base px-4 py-4 mt-4 ${showFilter ? " " : "hidden"} sm:block`}>
          <p className='uppercase'>SubCatergories</p>
          {uniqueSubCategories.map((subCategory, index) => (
            <div key={index} className='flex flex-col gap-1 pt-4'>
              <label className='flex hover:text-lg text-base cursor-pointer hover:border-rounded  hover:border-gray-400 hover:bg-gray-100 gap-3'>
                <input
                  className='w-3'
                  type='checkbox'
                  value={subCategory}
                  onChange={toggleSubCategory}
                  aria-label={`Filter by subcategory: ${subCategory}`}
                />
                {subCategory}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Product display section */}
      <div className='flex-1'>
        <div className='flex justify-between flex-col sm:flex-row'>
          <Title text1="All" text2="Collections" />
          
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='capitalize border-none '>
            <option value="relavent">Relavent</option>
            <option value="Low-High">Low to High</option>
            <option value="High-Low">High to Low</option>
          </select>
        </div>

        {/* MAPPING PRODUCTS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 hover:text-lg text-base cursor-pointer gap-3 gap-y-5">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collection;
