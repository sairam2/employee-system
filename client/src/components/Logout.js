import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../config/axiosConfig';
import { AUTH_URL } from '../config/config';

const Logout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const logout = async () => {
            try {
                localStorage.removeItem('token');
                await axiosInstance.post(`${AUTH_URL}/logout`);
                navigate('/login');
            } catch (error) {
                console.error('Error logging out', error);
                alert('Logout failed');
            }
        };

        logout();
    }, [navigate]);

    return (
        <div>
            Logging out...
        </div>
    );
};

export default Logout;
