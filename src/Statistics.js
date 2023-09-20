import React from 'react';

const Statistics = ({ good, neutral, bad, total }) => {
  const average = () => {
    if (total === 0) {
      return 0; // Evitar división por cero
    }

    return (good + neutral - bad) / total;
  };

  const positive = () => {
    if (total === 0) {
      return 0; // Evitar división por cero
    }

    return (good * 100) / total;
  };

  return (
    <div>
      <p>Good {good} </p>
      <p>Neutral {neutral} </p>
      <p>Bad {bad} </p>
      <p>Total {total} </p>
      <p>Promedio {average()}</p>
      <p>Positivos {positive()} %</p>
    </div>
  );
};

export default Statistics;
