import React from 'react';
import { Link } from 'react-router-dom';

export default function TopBar({ }) {
  return (
    <div className='topBar'>
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
    </div>
  );
}
