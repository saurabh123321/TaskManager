import React, { createContext, useState } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    
    const login = async (username, password) => {
        try {
            const response = await api.post('/api/login', {username, password});
            const token = response.data;
            setAuth(token);
            localStorage.setItem('jwt', token); // Store token in local storage
            return true;
          } catch (error) {
            console.error('Login failed', error);
            return false;
          }
    };
    
    const logout = () => {
        setAuth(null);
        localStorage.removeItem('jwt');
    };
    
    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}; 

    export default AuthContext;
