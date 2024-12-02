import { useState } from 'react';
import './App.css';

export default function App() {
  
  const begs = [0, 5, 10, 15, 20, 25]
  const ends = [4, 9, 14, 19, 24, 29]
  //const words = ["count", "humor", "pizza"];
  const [char, setChar] = useState(['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']);
  const [targetIndex, setTargetIndex] = useState(0);
  const [word, setWord] = useState("pizza");
  const [guess, setGuess] = useState("");
  //const [color, setColor] = useState("grey");
  const [colors, setColors] = useState(["grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey"])
  const increment = () => (setTargetIndex(pIndex => pIndex + 1));
  const decrement = () => (setTargetIndex(pIndex => pIndex - 1));
  const begOfRow = begs.includes(targetIndex)
  const endOfRow = ends.includes(targetIndex) && char[targetIndex] !== '-';
  const [winner, setWinner] = useState(false);
  
  
  const addLetter = (lets) => {
    setChar((prev) => {
      prev.splice(targetIndex, 1, lets);
      
      if (!ends.includes(targetIndex)) increment();
      
      //setColor("yellow")
      //increment();
      //console.log(targetIndex);
      return [...prev]
    });
    
    
    setGuess(prev => (prev + lets).toLowerCase());
    //console.log(colors)
  };
  //console.log(guess);
  
  const delLetter = () => {
    setChar((prev) => {
      
      if (endOfRow) prev.splice(targetIndex, 1, '-');
      else {prev.splice(targetIndex - 1, 1, '-')
      decrement();
    };
      setGuess(prev2 => (prev2.slice(0, -1)))
      return [...prev]

    });
  };


  const checkGuess = () => {
    
    if (guess === word) {
      setWinner(true);
      setColors((prev) => {
        
        for(let i = targetIndex - 4; i <= targetIndex; i++){
          prev.splice(i, 1, "green")
        }
        
        return [...prev]
      })
    }
    
    else {
      let k = 0;
      setColors((prev) =>{
        for(let i = targetIndex - 4; i <= targetIndex; i++){
          if(word.includes(guess[k])){
            if(word[k] === guess[k]) {/*green*/ prev.splice(i, 1, "green")}
              else { /*yellow*/ prev.splice(i, 1, "yellow")}
          }
        k++;
        }
        return [...prev]
      })
      setGuess(""); 
      if (targetIndex !== 29) increment(); 
      
      }
  };


return (
    <main className='main'>
      
      <div className='header'>
        <h1>Wordle Clone</h1>
        </div>
      <p hidden={!winner}>Winner!</p>
      <div className='grid_container'>
        {char.map((letter,index)=> (
          <div className='grid_item'key={index} style={{backgroundColor: colors[index]}}>{letter}</div>
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
        <button onClick={() => addLetter("A")} disabled={endOfRow}>A</button>
        <button onClick={() => addLetter("S")} disabled={endOfRow}>S</button>
        <button onClick={() => addLetter("D")} disabled={endOfRow}>D</button>
        <button onClick={() => addLetter("F")} disabled={endOfRow}>F</button>
        <button onClick={() => addLetter("G")} disabled={endOfRow}>G</button>
        <button onClick={() => addLetter("H")} disabled={endOfRow}>H</button>
        <button onClick={() => addLetter("J")} disabled={endOfRow}>J</button>
        <button onClick={() => addLetter("K")} disabled={endOfRow}>K</button>
        <button onClick={() => addLetter("L")} disabled={endOfRow}>L</button>
      </div>
      <div className='key_row'>
        <button onClick={() => checkGuess()} disabled={!endOfRow}>Enter</button>
        <button onClick={() => addLetter("Z")} disabled={endOfRow}>Z</button>
        <button onClick={() => addLetter("X")} disabled={endOfRow}>X</button>
        <button onClick={() => addLetter("C")} disabled={endOfRow}>C</button>
        <button onClick={() => addLetter("V")} disabled={endOfRow}>V</button>
        <button onClick={() => addLetter("B")} disabled={endOfRow}>B</button>
        <button onClick={() => addLetter("N")} disabled={endOfRow}>N</button>
        <button onClick={() => addLetter("M")} disabled={endOfRow}>M</button>
        <button onClick={() => delLetter(targetIndex)} disabled={begOfRow}>&lt;--</button>
      </div>
        </div>

    </main>
  );
}


