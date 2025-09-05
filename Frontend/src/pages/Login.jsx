import React from 'react'
import API from '../Api';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/login',form);
            localStorage.setItem("token", res.data.token);
            navigate('/dashboard');
        } catch(error){
            alert(error.response?.data?.message || "Login failed");
        }
    }
  return (
    <div className="auth-container">
        <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input name='email' placeholder='Email' onChange={handleChange} required/>
                <input name='password' placeholder='Password' type="password" onChange={handleChange} required/>
                <button type='submit'>Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign up here</a></p>
            <p><a href="/">← Back to Home</a></p>
        </div>
    </div>
  )
}

export default Login