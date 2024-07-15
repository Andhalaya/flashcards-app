import { useTheme } from '../../context/ThemeContext';
import './Sidebar.css'


export default function SideBar({ selectedGroup, onGroupChange }) {
    const {theme} = useTheme();
    const handleChange = (event) => {
        onGroupChange(event.target.value);
    };

    return (
        <>
        <div className={`filter ${theme}`}>
            <h4>Filter By</h4>
            <div className={`sideBar ${theme}`}>
            <label>
                <input type="radio" value="all" checked={selectedGroup === 'all'} onChange={handleChange} />
                All
            </label>
            <label>
                <input type="radio" value="k" checked={selectedGroup === 'k'} onChange={handleChange} />
                K-group
            </label>
            <label>
                <input type="radio" value="t" checked={selectedGroup === 't'} onChange={handleChange} />
                T-group
            </label>
            <label>
                <input type="radio" value="r" checked={selectedGroup === 'r'} onChange={handleChange} />
                R-group
            </label>
            <label>
                <input type="radio" value="s" checked={selectedGroup === 's'} onChange={handleChange} />
                S-group
            </label>
            <label>
                <input type="radio" value="g" checked={selectedGroup === 'g'} onChange={handleChange} />
                G-group
            </label>
            </div>
        </div>
        </>
    );
}