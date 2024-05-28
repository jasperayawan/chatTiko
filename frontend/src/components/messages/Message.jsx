import React from 'react'
import {extractTime} from '../../utils/extractTime'

const Message = ({ message, selectedConversation }) => {
  const user = JSON.parse(localStorage.getItem("chat-user"))

  const fromMe = message?.senderId === user._id
  const formattedTime = extractTime(message.createdAt)
  const profilePic = fromMe ? user.profilePic : selectedConversation?.profilePic
  const myName = message.senderId === user._id
  const bubbleBgColor = fromMe ? 'bg-[#6b8afd]' : ''
  const ifMyName = myName ? user.fullName : selectedConversation.fullName

  return (
    <div className={`chat ${fromMe ? 'chat-end' : 'chat-start'}`}>
        <div className="chat-header text-slate-400 flex gap-x-2 justify-center items-center">
            {ifMyName}
            <time className="text-xs opacity-50 text-slate-400">{formattedTime}</time>
        </div>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src={profilePic} alt="" />
        </div>
      </div>
      <div className={`chat-bubble flex flex-wrap text-sm md:text-base ${bubbleBgColor}`}>{message.message}</div>
    </div>
  )
}

export default Message
