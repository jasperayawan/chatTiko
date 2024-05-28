import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function App() {
  const auth = useSelector((state) => state.Auth.userData)

  return (
    <Routes>
      <Route path='/' element={auth ? <Home /> : <Navigate to='/login' />}/>
      <Route path='/signup' element={auth ? <Navigate to="/" /> : <Signup />}/>
      <Route path='/login' element={auth ? <Navigate to="/" /> : <Login />}/>
    </Routes>
  )
}

export default App
