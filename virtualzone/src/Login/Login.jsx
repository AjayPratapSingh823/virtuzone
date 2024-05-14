import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Login.css'; 
import { Navigate, redirect } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [LoggedIn,setLoggedIn] = useState(false);
    useEffect(()=>{
        <Navigate to='/admin-home' ></Navigate> 
    },[LoggedIn]);

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await axios.post('http://localhost:3001/admin/login', {
                username: username,
                password: password
            });
            console.log(response.data);
            localStorage.setItem('jwttoken',response.data);
            setLoggedIn(true);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="login-container"> 
            <div className="login-card">
                <div className="card-header">
                    <h2>Login</h2>
                </div>
                <form className='form-inline' onSubmit={handleSubmit}>
                    <div className="form-group-1">
                        <label>Username</label>
                        <input type="text" placeholder='Enter your Username' onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group-1">
                        <label>Password</label>
                        <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit"><a href="/admin-home">Login</a></button>
                </form>
            </div>
        </div>
    )
}

export default Login;
