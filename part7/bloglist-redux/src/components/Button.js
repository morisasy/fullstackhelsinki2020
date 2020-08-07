import React from 'react';

const Button = ({ onClick, text }) => { 
    return (
      <button onClick={onClick} id = "btn-button">
         {text}
      </button>
    )
  }

  export default Button;

