export default function Keyboard() {
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
     const keyboardElement = alphabet.split("").map(letter => (
        <button key={letter}>{letter.toUpperCase()}</button>
    ))
    return (
        <div className="keyboard" >
            {keyboardElement}
        </div>
    );
}   