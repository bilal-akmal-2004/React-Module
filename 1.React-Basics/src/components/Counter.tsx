import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter-container">
      <h2>Counter</h2>

      <button className="button minus" onClick={() => setCount(prev => prev - 1)}>
        -
      </button>

      <span className="count-text">{count}</span>

      <button className="button" onClick={() => setCount(prev => prev + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;