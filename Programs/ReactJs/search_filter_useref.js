//https://stackblitz.com/edit/react-dgsw8flj?file=src%2FApp.js
import React, { useRef } from 'react';
import './style.css';

export default function App() {
  const initialFruits = ['apple', 'orange', 'mango'];
  const searchRef = useRef(); // Ref to access the input field

  const getFilteredFruits = () => {
    const query = searchRef.current.value.toLowerCase(); // Get input value
    if (query === '') {
      return initialFruits; // Show all fruits if input is empty
    }
    return initialFruits.filter((fruit) =>
      fruit.toLowerCase().includes(query)
    ); // Filter fruits based on input
  };

  return (
    <div>
      <h1>Fruits</h1>
      <input
        name="search"
        ref={searchRef}
        onChange={() => {
          // Trigger re-render by calling the function
          document.getElementById('fruits').innerHTML = getFilteredFruits()
            .map((fruit) => `<li>${fruit}</li>`)
            .join('');
        }}
        placeholder="Search fruits..."
      />
      <ul id="fruits">
        {initialFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}