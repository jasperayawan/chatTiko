import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);

            try{
                const res = await axios.get('/api/user')
                setConversations(res.data)
            }
            catch(error){
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getConversations();
    },[])

    return {
        loading, conversations
    }
}

export default useGetConversation
