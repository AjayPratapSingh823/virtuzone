import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; 

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await axios.post('http://localhost:3001/admin/sign-up', {
                username: username,
                password: password
            });
            console.log(response.data);
            
            // Show alert when registration is successful
            setShowAlert(true);
            
            // Reset form fields
            setUsername('');
            setPassword('');
        } catch (err) {
            console.log(err);
        }
    }
    console.log(showAlert);

    return (
        <div className="login-container"> 
            <div className="login-card">
                <div className="card-header">
                    <h2>SignUp</h2>
                </div>
                <form className='form-inline' onSubmit={handleSubmit}>
                    <div className="form-group-1">
                        <label>Username</label>
                        <input type="text" placeholder='Enter your Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group-1">
                        <label>Password</label>
                        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">SignUp</button>
                </form>
                {/* Conditional rendering of alert */}
                {showAlert && (
                    <div className="alert">User registered successfully</div>
                )}
            </div>
        </div>
    )
}

export default Login;
