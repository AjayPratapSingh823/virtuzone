import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import './CreateaBlog.css'; // Import CSS file for styling
import { Navigate } from 'react-router-dom';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

function CreateaBlog() {
  const [content, setContent] = useState('');
  const[message,setMessage]=useState('');
  const [title, setTitle] = useState('');
  const [coverImage, setcoverImage] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory]=useState('');
  const token=localStorage.getItem('jwttoken');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('date', date);
      formData.append('category', category);
      formData.append('content', content);
      formData.append('coverImage', coverImage[0]); // Assuming only one file is selected
      const response = await axios.post('http://localhost:3001/blog/blog-submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file uploads
          Authorization:token,
        }
      });
      console.log(response);
      setMessage('Blog Post successfully');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    {token ? (
      <div>
      <form className="blog-form" onSubmit={handleSubmit}> {/* Add CSS class for styling */}
        <input
          type="title"
          placeholder={'Title....'}
          value={title}
          onChange={ev => setTitle(ev.target.value)}
          className="blog-input" /> {/* Add CSS class for styling */}<br />
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          className="blog-input" /> {/* Add CSS class for styling */}<br />
        <select className="blog-select" onChange={(e)=>setCategory(e.target.value)}> {/* Add CSS class for styling */}
          <option>Accounting</option>
          <option>Business and Leadership Skills</option>
          <option>Business Plan Templates</option>
          <option>Business Setup</option>
          <option>Business Software and Tools</option>
          <option>Business Success and Challenges</option>
          <option>Entrepreneurship</option>
          <option>Featured Posts</option>
          <option>Finance</option>
          <option>Free Zones</option>
          <option>Human Resources</option>
          <option>Legal</option>
          <option>Living in Dubai</option>
          <option>Mainland</option>
          <option>UAE Company Setup</option>
        </select>

        <input
          type="file"
          onChange={ev => setcoverImage(ev.target.files)}
          className="blog-file" /> {/* Add CSS class for styling */}

        <ReactQuill
          value={content}
          onChange={newvalue => setContent(newvalue)}
          modules={modules}
          format={formats}
          height={700}
          className="blog-editor" /> {/* Add CSS class for styling */}
        <button type='submit' className="blog-button">Create Post</button> {/* Add CSS class for styling */}
      </form>
      {
        message && <p>{message}</p>
      }
    </div>
    ):(
           <Navigate to='/admin-login' />
    )}
    </>
  )
}

export default CreateaBlog;
