export default function Header(props) {
  return (
    <header>
      <h1>Final Hour</h1>
      <p>Guess the word within {props.numberOfHearts} wrong guesses.</p>
    </header>
  );
}