import React, { useContext, useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/authContext'
const Single = () => {
  const [post, setpost] = useState({})

  const location = useLocation();
  const postId = location.pathname.split("/")[2]
  
  const {currentUser}= useContext(AuthContext)
  console.log(currentUser)
  

  useEffect(() => {
    const fetchdata= async()=>{
      try{
        const  res=await axios.get(`/posts/${postId}`)
        setpost(res.data)
      }
      catch(e){
        console.log(e)
        console.log("Pora pooka")
      }
    }
    fetchdata();
  }, [postId])
  console.log(post.username)
  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img}/>
        <div className="user">
          <img src='https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=1480&t=st=1664391000~exp=1664391600~hmac=5a1471fa94078b724c1fbfae40f1733c8e827b3cee9f3ba9f2cfddf3d2bff14c'/>
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username=== post.username && (<div className="edit">
            <Link to={`/write/?edit=2`}>
              <img src={Edit}/>
            </Link>
            <img src={Delete}/>
          </div>)}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  )
}

export default Single