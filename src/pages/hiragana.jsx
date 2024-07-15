import SideBar from '../components/SideBar/SideBar.jsx';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Hiragana() {
    const [cards, setCards] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('all');
    const [addedCards, setAddedCards] = useState([]);
    
    useEffect(() => {
        fetchCards(selectedGroup);
        fetchSavedCards();
    }, [selectedGroup]);


    const fetchCards = async (group) => {
        try {
            if (group === 'all') {
                const res = await axios.get('https://flashcards-server-bnie.onrender.com/hiragana')
                console.log(res.data.rows)
                setCards(res.data.rows);
            } else {
                const res = await axios.get('https://flashcards-server-bnie.onrender.com/hiragana/group', {
                    params: { group }
                });
                console.log(res.data.rows)
                setCards(res.data.rows);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchSavedCards = async () => {
        try {
            const res = await axios.get('http://localhost:8080/myCards');
            setAddedCards(res.data.map(card => card.symbol)); 
        } catch (error) {
            console.error('Error fetching saved flashcards:', error);
        }
    };

    const handleGroupChange = (group) => {
        setSelectedGroup(group);
    };

    const handleAddCard = async (symbol, meaning) => {
        try {
            const isAlreadySaved = addedCards.includes(symbol);
            if (!isAlreadySaved) {
                await axios.post('http://localhost:8080/myCards/new', {
                    symbol,
                    meaning
                });

                setAddedCards([...addedCards, symbol]);
            }
        } catch (error) {
            console.error('Error adding card:', error);
        }
    };

    return (
        <div>
            <div className='main'>
                <SideBar selectedGroup={selectedGroup} onGroupChange={handleGroupChange} />
                <div className='content'>
                    <h1 style={{ textAlign: 'center' }}>Hiragana</h1>    
                    <div className='cards'>
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                symbol={card[1]}
                                meaning={card[2]}
                                isAdded={addedCards.includes(card.kata)}
                                onToggleAdd={() => handleAddCard(card.kata, card.romaji)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
