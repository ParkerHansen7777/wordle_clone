import React from 'react';
import KeyRow from './KeyRow';
import Key from './Key';

export default function Keyboard(props){
    return(
    <div className='keyboard'>
        <KeyRow keys={['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']} addLetter={props.addLetter} endOfRow={props.endOfRow} keyColors={props.keyColors}/>
        <KeyRow keys={['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']} addLetter={props.addLetter} endOfRow={props.endOfRow} keyColors={props.keyColors}/>
        
        <div className='key_row'>
          <Key label="Enter" onClick={() => props.checkGuess()} disabled={!props.endOfRow} />
          <KeyRow keys={['Z', 'X', 'C', 'V', 'B', 'N', 'M']} addLetter={props.addLetter} endOfRow={props.endOfRow} keyColors={props.keyColors}/>
          <Key label="<--" onClick={() => props.delLetter()} disabled={props.begOfRow} />
        </div>
      </div>
    );
}