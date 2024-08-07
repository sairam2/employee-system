import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Header() {
    const { loggedIn } = useContext(AuthContext);

    //TODO: Make this UI better
    return (
        <header>
            {loggedIn && (
                <div  className='flex-between float-end me-4'>
                    <div style={{ }}>
                        <a href="/logout">Logout</a>
                    </div>
                    <div style={{ }}>
                        <Link to="/admin">Admin</Link>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
