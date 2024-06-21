import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function TopBar({ }) {
  const { isLogged } = useAuth()
  return (
    <div className='topBar'>
      <ul>
        <li>
          {isLogged
            ? <Link to='/logout'>LOG OUT</Link>
            : <Link to='/login'>LOG IN</Link>
          }
        </li>
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
    </div>
  );
}
