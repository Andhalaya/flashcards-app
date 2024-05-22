
export default function SideBar({ selectedGroup, onGroupChange }) {
    const handleChange = (event) => {
        onGroupChange(event.target.value);
    };

    return (
        <div className='sideBar'>
            <h3>Filter By</h3>
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
            <p>Select a number of cards:</p>
            <div style={{display:'flex', gap:'20px'}}>
                
             <select name="" id="">
                <option value="">5</option>
                <option value="">10</option>
                <option value="">15</option>
                <option value="">20</option>
            </select>
            <button>Random</button>   
            </div>
            
        </div>
    );
}


