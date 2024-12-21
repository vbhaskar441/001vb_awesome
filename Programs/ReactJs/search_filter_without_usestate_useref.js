//https://stackblitz.com/edit/react-dgsw8flj?file=src%2FApp.js
import React from 'react';
import './style.css';

export default function App() {
  const initialFruits = ['apple', 'orange', 'mango'];

  const filterFruits = (event) => {
    const query = event.target.value.toLowerCase(); // Get the input value
    const ulElement = document.getElementById('fruits'); // Access the `<ul>` element

    // Clear current list
    ulElement.innerHTML = '';

    // If no query, show all fruits
    if (query === '') {
      initialFruits.forEach((fruit) => {
        const li = document.createElement('li');
        li.textContent = fruit;
        ulElement.appendChild(li);
      });
    } else {
      // Filter and update the list
      const filteredFruits = initialFruits.filter((fruit) =>
        fruit.toLowerCase().includes(query)
      );
      filteredFruits.forEach((fruit) => {
        const li = document.createElement('li');
        li.textContent = fruit;
        ulElement.appendChild(li);
      });
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
        {initialFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}