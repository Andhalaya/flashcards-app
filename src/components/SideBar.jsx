import React from 'react';

export default function SideBar({onGroupChange}) {
    return (
        <div className='sideBar'>
            <h3>Hiragana</h3>
            <label> 
                <input 
                type="radio"
                checked={selectedGroup === 'hiragana'}
                onChange={() => onGroupChange('hiragana')}
                />
                All symbols
            </label>
            <label> 
                <input type="radio" />
                K-group
            </label>
            <label> 
                <input type="radio" />
                T-group
            </label>
            <label> 
                <input type="radio" />
                R-group
            </label>
            <label> 
                <input type="radio" />
                S-group
            </label>
            <label> 
                <input type="radio" />
                T-group
            </label>

        </div>
    );
}

