import { useState } from 'react';

export default function Card({ symbol, meaning, onToggleAdd, isAdded }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleButtonClick = () => {
    onToggleAdd(symbol, meaning);
  };

  return (
    <div className='card-container'>
      {!isAdded && (
        <button 
          className='add-btn' 
          onClick={handleButtonClick} 
          style={{ backgroundColor: isAdded ? 'red' : 'green' }}
        >
          {isAdded ? '-' : '+'}
        </button>
      )}
      <div className='flip-card' onClick={handleFlip}>
        <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
          <div className={`front ${isAdded ? 'card-added-to-practice' : ''}`}>{symbol}</div>
          <div className='back'>{meaning}</div>
        </div>
      </div>
    </div>
  );
}
