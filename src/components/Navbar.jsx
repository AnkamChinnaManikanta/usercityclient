import React, { useContext } from 'react'
import Logo from '../img/logo.png'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Navbar = () => {

  const {currentUser,logout}=useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
          <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=projects'>
            <h6>Projects</h6>
          </Link>
          
          <Link className='link' to='/?cat=technology'>
            <h6>Technology</h6>
          </Link>
          <Link className='link' to='/?cat=Science'>
            <h6>Science</h6>
          </Link>
          <Link className='link' to='/?cat=writings'>
            <h6>Writings</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser?<span onClick={logout}>Logout</span>:<Link className='link' to="/login">Login</Link>}
          <span className='write'>
            <Link className='link' to='/write'>Post</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar