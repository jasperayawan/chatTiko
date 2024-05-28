import React, { useState } from 'react'
import axios from 'axios'

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (formData, setUserData, dispatch) => {

    setLoading(true)
    try{
        const res = await axios.post('/api/auth/login', formData)
        dispatch(setUserData(JSON.stringify(res.data)))
        localStorage.setItem("chat-user", JSON.stringify(res.data))
    }
    catch(error){
        console.log(error)
    } finally {
        setLoading(false)
    }
  }

  return {
    loading,
    login
  }
}

export default useLogin
