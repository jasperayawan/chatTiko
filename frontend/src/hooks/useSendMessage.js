import React, { useState } from 'react'
import axios from 'axios'

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);

    const sendMessage = async (setMessages, selectedConversation, dispatch, messages, message) => {
        setLoading(true);

        try{
            const res = await axios.post(`/api/message/send/${selectedConversation._id}`, {
                message
            })
            dispatch(setMessages([...messages, res.data]))
        }
        catch(error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return {
        loading,
        sendMessage
    }
}

export default useSendMessage
