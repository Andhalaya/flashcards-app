import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

export default function MyCards() {
    const [savedCards, setSavedCards] = useState([])

    useEffect(()=> {
        fetchSavedCards();
    }, [])

    const fetchSavedCards = async () => {
        try{
            const res = await axios.get('http://localhost:8080/myCards')
            setSavedCards(res.data)
            console.log(res.data)
        }catch (error) {
            console.log('Error fetching data:', error)
        }
    }
  return (
    <div className='cards'>
                        {savedCards.map((card, index) => (
                            <Card
                                key={index}
                                symbol={card.symbol}
                                meaning={card.meaning}
                            />
                        ))}
                    </div>
  )
}
