import React from 'react';
import StatisticLine from './StatisticLine'; // Importa StatisticLine

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
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Promedio" value={average()} />
      <StatisticLine text="Positivos" value={`${positive()} %`} />
    </div>
  );
};

export default Statistics;
