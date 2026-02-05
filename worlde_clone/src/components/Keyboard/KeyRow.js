import React from 'react';
import Key from './Key';


export default function KeyRow(props){
    return(
        <div className="key_row">
            {props.keys.map((k) => (
                <Key
                    key={k}
                    label={k}
                    onClick={() => props.addLetter(k)}
                    disabled={props.endOfRow}
                    style={props.keyColors.includes(k) ? { backgroundColor: "grey" } : {}}
                />
            ))}
        </div>
    );
}