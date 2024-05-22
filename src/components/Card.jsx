import { useState } from 'react';

export default function Card({ symbol, meaning, isMemorized, onToggleMemorized, isAddedToPractice }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className='card-container'>
      {isAddedToPractice ? '' :
        <button className='add-btn' onClick={() => onToggleMemorized(symbol)}>
          {isMemorized
            ? <div className='remove'>x</div>
            : <div className='add'>+</div>}
        </button>
      }
      <div className='flip-card' onClick={handleFlip}>
        <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
          <div className={`front ${isAddedToPractice ? 'card-added-to-practice' : ''}`}>{symbol}</div>
          <div className='back'>{meaning}</div>
        </div>
      </div>
    </div>

  );
}


