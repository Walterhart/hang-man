import clsx from "clsx";

export default function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const keyboardElement = alphabet.split("").map((letter) => {

    const isGuessed = props.guessedLetters.includes(letter);
    const isCorrect = isGuessed && props.currentWord.includes(letter);
    const isWrong = isGuessed && !props.currentWord.includes(letter);

    const className = clsx({
      key: true,
      correct: isCorrect && isGuessed,
      wrong: isWrong,
    });

    return (
      <button
        key={letter}
        className={className}
        disabled={isGuessed || props.isGameOver}
        onClick={() => props.onLetterClick(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <div className="keyboard">{keyboardElement}</div>;
}
