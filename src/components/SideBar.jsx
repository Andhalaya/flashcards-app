import React from 'react';

export default function SideBar({ filters, showAll, onFilterChange, onRandomize }) {
    return (
        <div className='sideBar'>
            <h3>Select a group</h3>
            <label>
                <input
                    type='checkbox'
                    checked={filters.hiragana}
                    onChange={() => onFilterChange('hiragana')}
                />
                Hiragana
            </label>
            <label>
                <input
                    type='checkbox'
                    checked={filters.katakana}
                    onChange={() => onFilterChange('katakana')}
                />
                Katakana
            </label>
            <label>
                <input
                    type='checkbox'
                    checked={filters.kanji}
                    onChange={() => onFilterChange('kanji')}
                />
                Kanji
            </label>
            <div style={{ display: 'flex', gap: '20px' }}>
                <button onClick={showAll}>Show all</button>
                <button onClick={onRandomize}>Randomize</button>
            </div>

        </div>
    );
}

