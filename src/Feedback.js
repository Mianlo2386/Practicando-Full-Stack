import React, { useState } from 'react'
//import ReactDOM from 'react-dom'

const Feedback = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => () => { 
    setGood(newValue)  
 }
 const setToNeutral = (newValue) => () => { 
    setNeutral(newValue)  
 }
 const setToBad = (newValue) => () => { 
    setBad(newValue)  
 }

  return (
    <div>
       
      <button onClick={setToGood(good +1)}>Good!</button>
      <button onClick={setToNeutral(neutral + 1)}>Neutral</button>
      <button onClick={setToBad(bad + 1)}>Bad!</button>

      <h3>Estadísticas</h3>

      <p>Good {good} </p>
      <p>Neutral {neutral} </p>
      <p>Bad {bad} </p>
      
    </div>
  )
}



export default Feedback