import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { useDispatch } from "react-redux";
import { Loader } from "lucide-react";
import { setUserData } from "../../state/reducers/Auth.slice";


const Login = () => {
  const { loading, login } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
        username, password
    }

    await login(formData, setUserData, dispatch);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="mx-auto max-w-lg w-full">
        <form onSubmit={handleLogin} className="w-full">
          <div className="w-full flex flex-col">
            <h1 className="text-2xl">Login</h1>
            <div className="flex flex-col justify-center items-start w-full">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-md px-4 py-2 w-full border-[1px] border-slate-600"
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full mb-5">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md px-4 py-2 w-full border-[1px] border-slate-600"
              />
            </div>
            <span>
              Don't have an account? <a href="/signup">Register</a>
            </span>
            <button
              type="submit"
              disabled={loading}
              className="bg-slate-950 flex justify-center items-center text-white py-3 rounded-md"
            >
              {loading ? <Loader fontSize={25}/> : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
