import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggleButton from './ThemeToggleButton/ThemeToggleButton';
import * as Icons from "../utils/icons";

export default function DropdownMenu() {
    const { isLogged, logout, currentUser, userData } = useAuth();
    return (
        <div className='dropdown-menu'>
            {isLogged
                ? <div className='menu-item' onClick={logout}>
                    <Icons.MdLogout className='icon'/>
                    <p>Log Out</p>
                </div>
                : <div className='menu-item'>
                    <Icons.MdLogout className='icon'/>
                    <Link to='/login'>
                    Login
                    </Link>
                </div>

            }
            <div className='menu-item'>
            <Icons.FaRegUser className='icon' />
                <Link to='/profile'>Profile</Link>
            </div>
            <div className='menu-item'>
            <Icons.MdOutlineSettings className='icon'/>
                <Link to='/settings'>Settings</Link>
            </div>

            <div style={{ padding: '10px 0px', display: 'flex', justifyContent: 'left' }}>
                <ThemeToggleButton />
            </div>

        </div>
    )
}
