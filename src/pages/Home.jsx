import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useState , useEffect} from 'react'
import axios from 'axios'
const Home = () => {
  
  const [posts, setposts] = useState([])

  const cat = useLocation().search;
  

  useEffect(() => {
    const fetchdata= async()=>{
      try{
        const  res=await axios.get(`/posts${cat}`)
        setposts(res.data)
      }
      catch(e){
        console.log(e)
        console.log("Pora pooka")
      }
    }
    fetchdata();
  }, [cat])
  

  // const posts=[
  //   {
  //     id:1,
  //     title:"What is React js and uses of it ?",
  //     desc:"The render method returns a description of what you want to see on the screen. React takes the description and displays the res",
  //     img:"https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=1380&t=st=1664387085~exp=1664387685~hmac=c3ba02198cefa700c56cf3d3c29020b4ba184f8af71c78b7b87b820d9bb4b37c",
  //   },
  //   {
  //     id:2,
  //     title:"What is React js and uses of it ?",
  //     desc:"The render method returns a description of what you want to see on the screen. React takes the description and displays the res",
  //     img:"https://img.freepik.com/free-photo/fresh-mashed-ginger-paste-puree-bowl-whole-adrak-moody-background-selective-focus_466689-75881.jpg?w=1480&t=st=1664387240~exp=1664387840~hmac=439cd6dba2dc8014e0db57be7b147b25ddd15df0d0efd6964db3938cdf1365d7",
  //   },
  //   {
  //     id:3,
  //     title:"What is React js and uses of it ?",
  //     desc:"The render method returns a description of what you want to see on the screen. React takes the description and displays the res",
  //     img:"https://img.freepik.com/free-photo/fresh-mashed-ginger-paste-puree-bowl-whole-adrak-moody-background-selective-focus_466689-75881.jpg?w=1480&t=st=1664387240~exp=1664387840~hmac=439cd6dba2dc8014e0db57be7b147b25ddd15df0d0efd6964db3938cdf1365d7",
  //   },
  //   {
  //     id:4,
  //     title:"What is React js and uses of it ?",
  //     desc:"The render method returns a description of what you want to see on the screen. React takes the description and displays the res",
  //     img:"https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=1380&t=st=1664387085~exp=1664387685~hmac=c3ba02198cefa700c56cf3d3c29020b4ba184f8af71c78b7b87b820d9bb4b37c",
  //   },
  //   {
  //     id:5,
  //     title:"What is React js and uses of it ?",
  //     desc:"The render method returns a description of what you want to see on the screen. React takes the description and displays the res",
  //     img:"https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
  //   },
  // ];

  return (
    <div className='home'>
      <div className='posts'>
        {
          posts.map(post=>(
            <div className='post' key={post.id}>
              <div className="img">
                <img src={post.img} alt=""/>
              </div>
              <div className="content">
                <Link className='link' to={`/post/${post.id}`} >
                <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
                
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Home