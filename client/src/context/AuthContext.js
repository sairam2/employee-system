import React, { createContext, useState } from 'react';

const AuthContext = createContext();

// const isLoggedIn = (localStorage.getItem('token')) !== undefined &&
//     localStorage.getItem('token') !== null;
const isLoggedIn = false;

const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(isLoggedIn);
    const login = () => {
        setLoggedIn(true);
    };

    const logout = () => {
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ loggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
