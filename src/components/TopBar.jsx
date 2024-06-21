import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggleButton from './ThemeToggleButton/ThemeToggleButton';


export default function TopBar({ }) {
  const { isLogged, logout, currentUser, userData } = useAuth()
  return (
    <div className='topBar'>
      <ul>
        <li><ThemeToggleButton/></li>
        <li>
          {isLogged
            ? <button onClick={logout}>LOG OUT</button>
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
