import { useState } from 'react'
import {valid_words} from '../valid-words'
import {word_bank} from '../word-bank'

export default function useWordle(){
    const [char, setChar] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
    const [colors, setColors] = useState(["grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey"]);
    const [targetIndex, setTargetIndex] = useState(0);
    const [word, setWord] = useState(/*word_bank[Math.floor(Math.random() * word_bank.length)]*/'woven');
    const [guess, setGuess] = useState("");
    const [keyColors, setKeyColors] = useState([]);
    const [winner, setWinner] = useState(false);
    const [loser, setLoser] = useState(false);
    const begs = [0, 5, 10, 15, 20, 25]
    const ends = [4, 9, 14, 19, 24, 29]
    const begOfRow = begs.includes(targetIndex)
    const endOfRow = ends.includes(targetIndex) && char[targetIndex] !== '';

    
    
    
    const increment = () => (setTargetIndex(pIndex => pIndex + 1));
    const decrement = () => (setTargetIndex(pIndex => pIndex - 1));


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
            
            if (endOfRow) prev.splice(targetIndex, 1, '');
            else {prev.splice(targetIndex - 1, 1, '')
            decrement();
        };
            setGuess(prev2 => (prev2.slice(0, -1)))
            return [...prev]

        });
    };


    const checkGuess = () => {
        
        
        //guess is correct
        if (guess === word) {
            setWinner(true);
            setColors((prev) => {
            
            for(let i = targetIndex - 4; i <= targetIndex; i++){
                prev.splice(i, 1, "green")
            }
            
            return [...prev]
            })
        }
        
        //guess is not correct
        else {
            if (valid_words.includes(guess)){
            
                let k = 0;
                setColors((prev) => {
                let missing = word
                    
                    for(let i = targetIndex - 4; i <= targetIndex; i++){
                        let c = guess[k].toUpperCase()
                        
                    
                        if(word.includes(guess[k])){
                            
                            if(word[k] === guess[k]) { 
                            //green
                            prev.splice(i, 1, "green"); 
                            let lets = guess[k]; 
                            missing = missing.replace(lets, '');
                            }
                            
                            else if(missing.includes(guess[k])){
                            //yellow
                            prev.splice(i, 1, "yellow")
                            let lets = guess[k];
                            missing = missing.replace(lets, '');
                            }
                            
                            
                        }
                        else{
                            setKeyColors((prev) => { 
                            //console.log(test)
                            prev.push(c);
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
        setChar(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
        setTargetIndex(0);
        setWord(word_bank[Math.floor(Math.random() * word_bank.length)]);
        setGuess("")
        setColors(["grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey"])
        setWinner(false)
        setLoser(false)
        setKeyColors([])
    }

    return{
        char, colors,word, keyColors,
        winner, loser, addLetter, delLetter, 
        checkGuess, reset, begOfRow, endOfRow
    }
}