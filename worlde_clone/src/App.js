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
      </div>
      <div hidden={!loser}>
        <>You lost, the word was {word}!</>
      </div>
      <p hidden={!winner}>Winner!</p>
      <button onClick={() => reset()}>Generate New Word</button>
      
      <Grid char={char} colors={colors} />
      
      <Keyboard addLetter={addLetter} delLetter={delLetter} checkGuess={checkGuess} begOfRow={begOfRow} endOfRow={endOfRow} keyColors={keyColors} />

    </main>
  );
}


