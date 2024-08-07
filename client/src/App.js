import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin/Admin';
import Main from './components/Main';
import Logout from './components/Logout';
import { AUTH_URL } from './config/config';
import { AuthContext } from './context/AuthContext';
import axiosInstance from './config/axiosConfig';
import './style.css';

const App = () => {
    const { login, loggedIn } = useContext(AuthContext);
    const handleRegister = async (email, username, password) => {
        try {
            await axiosInstance.post(`${AUTH_URL}/register`, { email, username, password });
            alert('Registration successful!');
        } catch (error) {
            console.error('Error registering user', error);
            alert(`Registration failed ${error?.response?.data?.msg ?? ''}`);
        }
    };

    const handleLogin = async (email, password) => {
        try {
            const resp = await axiosInstance.post(`${AUTH_URL}/login`, { email, password });
            localStorage.setItem('token', resp?.data?.token);
            login();
        } catch (error) {
            console.error('Error logging in', error);
            alert(`Login failed ${error?.response?.data?.msg ?? ''}`);
        }
    };

    //TODO: Move this to Routes.js
    return (
        <Router>
            <Routes>
                <Route path="/login" element={loggedIn ? <Main /> : <Login onLogin={handleLogin} />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register onRegister={handleRegister} />} />
                <Route path="/admin" element={loggedIn ? <Admin /> : <Login onLogin={handleLogin} />} />
                <Route path="/main" element={loggedIn ? <Main /> : <Login onLogin={handleLogin} />} />
                <Route path="/" element={loggedIn ? <Main /> : <Login onLogin={handleLogin} />} />
            </Routes>
        </Router>
    );
};

export default App;
