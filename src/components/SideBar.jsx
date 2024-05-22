
export default function SideBar({ selectedGroup, onGroupChange }) {
    const handleChange = (event) => {
        onGroupChange(event.target.value);
    };

    return (
        <div className='sideBar'>
            <h3>Hiragana</h3>
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
        </div>
    );
}


