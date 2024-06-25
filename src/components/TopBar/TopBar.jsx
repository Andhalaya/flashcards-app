import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import DropdownMenu from '../DropdownMenu';
import './topBar.css';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function TopBar({ }) {
  const { isLogged, logout, currentUser, userData } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
 
  return (
    <div className='topBar'>
      <div className='user-info'>
        <MdOutlineKeyboardArrowDown className='arrow-icon' onClick={toggleDropdown} />
        <div className='logo'></div>
        <h3>User</h3>
        {dropdownVisible && (
          <DropdownMenu logout={logout}/>
        )}
      </div>
      <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/myCards'>MY CARDS</Link>
        </li>

        <li>
          <Link to='/hiragana'>HIRAGANA</Link>
        </li>
        <li>
          <Link to='/katakana'>KATAKANA</Link>
        </li>
        <li>
          <Link to='/kanji'>KANJI</Link>
        </li>
      </ul>
    </div
  );
}
