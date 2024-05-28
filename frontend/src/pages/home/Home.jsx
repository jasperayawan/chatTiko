import React from 'react'
import Sidebar from '../../components/Sidebar/Container'
import Container from '../../components/messages/Container'

const Home = () => {
  return (
    <div className='h-screen overflow-auto w-full flex flex-col md:flex-row bg-[#131313] rounded-2xl'>
        <Sidebar />
        <Container />
    </div>
  )
}

export default Home
