import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import './AdminBlogsPage.css'
function AdminBlogsPage() {
    const{id}=useParams();
    const [blog,setBlog]=useState(null);
    const [category,setCategory]=useState('');
    useEffect(()=>{
        fetchBlogContent();
    },[id])
    const fetchBlogContent=async()=>{
        console.log(id);
        const response=await axios.get(`http://localhost:3001/blog/${id}`)
        setBlog(response.data.blogContent);
        console.log(blog);
    }
    
  return (
    <div className='blog-page-infra'>
         <div>
   {blog===null ? (
        <div>No content</div>
       ):(
        <div className="admin-blog-page-content">
        <div className="admin-blog-page-content-element">
        <img src={`http://localhost:3001/${blog.coverImage}`} alt="Blog Cover" />
          <h1>{blog.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
        </div>
          
       )
   }
   </div>
   <div className='blog-page-category-list'>
   <h1>Category</h1>
   <ul>
          <li><a href="http://localhost:3000/blog/Accounting">Accounting</a></li>
          <li>Business and Leadership Skills</li>
          <li>Business Plan Templates</li>
          <li>Business Setup</li>
          <li>Business Software and Tools</li>
          <li>Business Success and Challenges</li>
          <li>Entrepreneurship</li>
          <li>Featured Posts</li>
          <li>Finance</li>
          <li>Free Zones</li>
          <li>Human Resources</li>
          <li>Legal</li>
          <li>Living in Dubai</li>
          <li>Mainland</li>
          <li><a href="http://localhost:3000/blog/category/UAE Company Setup">UAE Company Setup</a></li>
    </ul>
   </div>
    
</div>
   
  )
}

export default AdminBlogsPage