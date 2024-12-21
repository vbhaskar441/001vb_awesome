//https://stackblitz.com/edit/react-dgsw8flj?file=src%2FApp.js
import React, { useState } from 'react';
import './style.css';

export default function App() {
  const initialFruits = ['apple', 'orange', 'mango'];
  const [filteredFruits, setFilteredFruits] = useState(initialFruits);

  // Function to handle filtering fruits
  const filterFruits = (event) => {
    const query = event.target.value.toLowerCase(); // Get the search query
    if (query === '') {
      // If the input is cleared, show all fruits
      setFilteredFruits(initialFruits);
    } else {
      // Filter fruits based on the query
      const updatedFruits = initialFruits.filter((fruit) =>
        fruit.toLowerCase().includes(query)
      );
      setFilteredFruits(updatedFruits);
    }
  };

  return (
    <div>
      <h1>Fruits</h1>
      <input
        name="search"
        onChange={filterFruits}
        placeholder="Search fruits..."
      />
      <ul id="fruits">
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}