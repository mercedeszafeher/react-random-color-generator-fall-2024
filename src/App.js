import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#ffffff'); // State to store the random generated color

  // Generating Random Color
  function generateRandomColor() {
    const newColor = randomColor(); // Generate random color using the library randomcolor
    setColor(newColor); // Update the state with the new color
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        margin: 0,
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: '600px',
          padding: '20px',
          borderRadius: '10px',
          border: '2px solid #ddd',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1>Random Color Generator</h1>

        <h3>Generated Color:</h3>

        <div
          style={{
            width: '100%',
            height: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            borderRadius: '10px',
            color: '#ffffff',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            marginTop: '10px',
            border: '2px solid #ccc',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            padding: '10px -10px',
            backgroundColor: color,
          }}
        >
          {color}
        </div>
        <button onClick={generateRandomColor}>Generate</button>
      </div>
    </div>
  );
}
