import React, { useEffect } from 'react'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import useGetMessages from '../../hooks/useGetMessages'
import { setMessages } from '../../state/reducers/useConversation.slice'
import useListenMessages from '../../hooks/useListenMessages'
import Topbar from './Topbar'

const Messages = ({ selectedConversation }) => {
  const { loading, getMessages } = useGetMessages(); 
  const message = useSelector((state) => state.UseConversation.messages)
  useListenMessages()
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getMessage = async () => {
      await getMessages(selectedConversation, dispatch, setMessages)
    }
    getMessage()
  },[selectedConversation]) 

  return (
    <div className='h-full overflow-y-auto scrollbar pb-6'>
      {message.length > 0 ? (
        <>
          <Topbar selectedConversation={selectedConversation}/>
        {message.map((msg,idx) => (
          <Message key={idx} message={msg} selectedConversation={selectedConversation}/>
        ))}
        </>
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <span>Send a message to start the conversation</span>
        </div>
      )}
    </div>
  )
}

export default Messages
