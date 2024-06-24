import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import './TopBar.css'


export default function TopBar({ }) {
  const { isLogged, logout, currentUser, userData } = useAuth()
  const {theme} = useTheme()

  return (
    <>
    <div className={`topBar ${theme}`}>
      <div className='desplegable'>
        <ThemeToggleButton />
          {isLogged
            ? <button onClick={logout}>LOG OUT</button>
            : <Link to='/login'>LOG IN</Link>
          }
         </div> 
         <div className='TopBar-Enlaces'>
        <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        {isLogged && (
          <li>
            <Link to='/myCards'>MY CARDS</Link>
          </li>
        )}
      
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
    </div>
    </>
  );
}
