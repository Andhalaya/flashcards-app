import { useState } from 'react';

export default function Card({ symbol, meaning }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className='flip-card' onClick={handleFlip}>
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        <div className='front'>{symbol}</div>
        <div className='back'>{meaning}</div>
      </div>
    </div>
  );
}
