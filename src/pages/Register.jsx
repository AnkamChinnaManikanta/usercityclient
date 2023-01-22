import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setinputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [error, seterror] = useState("")

  const navigate= useNavigate();

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
      await axios.post("auth/register",inputs)
      navigate("/login")
    }
    catch(err){
      seterror(err.response.data)
    }
  }
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
      <input required type="name" placeholder='username' name="username" onChange={handleChange}/>
      <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
      <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
      <button type='button' onClick={handleSubmit}>Register</button>
      <p>{error}</p>
      <span>Do you have account<Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register