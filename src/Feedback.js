import React, { useState } from 'react';
import Statistics from './Statistics';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <>
      <h3>Give Feedback</h3>
      <button onClick={handleGoodClick}>Good!</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad!</button>

      {total === 0 ? (
        <p>No hay comentarios aún.</p>
      ) : (
        <div>
          <h3>Statistics</h3>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        </div>
      )}
    </>
  );
};

export default Feedback;
