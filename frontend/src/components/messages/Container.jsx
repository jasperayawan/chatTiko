import React from 'react'
import Topbar from './Topbar'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { useSelector } from 'react-redux'

const Container = () => {
  const selectedConversation = useSelector((state) => state.UseConversation.selectedConversation);
  let chatUser = localStorage.getItem("chat-user")
  chatUser = JSON.parse(chatUser)

  const message = useSelector((state) => state.UseConversation.messages);

  return (
    <div className='flex flex-col md:flex-[1] w-full p-5 h-full'>
      <Messages selectedConversation={selectedConversation}/>
      <MessageInput messages={message} selectedConversation={selectedConversation} />
    </div>
  )
}

export default Container
