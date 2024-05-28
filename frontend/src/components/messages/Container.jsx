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
    <div className='flex flex-col flex-[1] p-5'>
      <Topbar selectedConversation={selectedConversation}/>
      <Messages selectedConversation={selectedConversation}/>
      <MessageInput messages={message} selectedConversation={selectedConversation} />
    </div>
  )
}

export default Container
