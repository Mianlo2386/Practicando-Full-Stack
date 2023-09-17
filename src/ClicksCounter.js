import React, {useState} from "react";
import History from "./History";
import Button from "./Button";


const ClicksCounter = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
    
  const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
            setLeft(left + 1)  }
  const handleRightClick = () => {
        setAll(allClicks.concat('R')) 
           setRight(right + 1)  }
           console.log('el valor del array es', allClicks);
      return (
        <div>
          {left}
          <Button onClick={handleLeftClick} text='Left' />
          <Button onClick={handleRightClick} text='Right' />
          {right}
          <History allClicks={allClicks} />
        </div>
      )
      
  }

  export default ClicksCounter
  