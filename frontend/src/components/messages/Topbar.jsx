import React from 'react'

const Topbar = ({ selectedConversation }) => {
  return (
    <div className='flex justify-center items-center w-full py-4'>
      <h2 className='text-slate-500 text-cl'>To: <span className=''>{selectedConversation?.fullName}</span></h2>
    </div>
  )
}

export default Topbar
