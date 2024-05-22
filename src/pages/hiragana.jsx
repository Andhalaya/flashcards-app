import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Hiragana() {

    const [cards, setCards] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('All');

    useEffect(() => {
        fetchCards(selectedGroup);
    }, [selectedGroup]);

    const fetchCards = async (group) => {
        try {
            if(group === 'All') {
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

    return (
        <div>
            <div className='main'>
                <SideBar selectedGroup={selectedGroup} onGroupChange={handleGroupChange} />
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
