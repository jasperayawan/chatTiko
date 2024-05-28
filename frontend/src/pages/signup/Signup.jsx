import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import useSignup from "../../hooks/useSignup";
import { useDispatch } from "react-redux";
import { setUserData } from "../../state/reducers/Auth.slice";
import { Loader } from "lucide-react";


const Signup = () => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [gender, setGender] = useState("");

  const { loading, signup } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            fullName,
            username,
            password,
            cPassword,
            gender
        }

        await signup(formData, dispatch, setUserData)
    }

    const handleCheckboxChange = (gender) => {
        setGender(gender)
    }
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="mx-auto max-w-lg w-full">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col">
            <h1 className="text-2xl">Sign Up</h1>
            <div className="flex flex-col justify-center items-start w-full">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                value={fullName}
                id="fullName"
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-md px-4 py-2 w-full border-[1px] border-slate-600"
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={username}
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-md px-4 py-2 w-full border-[1px] border-slate-600"
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md px-4 py-2 w-full border-[1px] border-slate-600"
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full">
              <label htmlFor="cPassword">Confirm Password</label>
              <input
                type="password"
                value={cPassword}
                id="cPassword"
                onChange={(e) => setCPassword(e.target.value)}
                className="rounded-md px-4 py-2 w-full border-[1px] border-slate-600"
              />
            </div>
            <GenderCheckBox handleCheckboxChange={handleCheckboxChange} gender={gender}/>
            <button type="submit" disabled={loading} className="bg-slate-950 flex justify-center items-center text-white py-3 rounded-md">
              
              {loading ? <Loader fontSize={25}/> : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
