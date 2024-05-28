import React, { useState, useRef } from 'react';
import Conversation from './Conversation';
import useGetConversation from '../../hooks/useGetConversation';

const Conversations = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const { loading, conversations } = useGetConversation()

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(containerRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dy = e.clientY - startY;
    containerRef.current.scrollTop = scrollTop - dy;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };



  return (
    <div
      ref={containerRef}
      className='flex flex-[1] flex-row md:flex-col gap-2 overflow-y-auto scrollbar'
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Handle case when mouse leaves the container
    //   style={{ cursor: isDragging ? 'grabbing' : 'grab' }} // Change cursor to indicate dragging
    >
      {conversations.map((conversation, i) => (
        <Conversation 
        key={i}
        conversation={conversation}
        />
      ))}
    </div>
  );
};

export default Conversations;
