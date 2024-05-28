import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'


const Container = () => {
  return (
    <div className='h-full flex flex-col gap-y-6 md:w-[350px] p-5'>
      <SearchInput />
      <Conversations />
    </div>
  )
}

export default Container
