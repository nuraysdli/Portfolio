import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState("");

  let inputChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setStep("");
    } else {
      const number = Number(value);
      if (!isNaN(number)) {
        setStep(number);
      }
    }
  };

  const isValidStep = step !== "" && !isNaN(step);

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let inputIncrement = () => {
    if (isValidStep) {
      setCount(count + step);
    }
    setStep("");
  };

  let inputDecrement = () => {
    if (isValidStep) {
      const newCount = count - step;
      setCount(newCount < 0 ? 0 : newCount);
    }
    setStep("");
  };

  return (
    <div className="container">
      <h1>✨ React Counter App ✨</h1>
      <div className="counter">{count}</div>
      <div className="buttons">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
      <input
        type="number"
        value={step}
        onChange={inputChange}
        placeholder="Add step value"
      />
      <div className="buttons">
        <button onClick={inputDecrement}>-{isValidStep ? step : ""}</button>
        <button onClick={inputIncrement}>+{isValidStep ? step : ""}</button>
      </div>
    </div>
  );
}

export default App;
