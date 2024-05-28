import { MessageSquareText } from 'lucide-react'
import React from 'react'

const NoChatSelected = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-y-3 h-full w-full'>
      <h2>Welcome Jasper</h2>
      <p>Select a chat to start messaging</p>
      <MessageSquareText />
    </div>
  )
}

export default NoChatSelected
