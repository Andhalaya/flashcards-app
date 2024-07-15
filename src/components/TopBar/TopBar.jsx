import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import DropdownMenu from '../DropdowMenu/DropdownMenu';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import './topBar.css';

export default function TopBar() {
  const { isLogged, logout, currentUser, userData } = useAuth();
  const { theme } = useTheme();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className='topBar'>
      <div className='user-info'>
        <MdOutlineKeyboardArrowDown className='arrow-icon' onClick={toggleDropdown} />
        <div className='logo'></div>
        {userData ? (
  <>
    <h3>{userData.username}</h3>
  </>
) : (
  <h3>User</h3>
)}

        {dropdownVisible && (
          <DropdownMenu logout={logout} />
        )}
      </div>
      <div className='TopBar-Enlaces'>
        <ul>
          <li className={`link-${theme}`}>
            <Link to='/'>HOME</Link>
          </li>
          {userData && (
            <li className={`link-${theme}`}>
              <Link to='/myCards'>MY CARDS</Link>
            </li>
          )}
          <li className={`link-${theme}`}>
            <Link to='/hiragana'>HIRAGANA</Link>
          </li>
          <li className={`link-${theme}`}>
            <Link to='/katakana'>KATAKANA</Link>
          </li>
          <li className={`link-${theme}`}>
            <Link to='/kanji'>KANJI</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
