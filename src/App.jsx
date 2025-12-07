import { useState, useEffect } from "react";
import Header from "./component/Header";
import Heart from "./component/Heart";
import Keyboard from "./component/keyboard";

function App() {
  // State
  const [currentWord, setCurrentWord] = useState("react");
  const [gameStatus, setGameStatus] = useState("win");
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Game config
  const NUMBER_OF_HEARTS = 9;

  // Derived state
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const wrongGuessedCount = guessedLetters.filter((letter) => {
    return !currentWord.includes(letter);
  }).length;
  const isGameLost = wrongGuessedCount >= NUMBER_OF_HEARTS;
  const isGameOver = isGameWon || isGameLost;

  const currentWordElement = currentWord.split("").map((letter, index) => (
    <span key={index} className="letter-box">
      {guessedLetters.includes(letter) ? letter.toLocaleUpperCase() : ""}
    </span>
  ));

  const livesStatusElement = Array.from({ length: NUMBER_OF_HEARTS }).map(
    (_, index) => <Heart key={index} broken={index < wrongGuessedCount} />
  );

  const addLetterHandler = (letter) => {
    setGuessedLetters((prevLetters) => {
      return prevLetters.includes(letter)
        ? prevLetters
        : [...prevLetters, letter];
    });
  };

  return (
    <main>
      <Header numberOfHearts={NUMBER_OF_HEARTS} />
      <section className="game-status">
        <h3>You Win</h3>
        <p>Good job!</p>
      </section>
      <section className="life-status-section">{livesStatusElement}</section>
      <section className="current-word">{currentWordElement}</section>
      <section className="keyboard-section">
        <Keyboard
          onLetterClick={addLetterHandler}
          guessedLetters={guessedLetters}
          currentWord={currentWord}
        />
      </section>
      <section className="new-game-btn-section">
        {isGameOver ? <button>New Game</button> : null}
      </section>
    </main>
  );
}

export default App;
