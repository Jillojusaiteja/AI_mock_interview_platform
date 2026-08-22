// ============================================
// api.js - Axios Instance with Auth Interceptor
// ============================================
// Creates a reusable Axios instance that auto-attaches
// the JWT token to every request.
// Reference: axios.create(), interceptors - reference-javascript.md
// ============================================

import axios from 'axios';

const API = axios.create({
<<<<<<< HEAD
<<<<<<< HEAD
  baseURL: import.meta.env.VITE_API_URL + '/api/'
=======
  baseURL: process.env.VITE_API_URL+ '/api/'
>>>>>>> dda1476 (Updated api)
=======
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api"

>>>>>>> 9b8e9fb (Updated client and server files)
});

// Attach JWT token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
