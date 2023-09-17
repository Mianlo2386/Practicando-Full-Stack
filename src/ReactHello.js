import React, {useState} from "react"



const ReactHello = () => {
    const [value, setValue] = useState(10)
  
    const setToValue = (newValue) => () => { 
           setValue(newValue)  
        }

    const hello = (who) => () => {
    console.log('hello', who)
  }
  
    return (
      <div>
        <h3>Otro contador:</h3>
        {value}
        <button onClick={setToValue(1000)}>+1000</button> 
        <button onClick={setToValue(0)}>Reset</button>
        <button onClick={setToValue(value + 1)}>Increment 1</button>

        <h3>Saluda en consola a:</h3>
        <button onClick={hello('world!')}>World</button>
        <button onClick={hello('react!')}>React</button>
        <button onClick={hello('function!')}>Function</button>
      </div>
    )
  }
  export default ReactHello