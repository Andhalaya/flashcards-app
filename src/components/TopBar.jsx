import React from 'react';
import { Link } from 'react-router-dom';

export default function TopBar({  }) {
  return (
    <div className='topBar'>
      <ul>
      <li>
            <Link to='/'>home</Link>
        </li>
        <li>
            <Link to='/hiragana'>hiragana</Link>
        </li>
        <li>
            <Link to='/katakana'>katakana</Link>
        </li>
        <li>
            <Link to='/kanji'>kanji</Link>
        </li>
      </ul>
    </div>
  );
}
