import React from 'react';

const MyProfile = ({ userData }) => {
  if (!userData) {
    return <h3>No user data available</h3>;
  }

  const { email, registrationDate, savedCards, uid, username, quizScores } = userData;

  return (
    <div>
      <h1>My Profile</h1>
      <h3>Username: {username}</h3>
      <h3>Email: {email}</h3>
      <h3>UID: {uid}</h3>
      <h3>Registration Date: {registrationDate}</h3>
      
      <div>
        <h4>Saved Cards:</h4>
        <div>
          <h5>Hiragana:</h5>
          <ul>
            {savedCards.hiragana.map((card, index) => (
              <li key={index}>
                ID: {card.id}, Symbol: {card.symbol}, Romaji: {card.romaji}, Letter: {card.letter}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Kanji:</h5>
          <ul>
            {savedCards.kanji.map((card, index) => (
              <li key={index}>
                ID: {card.id}, Symbol: {card.symbol}, Romaji: {card.romaji}, Letter: {card.letter}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Katakana:</h5>
          <ul>
            {savedCards.katakana.map((card, index) => (
              <li key={index}>
                ID: {card.id}, Symbol: {card.symbol}, Romaji: {card.romaji}, Letter: {card.letter}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h4>Quiz Scores:</h4>
        <ul>
          {quizScores.map((score, index) => (
            <li key={index}>Score: {score}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
