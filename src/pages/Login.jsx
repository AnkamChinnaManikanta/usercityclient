import React, { useContext } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/authContext'

const Login = () => {
  const [inputs, setinputs] = useState({
    username:"",
    password:"",
  })

  const [error, seterror] = useState("")

  const navigate= useNavigate();
  const {login}=useContext(AuthContext);

  const handleChange=(e)=>{
    setinputs((prev)=>(
      {
        ...prev,[e.target.name]:e.target.value
      }
    ))

  }

  const handleSubmit= async (e)=>{
    e.preventDefault()
    try{
      await login(inputs)
      navigate("/")
    }
    catch(err){
      seterror(err.response.data)
    }
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
      <input required type="name" placeholder='username' name="username" onChange={handleChange}/>
      <input required type="password" placeholder='password' name="password" onChange={handleChange}/>
      <button type='button' onClick={handleSubmit}>Login</button>
      <p>{error}</p>
      <span>Don't have account<Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login