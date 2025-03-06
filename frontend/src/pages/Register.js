// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission (e.g., validation, API request)

    // Check if password and confirm password match
    if(formData.password !== formData.confirmPassword){
        alert("Password do not match"); 
        return; 
    }

    // Check if the email is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(formData.email)) {
        alert("Please enter a valid email address.");
        return; // Stop form submission
    }
    
    try {
        const response = await axios.post("http://localhost:8080/api/register", formData);
        setSuccessMessage(response.data);
        setErrorMessage('');
        alert('Registration successful, Please login with username and password');
        navigate('/login');
      } catch (error) {
        setErrorMessage('Registration failed. Please try again.');
        setSuccessMessage('');
      }

    console.log("Form submitted successfully!");

  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-5xl items-center justify-between bg-white p-10 shadow-lg rounded-lg">
        
        {/* Left Section */}
        <div className="w-1/2 text-center">
          <h1 className="text-4xl font-bold text-blue-600">Start Managing Your Tasks</h1>
          <p className="mt-4 text-gray-500">Create an account to track and manage all your tasks efficiently.</p>
          <div className="mt-6 flex justify-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-600 shadow-md"></div>
          </div>
        </div>

        {/* Right Section - Register Form */}
        <div className="w-1/2 max-w-sm bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center text-blue-700">Create an Account</h2>
          <p className="text-sm text-gray-500 text-center mb-4">Join now and start managing your tasks effectively!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account? */}
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
