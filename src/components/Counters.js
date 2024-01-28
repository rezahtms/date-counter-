const Counters = ({ count, handleDecrease, handleIncrease, step }) => {
  return (
    <div className="row">
      <button onClick={handleDecrease}>-</button>
      <p>{step ? step : count}</p>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default Counters;
