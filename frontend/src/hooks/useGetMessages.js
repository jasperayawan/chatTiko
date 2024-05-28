import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);

    const getMessages = async (selectedConversation, dispatch, setMessages) => {
        setLoading(true)
        if(selectedConversation){
            try{
                const res = await axios.get(`/api/message/${selectedConversation._id}`)
                dispatch(setMessages(res.data))
            }
            catch(error){
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    }

  useEffect(() => {
    getMessages();
  },[])
  
  return {
    loading,
    getMessages
  }
}

export default useGetMessages
