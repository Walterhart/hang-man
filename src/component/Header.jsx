export default function Header(props) {
  return (
    <header>
      <h1>Hangman Game</h1>
      <p>Guess the word within {props.numberOfHearts} wrong guesses.</p>
    </header>
  );
}