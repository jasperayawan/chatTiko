import { Loader, Send } from "lucide-react";
import React, { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import { useDispatch } from "react-redux";
import { setMessages } from "../../state/reducers/useConversation.slice";


const MessageInput = ({ messages, selectedConversation }) => {
  const { loading, sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(
      setMessages,
      selectedConversation,
      dispatch,
      messages,
      message
    );
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex glex-row gap-x-2">
      <input
        type="text"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full bg-[#2e333d] px-5 py-2 rounded-xl text-white"
      />
      <button type="submit" disabled={loading} className="btn bg-[#6b8afd]">
        {loading ? <Loader color="#1e1e1e" /> : <Send color="#ffffff" />}
      </button>
    </form>
  );
};

export default MessageInput;
