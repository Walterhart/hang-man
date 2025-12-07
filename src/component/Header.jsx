export default function Header(props) {
  return (
    <header>
       <h1>Guess the word</h1>
                <p>Guess the word within {props.numberOfHearts} attempts.</p>
    </header>
  );
}