import { useState } from 'react';
import './App.css';

export default function App() {
  
  const ends = [4, 9, 14, 19, 24, 29]
  //const words = ["count", "humor", "pizza"];
  const [char, setChar] = useState(['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']);
  const [targetIndex, setTargetIndex] = useState(0);
  //const [word, setWord] = useState("count");
  //const [guess, setGuess] = useState("");
  const increment = () => (setTargetIndex(pIndex => pIndex + 1));
  const decrement = () => (setTargetIndex(pIndex => pIndex - 1));
  const endOfRow = ends.includes(targetIndex) && char[targetIndex] !== '-';
  const addLetter = (lets) => {
    setChar((prev) => {
      prev.splice(targetIndex, 1, lets);
      if (!ends.includes(targetIndex)) increment();
      //increment();
      console.log(targetIndex);
      return [...prev]
    });
  };
  
  const delLetter = () => {
    setChar((prev) => {
      
      if (endOfRow) prev.splice(targetIndex, 1, '-');
      else {prev.splice(targetIndex - 1, 1, '-')
      decrement();
    };
      return [...prev]
    });
  };

  return (
    <main className='main'>
      
      <div className='header'>
        <h1>Wordle Clone</h1>
        </div>
      
      <div className='grid_container'>
        {char.map((letter,index)=> (
          <div className='grid_item'key={index}>{letter}</div>
        ))}
    
      </div>
      
      <div className='keyboard'>
      <div className='key_row'>
        <button onClick={() => addLetter("Q")} disabled={endOfRow}>Q</button>
        <button onClick={() => addLetter("W")} disabled={endOfRow}>W</button>
        <button onClick={() => addLetter("E")} disabled={endOfRow}>E</button>
        <button onClick={() => addLetter("R")} disabled={endOfRow}>R</button>
        <button onClick={() => addLetter("T")} disabled={endOfRow}>T</button>
        <button onClick={() => addLetter("Y")} disabled={endOfRow}>Y</button>
        <button onClick={() => addLetter("U")} disabled={endOfRow}>U</button>
        <button onClick={() => addLetter("I")} disabled={endOfRow}>I</button>
        <button onClick={() => addLetter("O")} disabled={endOfRow}>O</button>
        <button onClick={() => addLetter("P")} disabled={endOfRow}>P</button>
      </div>
      <div className='key_row'>	
        <button>A</button>
        <button>S</button>
        <button>D</button>
        <button>F</button>
        <button>G</button>
        <button>H</button>
        <button>J</button>
        <button>K</button>
        <button>L</button>
      </div>
      <div className='key_row'>
        <button>Enter</button>
        <button>Z</button>
        <button>X</button>
        <button>C</button>
        <button>V</button>
        <button>B</button>
        <button>N</button>
        <button>M</button>
        <button onClick={() => delLetter(targetIndex)}>&lt;--</button>
      </div>
        </div>

    </main>
  );
}


