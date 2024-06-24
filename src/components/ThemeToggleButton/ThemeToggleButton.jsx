import { useTheme } from '../../context/ThemeContext';
import './ThemeToggleButton.css'

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <button  className='btn-theme' onClick={toggleTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Switch to Light Mode'}
            </button>
        </>
    );
}

export default ThemeToggleButton;