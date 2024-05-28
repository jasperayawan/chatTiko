import React from 'react'
import { Search } from 'lucide-react'
const SearchInput = () => {
  return (
    <div className='relative'>
        <Search className='absolute top-2.5 left-2 text-slate-600' size={20}/>
        <input type="text" placeholder='Search' className='rounded-xl pl-10 py-2 bg-[#2e333d] w-full'/>
    </div>
  )
}

export default SearchInput
