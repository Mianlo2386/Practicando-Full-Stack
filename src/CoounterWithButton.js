import React, { useState }from "react"

const CounterWithButton = () => {
    const [ counter2, setCounter2 ] = useState(0)

    const increaseByOne = () => setCounter2(counter2 + 1)
    const decreaseByOne = () => setCounter2(counter2 - 1)
    const setToZero = () => setCounter2(0)
  
    
    return (
      <div>
        <div>{counter2}</div>
  
        <button onClick={increaseByOne}>
          +1
        </button>
        <button onClick={decreaseByOne}>
          -1
        </button>
        <button onClick={setToZero}>
         Reset     
        </button>
      </div>
    )
  }
  export default CounterWithButton