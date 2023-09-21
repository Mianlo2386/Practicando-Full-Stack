import React, { useState } from 'react';
import anecdotes from './anecdotestext'; // Importa la lista de anécdotas desde el archivo Anecdotes.js

const Anecdotes = () => {
  const [selected, setSelected] = useState(0);

  const randomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={randomAnecdote}>Next Anecdote</button>
    </div>
  );
};

export default Anecdotes;
