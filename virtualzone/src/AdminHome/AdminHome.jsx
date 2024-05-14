import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminHome.css'; // Import the CSS file
import { Navigate } from 'react-router-dom';

function AdminHome() {
    const [formData, setFormData] = useState([]);
    const token = localStorage.getItem('jwttoken');

    useEffect(() => {
        fetchFormData();
    }, []);

    const fetchFormData = async () => {
        try {
            const result = await axios.get('http://localhost:3001/form/get-form-data', {
                headers: {
                    Authorization: token
                }
            });
            setFormData(result.data.formData);
        } catch (err) {
            console.log(err);
        }
    };

    function handleDownload() {
        window.location.href = 'http://localhost:3001/form/download-excel';
    }

    function handleLogout() {
        localStorage.removeItem('jwttoken');
        <Navigate to="/admin-login" />
    }

    return (
        <>
            {token ? (
                <div className="table-container">
                    <h1>User Information</h1>
                    <button onClick={handleDownload}>Download Excel</button>
                    <button><a href="/create-a-post">Create a Blog</a></button><br />
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Nationality</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phoneNumber}</td>
                                    <td>{data.nationality}</td>
                                    <td>{data.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleLogout}><a href="/admin-login">Logout</a></button>
                </div>
            ) : (
                <Navigate to="/admin-login" />
            )}
        </>
    );
}

export default AdminHome;
