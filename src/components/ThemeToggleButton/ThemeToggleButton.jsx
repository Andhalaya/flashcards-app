import { useTheme } from '../../context/ThemeContext';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Switch to Light Mode'}
            </button>
        </>
    );
}

export default ThemeToggleButton;
