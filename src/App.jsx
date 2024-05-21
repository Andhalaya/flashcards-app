import { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Card from './components/Card';

const hiragana = [
  { symbol: 'あ', meaning: 'a' },
  
];

const katakana = [
  { symbol: 'ア', meaning: 'a' },
 
];

const kanji = [
  { symbol: '日', meaning: 'sol/día' },
  
];

function App() {
  const [filters, setFilters] = useState({
    hiragana: true,
    katakana: false,
    kanji: false,
  });

  const getFilteredCards = () => {
    const { hiragana: h, katakana: k, kanji: j } = filters;
    const selectedCards = [
      ...(h ? hiragana : []),
      ...(k ? katakana : []),
      ...(j ? kanji : []),
    ];
    return selectedCards;
  };

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const randomizeCards = () => {
    const allCards = getFilteredCards();
    setCards(allCards.sort(() => 0.5 - Math.random()));
  };

  const [cards, setCards] = useState(getFilteredCards);

  return (
    <div className='app'>
      <TopBar />
      <div className='main'>
        <SideBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onRandomize={randomizeCards}
        />
        <div className='content'>
          <div className='cards'>
            {cards.map((card, index) => (
              <Card key={index} symbol={card.symbol} meaning={card.meaning} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
