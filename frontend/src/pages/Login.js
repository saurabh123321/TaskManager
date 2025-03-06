import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const Login = () => {
    // const context = useContext(AuthContext); // Log the context
    // console.log('AuthContext:', context); 
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const abc = useContext(AuthContext);
    // console.log(abc);
    const login = abc.login;
    // const context = useContext(AuthContext);
    // console.log(context);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const success = await login( formData.username, formData.password );
        if (success) {
            navigate('/dashboard');
            alert('Login successful');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <div className="flex w-full max-w-5xl items-center justify-between bg-white p-10 shadow-lg rounded-lg">
            
            {/* Left Section */}
            <div className="w-1/2 text-center">
              <h1 className="text-4xl font-bold text-blue-600">Cloud-based Task Manager</h1>
              <p className="mt-4 text-gray-500">Manage all your tasks in one place!</p>
              <div className="mt-6 flex justify-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-600 shadow-md"></div>
              </div>
            </div>
    
            {/* Right Section - Login Form */}
            <div className="w-1/2 max-w-sm bg-white p-8 shadow-md rounded-lg">
              <h2 className="text-2xl font-bold text-center text-blue-700">Welcome back!</h2>
              <p className="text-sm text-gray-500 text-center mb-4">Keep all your credentials safe!</p>
    
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Username Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
    
                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your 5 digit password"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
    
                {/* Forgot Password & Submit Button */}
                <div className="flex justify-between items-center">
                  <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Login
                  </button>
                </div>
              </form>
    
              {/* Sign-up Redirect */}
              <p className="mt-4 text-center text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
};

export default Login;
