import React from 'react';

export default function Grid(props){
    return(
        <div className='grid_container'>
        {props.char.map((letter,index)=> (
          <div className='grid_item'key={index} style={{backgroundColor: props.colors[index]}}>{letter}</div>
        ))}
      </div>
    );
}