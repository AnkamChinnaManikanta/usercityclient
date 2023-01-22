import React from 'react'

const Menu = () => {
    const posts=[
        {
          id:1,
          title:"What is React js and uses of it ?",
          desc:"The render method returns a description of what you want to see on the screen. React takes the description and displays the res",
          img:"https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=1380&t=st=1664387085~exp=1664387685~hmac=c3ba02198cefa700c56cf3d3c29020b4ba184f8af71c78b7b87b820d9bb4b37c",
        },
        {
          id:2,
          title:"What is React js and uses of it ?",
          desc:"The render method returns a description of what you want to see on the screen. React takes the description and displays the res",
          img:"https://img.freepik.com/free-photo/fresh-mashed-ginger-paste-puree-bowl-whole-adrak-moody-background-selective-focus_466689-75881.jpg?w=1480&t=st=1664387240~exp=1664387840~hmac=439cd6dba2dc8014e0db57be7b147b25ddd15df0d0efd6964db3938cdf1365d7",
        },
        {
          id:3,
          title:"What is React js and uses of it ?",
          desc:"The render method returns a description of what you want to see on the screen. React takes the description and displays the res",
          img:"https://img.freepik.com/free-photo/fresh-mashed-ginger-paste-puree-bowl-whole-adrak-moody-background-selective-focus_466689-75881.jpg?w=1480&t=st=1664387240~exp=1664387840~hmac=439cd6dba2dc8014e0db57be7b147b25ddd15df0d0efd6964db3938cdf1365d7",
        },
        {
          id:4,
          title:"What is React js and uses of it ?",
          desc:"The render method returns a description of what you want to see on the screen. React takes the description and displays the res",
          img:"https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=1380&t=st=1664387085~exp=1664387685~hmac=c3ba02198cefa700c56cf3d3c29020b4ba184f8af71c78b7b87b820d9bb4b37c",
        },
        {
          id:5,
          title:"What is React js and uses of it ?",
          desc:"The render method returns a description of what you want to see on the screen. React takes the description and displays the res",
          img:"https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
        },
      ];
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {
            posts.map(posts=>(
                <div className='post' key={posts.id}>
                    <img src={posts.img}/>
                    <h2>{posts.title}</h2>
                    <button>Read More</button>
                </div>

            ))
        }
    </div>
  )
}

export default Menu