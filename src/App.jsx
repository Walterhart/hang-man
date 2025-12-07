import { useState } from "react";
import Header from "./component/Header";
import Heart from "./component/Heart";
import Keyboard from "./component/keyboard";


function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [lives, setLives] = useState(9);
  const [gameStatus, setGameStatus] = useState("win");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const currentWordElement = currentWord.split("").map((letter, index) => (
    <span key={index} className="letter-box">
      {letter.toLocaleUpperCase()}
    </span>
  ));

  const livesStatusElement = Array.from({ length: 9 }).map((_, index) => (
    <Heart key={index} broken={false} />
  ));

  const addLetterHandler = (letter) => {
   setGuessedLetters(prevLetters => {
            return  prevLetters.includes(letter) ? prevLetters: [...prevLetters, letter]
        })
    }


  return (
    <main>
      <Header />
      <section className="game-status">
        <h3>You Win</h3>
        <p>Good job!</p>
      </section>
      <section className="life-status-section">{livesStatusElement}</section>
      <section className="current-word">{currentWordElement}</section>
      <section className="keyboard-section">
        <Keyboard onLetterClick={addLetterHandler} guessedLetters={guessedLetters} currentWord={currentWord} />
      </section>
      <section className="new-game-btn-section">
        <button>New Game</button>
      </section>
    </main>
  );
}

export default App;
