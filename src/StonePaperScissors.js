import React, { useState } from 'react';
import './StonePaperScissors.css';

const StonePaperScissors = () => {
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['stone', 'paper', 'scissors'];

  const handlePlayerChoice = (choice) => {
    if (player1Choice === null) {
      setPlayer1Choice(choice);
    } else if (player2Choice === null) {
      setPlayer2Choice(choice);
      calculateResult();
    }
  };

  const calculateResult = () => {
    if (player1Choice === player2Choice) {
        setResult("It's a tie!");
      } 
      
      else if (
        (player1Choice === 'stone' && player2Choice === 'scissors') ||
        (player1Choice === 'paper' && player2Choice === 'stone') ||
        (player1Choice === 'scissors' && player2Choice === 'paper')
      ) {
        setResult('Player 1 Wins!');
      }
       
      else {
        setResult('Player 2 Wins!');
      }
  };

  const resetGame = () => {
    setPlayer1Choice(null);
    setPlayer2Choice(null);
    setResult(null);
  };

  return (
    <div className="stone-paper-scissors">
      <div className="choices">
        <div className="player">
          <p>Player 1</p>
          <div className={`choice ${player1Choice}`}>
            {player1Choice && <span>{player1Choice}</span>}
          </div>
        </div>
        <div className="player">
          <p>Player 2</p>
          <div className={`choice ${player2Choice}`}>
            {player2Choice && <span>{player2Choice}</span>}
          </div>
        </div>
      </div>
      <div className="buttons">
        {choices.map((choice) => (
          <button
            key={choice}
            className={`choice-button ${choice}`}
            onClick={() => handlePlayerChoice(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      {result && (
        <div className="result">
          <p>{result}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default StonePaperScissors;
