import React from 'react';
import "./button.css";

const Button = ({title}) => {
  return (
    <div className='btn-container'>
        <p className='btn-text'>{title}</p>
    </div>
  )
}

export default Button