import { useState, useEffect } from "react";
import Header from "./component/Header";
import Heart from "./component/Heart";
import Keyboard from "./component/keyboard";
import RenderGameStatus from "./component/RenderGameStatus.jsx";
import { getRandomWord } from "./data/word.js";
import clsx from "clsx";

function App() {
  // State
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
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
  const numGuessesLeft = NUMBER_OF_HEARTS - wrongGuessedCount;
  const isGameLost = wrongGuessedCount >= NUMBER_OF_HEARTS;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const currentWordElement = currentWord.split("").map((letter, index) => {
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    );

    return (
      <span key={index} className={`letter-box ${letterClassName}`}>
        {guessedLetters.includes(letter)
          ? letter.toLocaleUpperCase()
          : isGameOver
          ? letter.toLocaleUpperCase()
          : ""}
      </span>
    );
  });

const livesStatusElement = Array.from({ length: NUMBER_OF_HEARTS }).map((_, index) => {
  const broken = index < wrongGuessedCount;
  const justBroken = isLastGuessIncorrect && index === wrongGuessedCount - 1;

  return <Heart key={index} broken={broken} justBroken={justBroken} />;
});

  const addLetterHandler = (letter) => {
    setGuessedLetters((prevLetters) => {
      return prevLetters.includes(letter)
        ? prevLetters
        : [...prevLetters, letter];
    });
  };

  const resetGame = () => {
    setGuessedLetters([]);
    setCurrentWord(getRandomWord());
  };

  return (
    <main>
      <Header numberOfHearts={NUMBER_OF_HEARTS}/>
      <RenderGameStatus
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isLastGuessIncorrect={isLastGuessIncorrect}
        currentWord={currentWord}
      />
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
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {lastGuessedLetter &&
            (currentWord.includes(lastGuessedLetter)
              ? `Correct! The letter ${lastGuessedLetter} is in the word.`
              : `Sorry, the letter ${lastGuessedLetter} is not in the word.`)}
          {!isGameOver && ` You have ${numGuessesLeft} attempts left.`}
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </section>
      <section className="new-game-btn-section">
        {isGameOver ? <button onClick={resetGame}>New Game</button> : null}
      </section>
    </main>
  );
}

export default App;
