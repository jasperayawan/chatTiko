import { useState } from 'react';
import axios from 'axios'


const useLogout = () => {
    const [loading, setLoading] = useState(false);

    const logout = async (setLogout, dispatch, removeSelected) => {
        setLoading(true)

        try{
            await axios.post('/api/auth/logout')
            localStorage.removeItem("chat-user")
            dispatch(removeSelected())
            dispatch(setLogout())
        }
        catch(error){
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        logout
    }
}

export default useLogout;