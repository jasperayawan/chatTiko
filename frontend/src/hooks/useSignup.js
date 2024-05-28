import { useState } from "react"
import toast from "react-hot-toast";
import axios from 'axios'

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async (formData, dispatch, setUserData) => {
        const success = handleInputErrors(formData)
        if(!success) return;

        setLoading(true);
        try{
            const res = await axios.post("/api/auth/signup", formData)
            dispatch(setUserData(JSON.stringify(res.data)))
        }
        catch(error){
            console.log(error)
        }
    }

    return { loading, signup }
}

export default useSignup;


function handleInputErrors(formData) {
    const { fullName, username, password, cPassword, gender } = formData;

    if(!fullName || !username || !password || !cPassword || !gender){
        toast.error('Please fill in all fields!')
        return false
    }

    if(password !== cPassword){
        toast.error('Passwords do not match');
        return false
    }

    if(password.length < 6){
        toast.error('Password must be at least 6 characters')
        return false
    }

    return true
}

