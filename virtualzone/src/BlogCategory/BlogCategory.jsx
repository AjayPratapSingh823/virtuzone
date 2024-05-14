import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
function BlogCategory() {
    useEffect(()=>{
     fetchBlog();
    },[]);
    const {category}=useParams();
    const [blogs,setblogs]=useState([]);
    const fetchBlog=async()=>{
        try{
            const response =await axios.get(`http://localhost:3001/blog/category/${category}`)
            console.log(response);
            setblogs(response.data);
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='list'>
    {blogs.length === 0 ? (
        <h1>No blogs</h1>
    ) : (
        <div className='blog-card1'>
            {blogs.map((data, index) => (
                <div key={index} className='blog-card-container'>
                    <img src={`http://localhost:3001/${data.coverImage}`} className="image" alt="blog" width="200em"/>
                    <h1>{data.title}</h1>
                    <p>{data.date.split('T')[0]} | {data.category}</p>
                    <a href={`http://localhost:3000/blog/${data._id}`} className="read-more-link">Read more</a>
                    {/* Add a horizontal line after every third blog card */}
                </div>
            ))}
        </div>
    )}
</div>
  )
}

export default BlogCategory