import { useState, useEffect } from "react";
import Header from "./component/Header";
import Heart from "./component/Heart";
import Keyboard from "./component/keyboard";
import clsx from "clsx";
import RenderGameStatus from "./component/RenderGameStatus.jsx";

function App() {
  // State
  const [currentWord, setCurrentWord] = useState("react");
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
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)


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
      <RenderGameStatus isGameOver={isGameOver} isGameWon={isGameWon} isGameLost={isGameLost} isLastGuessIncorrect={isLastGuessIncorrect} />
      <section className="life-status-section">{livesStatusElement}</section>
      <section className="current-word">{currentWordElement}</section>
      <section className="keyboard-section">
        <Keyboard
          onLetterClick={addLetterHandler}
          guessedLetters={guessedLetters}
          currentWord={currentWord}
          isGameOver={isGameOver}
        />
      </section>
      <section className="new-game-btn-section">
        {isGameOver ? <button>New Game</button> : null}
      </section>
    </main>
  );
}

export default App;
