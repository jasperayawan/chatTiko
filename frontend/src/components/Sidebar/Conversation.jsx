import { Pin } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedConversation } from '../../state/reducers/useConversation.slice'
import { useSocketContext } from '../../context/SocketContext'

const Conversation = ({ conversation }) => {
  const conversationUser = useSelector((state) => state.UseConversation.selectedConversation);
  const message = useSelector((state) => state.UseConversation.messages)
  const dispatch = useDispatch();

  const isSelected = conversationUser?._id === conversation?._id;
  const { onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  const filterData = message.filter((msg) => msg.receiverId.includes(conversation._id))
  const sortedMessages = filterData.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  const lastMessage = sortedMessages.length > 0 ? sortedMessages[0] : null;
  const messageLength = 25;
  
  const mssg = lastMessage ? 
    (lastMessage.message.length > messageLength ? 
      lastMessage.message.substring(0, messageLength) + "..." : 
      lastMessage.message) : 
    '';

  return (
    <div onClick={() => dispatch(setSelectedConversation(conversation))} className={`md:p-2 cursor-pointer rounded-2xl md:hover:bg-[#2e333d] ${isSelected && 'md:bg-[#2e333d]'}`}>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-x-4 justify-center items-center">
            <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
              <div className="w-10 rounded-full">
                <img src={conversation.profilePic} alt=""/>
              </div>
            </div>
            <div className="flex flex-col">
                <h3 className='text-sm md:text-base text-[#ffffff]'>{conversation.fullName}</h3>
                <p className='hidden md:block text-sm text-slate-500'>{mssg}</p>
            </div>
        </div> 
        <div className="hidden md:flex flex-col gap-y-2">
            <p className='text-slate-400'>4am</p>
            <Pin size={15} color='#ffffff'/>
        </div>
      </div>
    </div>
  )
}

export default Conversation
