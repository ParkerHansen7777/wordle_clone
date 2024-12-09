import { useState } from 'react';
import { valid_words } from './valid-words';
import { word_bank } from './word-bank';
import './App.css';

export default function App() {
  
  const begs = [0, 5, 10, 15, 20, 25]
  const ends = [4, 9, 14, 19, 24, 29]
  const [char, setChar] = useState(['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']);
  const [targetIndex, setTargetIndex] = useState(0);
  const [word, setWord] = useState(word_bank[Math.floor(Math.random() * word_bank.length)]);
  const [guess, setGuess] = useState("");
  const [colors, setColors] = useState(["grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey"])
  const increment = () => (setTargetIndex(pIndex => pIndex + 1));
  const decrement = () => (setTargetIndex(pIndex => pIndex - 1));
  const begOfRow = begs.includes(targetIndex)
  const endOfRow = ends.includes(targetIndex) && char[targetIndex] !== '-';
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [keyColors, setKeyColors] = useState([]);


  //console.log(word)

  const addLetter = (lets) => {
    setChar((prev) => {
      prev.splice(targetIndex, 1, lets);
      
      if (!ends.includes(targetIndex)) increment();
      
      
      return [...prev]
    });
    
    
    setGuess(prev => (prev + lets).toLowerCase());
    
  };
  
  
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
      if (valid_words.includes(guess)){
        let k = 0;
        setColors((prev) =>{
          for(let i = targetIndex - 4; i <= targetIndex; i++){
            let test = guess[k].toUpperCase()
            if(word.includes(guess[k])){
              if(word[k] === guess[k]) {/*green*/ prev.splice(i, 1, "green")}
                else { /*yellow*/ prev.splice(i, 1, "yellow")}
            }
            else{
              setKeyColors((prev) => { 
                console.log(test)
                prev.push(test);
                return [...prev];

              })
            }
          k++;
          }
          return [...prev]
        })
        setGuess(""); 
        if (targetIndex !== 29) increment();
        else setLoser(true); 
        
      }
    }
  };

  const reset = () => {
    setChar(['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']);
    setTargetIndex(0);
    setWord(word_bank[Math.floor(Math.random() * word_bank.length)]);
    setGuess("")
    setColors(["grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey"])
    setWinner(false)
    setLoser(false)
    setKeyColors([])
  }


  console.log(keyColors)
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
      
      <div className='grid_container'>
        {char.map((letter,index)=> (
          <div className='grid_item'key={index} style={{backgroundColor: colors[index]}}>{letter}</div>
        ))}
    
      </div>
      
      <div className='keyboard'>
      <div className='key_row'>
        <button onClick={() => addLetter("Q")} disabled={endOfRow} style={keyColors.includes('Q') ? {backgroundColor: "grey"} : {}}>Q</button>
        <button onClick={() => addLetter("W")} disabled={endOfRow} style={keyColors.includes('W') ? {backgroundColor: "grey"} : {}}>W</button>
        <button onClick={() => addLetter("E")} disabled={endOfRow} style={keyColors.includes('E') ? {backgroundColor: "grey"} : {}}>E</button>
        <button onClick={() => addLetter("R")} disabled={endOfRow} style={keyColors.includes('R') ? {backgroundColor: "grey"} : {}}>R</button>
        <button onClick={() => addLetter("T")} disabled={endOfRow} style={keyColors.includes('T') ? {backgroundColor: "grey"} : {}}>T</button>
        <button onClick={() => addLetter("Y")} disabled={endOfRow} style={keyColors.includes('Y') ? {backgroundColor: "grey"} : {}}>Y</button>
        <button onClick={() => addLetter("U")} disabled={endOfRow} style={keyColors.includes('U') ? {backgroundColor: "grey"} : {}}>U</button>
        <button onClick={() => addLetter("I")} disabled={endOfRow} style={keyColors.includes('I') ? {backgroundColor: "grey"} : {}}>I</button>
        <button onClick={() => addLetter("O")} disabled={endOfRow} style={keyColors.includes('O') ? {backgroundColor: "grey"} : {}}>O</button>
        <button onClick={() => addLetter("P")} disabled={endOfRow} style={keyColors.includes('P') ? {backgroundColor: "grey"} : {}}>P</button>
      </div>
      <div className='key_row'>	
        <button onClick={() => addLetter("A")} disabled={endOfRow} style={keyColors.includes('A') ? {backgroundColor: "grey"} : {}}>A</button>
        <button onClick={() => addLetter("S")} disabled={endOfRow} style={keyColors.includes('S') ? {backgroundColor: "grey"} : {}}>S</button>
        <button onClick={() => addLetter("D")} disabled={endOfRow} style={keyColors.includes('D') ? {backgroundColor: "grey"} : {}}>D</button>
        <button onClick={() => addLetter("F")} disabled={endOfRow} style={keyColors.includes('F') ? {backgroundColor: "grey"} : {}}>F</button>
        <button onClick={() => addLetter("G")} disabled={endOfRow} style={keyColors.includes('G') ? {backgroundColor: "grey"} : {}}>G</button>
        <button onClick={() => addLetter("H")} disabled={endOfRow} style={keyColors.includes('H') ? {backgroundColor: "grey"} : {}}>H</button>
        <button onClick={() => addLetter("J")} disabled={endOfRow} style={keyColors.includes('J') ? {backgroundColor: "grey"} : {}}>J</button>
        <button onClick={() => addLetter("K")} disabled={endOfRow} style={keyColors.includes('K') ? {backgroundColor: "grey"} : {}}>K</button>
        <button onClick={() => addLetter("L")} disabled={endOfRow} style={keyColors.includes('L') ? {backgroundColor: "grey"} : {}}>L</button>
      </div>
      <div className='key_row'>
        <button onClick={() => checkGuess()} disabled={!endOfRow}>Enter</button>
        <button onClick={() => addLetter("Z")} disabled={endOfRow} style={keyColors.includes('Z') ? {backgroundColor: "grey"} : {}}>Z</button>
        <button onClick={() => addLetter("X")} disabled={endOfRow} style={keyColors.includes('X') ? {backgroundColor: "grey"} : {}}>X</button>
        <button onClick={() => addLetter("C")} disabled={endOfRow} style={keyColors.includes('C') ? {backgroundColor: "grey"} : {}}>C</button>
        <button onClick={() => addLetter("V")} disabled={endOfRow} style={keyColors.includes('V') ? {backgroundColor: "grey"} : {}}>V</button>
        <button onClick={() => addLetter("B")} disabled={endOfRow} style={keyColors.includes('B') ? {backgroundColor: "grey"} : {}}>B</button>
        <button onClick={() => addLetter("N")} disabled={endOfRow} style={keyColors.includes('N') ? {backgroundColor: "grey"} : {}}>N</button>
        <button onClick={() => addLetter("M")} disabled={endOfRow} style={keyColors.includes('M') ? {backgroundColor: "grey"} : {}}>M</button>
        <button onClick={() => delLetter(targetIndex)} disabled={begOfRow}>&lt;--</button>
      </div>
        </div>

    </main>
  );
}


