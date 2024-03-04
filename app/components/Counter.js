'use client'
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ 
      backgroundColor: '#aed6f1', // Fondo azul clarito
      border: '2px solid #333', 
      borderRadius: '8px', 
      padding: '20px', 
      width: '250px', 
      margin: '20px auto', 
      textAlign: 'center',
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px', textTransform: 'uppercase' }}>Contador</h2>
      <p style={{ fontSize: '20px', color: '#555' }}>Valor actual: {count}</p>
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={increment}
          style={{ 
            backgroundColor: '#4CAF50', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            padding: '10px 20px', 
            cursor: 'pointer',
            marginRight: '10px',
            fontSize: '16px'
          }}
        >
          Incrementar
        </button>
        <button 
          onClick={reset}
          style={{ 
            backgroundColor: '#f44336', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            padding: '10px 20px', 
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Counter;
