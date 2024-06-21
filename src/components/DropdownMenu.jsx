import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggleButton from './ThemeToggleButton/ThemeToggleButton';

export default function DropdownMenu() {
    const { isLogged, logout, currentUser, userData } = useAuth();
    return (
        <div className='dropdown-menu'>
            {isLogged
                ? <button onClick={logout}>LOG OUT</button>
                : <Link to='/login'>LOG IN</Link>
            }
            <ThemeToggleButton />
            <Link to='/profile'>Profile</Link>
            <Link to='/settings'>Settings</Link>
        </div>
    )
}
