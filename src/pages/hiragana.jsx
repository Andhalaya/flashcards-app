import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Hiragana() {

    const [cards, setCards] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('all');
    const [memorizedCards, setMemorizedCards] = useState(() => {
        const saved = localStorage.getItem('memorizedCards');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        fetchCards(selectedGroup);
    }, [selectedGroup]);

    useEffect(() => {
        const needToPractice = cards.filter(card => memorizedCards.includes(card.kata));
        setNeedToPracticeCards(needToPractice);
    }, [cards, memorizedCards]);

    const fetchCards = async (group) => {
        try {
            if (group === 'all') {
                const res = await axios.get('http://localhost:8080/hiragana')
                setCards(res.data);
            } else {
                const res = await axios.get('http://localhost:8080/hiragana/group', {
                    params: { group }
                });
                setCards(res.data);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleGroupChange = (group) => {
        setSelectedGroup(group);
    };

    const toggleMemorized = (symbol) => {
        setMemorizedCards((prev) => {
            const newMemorizedCards = prev.includes(symbol) 
                ? prev.filter(item => item !== symbol)
                : [...prev, symbol];

            localStorage.setItem('memorizedCards', JSON.stringify(newMemorizedCards));
            return newMemorizedCards;
        });
    };

    const [needToPracticeCards, setNeedToPracticeCards] = useState(() => {
        const needToPractice = cards.filter(card => memorizedCards.includes(card.kata));
        return needToPractice;
    });

    return (
        <div>
            <div className='main'>
                <SideBar selectedGroup={selectedGroup} onGroupChange={handleGroupChange} />
                <div className='content'>
                    <h1 style={{ textAlign: 'center' }}>Hiragana</h1>
                    <h3>Need to practice:</h3>
                    <div className='cards'>
                        {needToPracticeCards.map((card, index) => (
                            <Card 
                                key={index} 
                                symbol={card.kata} 
                                meaning={card.romaji} 
                                isMemorized={true} 
                                onToggleMemorized={() => toggleMemorized(card.kata)}
                            />
                        ))}
                    </div>
                    <h3>Study Cards:</h3>
                    <div className='cards'>
                    {cards.map((card, index) => (
                            <Card 
                                key={index} 
                                symbol={card.kata} 
                                meaning={card.romaji} 
                                isMemorized={memorizedCards.includes(card.kata)}
                                onToggleMemorized={toggleMemorized}
                                isAddedToPractice={needToPracticeCards.some(item => item.kata === card.kata)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
