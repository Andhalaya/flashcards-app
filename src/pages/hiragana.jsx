import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Hiragana() {

    const [cards, setCards] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('hiragana');

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/hiragana`);
            setCards(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div >
            <div className='main'>
                <SideBar
                    selectedGroup={selectedGroup}
                />
                <div className='content'>
                    <div className='cards'>
                        {cards.map((card, index) => (
                            <Card key={index} symbol={card.kata} meaning={card.romaji} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
