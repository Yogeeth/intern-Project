import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });

      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token); // Save token
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form className="bg-white p-8 rounded-3xl shadow-lg w-96" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome Back</h1>
        <input
          type="text"
          placeholder="Username"
          className="block w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full mb-6 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-md w-full hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Login
        </button>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
