import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://your-backend-url.vercel.app/api/auth'
    : 'http://localhost:5000/api/auth'
});

export default API; 