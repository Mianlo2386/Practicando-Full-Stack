import React, { useState } from 'react'
//import ReactDOM from 'react-dom'

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
      <>
        <button onClick={handleGoodClick}>Good!</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad!</button>
  
        <h3>Estadísticas</h3>
  
        <p>Good {good} </p>
        <p>Neutral {neutral} </p>
        <p>Bad {bad} </p>
        <p>Total {total} </p>
        <p>Promedio {average()}</p>
        <p>Positivos {positive()} %</p>
      </>
    );
  };
  

/* const Feedback = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const setToGood = (newValue) => () => { 
    setGood(newValue)  
 }
 const setToNeutral = (newValue) => () => { 
    setNeutral(newValue)  
 }
 const setToBad = (newValue) => () => { 
    setBad(newValue)  
 }
 const setToTotal = (newValue) => () => { 
    setTotal(newValue)  
 }

  return (
    <>
       
      <button onClick={() => { setToGood(good + 1); setToTotal(total + 1); }}>Good!</button>
      <button onClick={setToNeutral(neutral + 1)}>Neutral</button>
      <button onClick={setToBad(bad + 1)}>Bad!</button>

      <h3>Estadísticas</h3>

      <p>Good {good} </p>
      <p>Neutral {neutral} </p>
      <p>Bad {bad} </p>
      <p>Total{total} </p>

    </>
  )
} */



export default Feedback