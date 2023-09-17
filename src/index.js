import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Content from './Content';
import Total from './Total';
import Hello from './Hello';
import Counter from './Counter';
import CounterWithButton from './CoounterWithButton';
import ClicksCounter from './ClicksCounter';


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
    
  }
  const name = 'Peter'
  const age = 10

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />  
      <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
        <h1>Contador</h1> 
        <Counter/>
        <h1>Contador con botón</h1>
        <CounterWithButton/>
        <h1>Contador de clicks</h1>
        <ClicksCounter/>
    </>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);