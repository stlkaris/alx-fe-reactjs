import React from 'react'
import { useNavigate } from 'react-router-dom'
import auth from '../auth'

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = ()=> {
        auth.login(() => {
            navigate('/profile')
        })
    }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default Login
