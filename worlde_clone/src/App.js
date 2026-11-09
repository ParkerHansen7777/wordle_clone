import Grid from './components/Grid';
import Keyboard from './components/Keyboard/Keyboard';
import useWordle from './hooks/useWordle';
import './App.css';

export default function App() {
  
  const {
    char, colors, word, keyColors,
    winner, loser, addLetter, delLetter, 
    checkGuess, reset, begOfRow, endOfRow
  } = useWordle();

  

  
  return (
    <main className='main'>
      <div className='header'>
        <h1>Wordle Clone</h1>
        <p className="subtitle">Guess the word in 6 tries</p>
      </div>
      
      {loser && (
        <div className="status lose">
          You lost — word was <strong>{word}</strong>
        </div>
      )}

      {winner && (
        <div className="status win">
          🎉 You guessed it!
        </div>
      )}
      
      <div className="header_actions">
        <button onClick={() => reset()}>New Word</button>
      </div>
      
      <Grid char={char} colors={colors} />
      
      <Keyboard addLetter={addLetter} delLetter={delLetter} checkGuess={checkGuess} begOfRow={begOfRow} endOfRow={endOfRow} keyColors={keyColors} />

    </main>
  );
}


