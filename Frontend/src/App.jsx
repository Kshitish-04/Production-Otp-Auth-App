import React, { useEffect } from 'react'
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import VerifyOtp from './pages/VerifyOtp';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  
  // Wake up Render backend when frontend loads
  useEffect(() => {
    const wakeUpBackend = async () => {
      try {
        await fetch('https://your-app-name.onrender.com/');
        console.log('✅ Backend wake-up successful');
      } catch (error) {
        console.log('🚀 Backend wake-up request sent');
      }
    };
    
    wakeUpBackend();
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/verify-otp' element={<VerifyOtp/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App
