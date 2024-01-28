import { useState } from "react";
import Counters from "./components/Counters";
import Message from "./components/Message";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <Counters
        count={count}
        handleDecrease={() => setCount((current) => setCount(current - step))}
        handleIncrease={() => setCount((current) => current + step)}
      />
      <Counters
        count={count}
        handleDecrease={() => setStep((current) => current - 1)}
        handleIncrease={() => setStep((current) => current + 1)}
        step={step}
      />

      <Message count={count} />
    </div>
  );
}

export default App;
