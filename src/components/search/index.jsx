import React from 'react'

import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

const Search = () => {
    return (
        <div className='ml-auto w-full p-2 flex justify-between items-center'>
            <div className='bg-white p-2 flex just items-center w-full rounded-none'>
                <button className='bg-gray-800 p-2 text-white rounded-none w-[220px]'>
                 advance search
                 </button>
                 <input type="text" placeholder='search by sec_id/sec_name, issuer, sector, indices' className='p-2 w-full ml-3 text-right rounded-none'/>
            </div>


            <div className='btns flex justify-center items-center w-auto px-5 ml-5 h-full py-1 rounded-md bg-white'>
                <button className='btn bg-white border-0 p-0 text-black mx-3 text-xl'>
                    <FaAngleLeft/>
                </button>
                <button className='btn bg-white border-0 p-0 text-black mx-3 text-xl'>
                    <FaAngleRight/>
                </button>
            </div>
        </div>
    )
}

export default Search