import React from 'react';

export default function Key(props) {
    return (
      <button onClick={props.onClick} disabled={props.disabled} style={props.style}>
        {props.label}
      </button>
    );
  }