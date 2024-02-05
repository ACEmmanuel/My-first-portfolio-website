import React from 'react';
import './main.css'

const Button = ({ onClick, label, color }) => {
    const buttonStyle = {
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '5px',
      backgroundColor: color || '#3498db',
      color: '#fff',
      cursor: 'pointer',
      outline: 'none',
      border: 'none',
      fontWeight: 'bold',
    };
  
    return (
      <button style={buttonStyle}>
        {label}
      </button>
    );
  };
  

export default Button