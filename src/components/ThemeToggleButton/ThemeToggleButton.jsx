import { useTheme } from '../../context/ThemeContext';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import './ThemeToggleButton.css'

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>

            <div className={`switchButton ${theme}`}>
                <div className={`circle ${theme}`} style={{ left: theme === 'dark' ? '35px' : '0px' }} onClick={toggleTheme}>
                    {theme === 'light' ? <FaSun className={`sun ${theme}`} /> : <FaMoon className={`moon ${theme}`} />}
                </div>
            </div>
        </>
    );
}

export default ThemeToggleButton;