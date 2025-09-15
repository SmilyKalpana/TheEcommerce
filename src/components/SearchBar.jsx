import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { SearchIcon, XIcon } from 'lucide-react'
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true);
        }else{
            setVisible(false)
        }   
    },[location])
 

    return showSearch && visible ? (
        <div className='flex justify-center'>
            <div className='flex items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-inherit text-sm'
                />
                <SearchIcon className='w-5 inline cursor-pointer' />

            </div>
            <XIcon className="cursor-pointer mt-8" onClick={() => setShowSearch(false)} />
        </div>
    ):null
}

export default SearchBar
