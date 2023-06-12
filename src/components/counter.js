import React, {useState, useEffect} from "react"

const Counter = () => {
    let [counter, setCounter] = useState(0);
    const tang = () => {
        setCounter(counter+=1)
    }
    const giam = () => {
        setCounter(counter-=1)
    }
    const reset = () => {
        setCounter(0)
    }
    
    return (
        <div className="counter">
          <h1>React Counter</h1>
          <span className="counter__output">{counter}</span>
          <div className="btn__container">
            <button onClick={tang} className="control__btn">+</button>
            <button onClick={giam} className="control__btn">-</button>
            <button onClick={reset} className="reset">Reset</button>
          </div>
        </div>
      );
}

export default Counter;