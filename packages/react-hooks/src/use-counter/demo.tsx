import React from "react";
import { useCounter } from ".";

export function CounterDemo() {
  const { count, inc, dec, set, reset } = useCounter(0, { min: 0, max: 10 });

  return (
    <div className="demo-container">
      <h2>useCounter Demo</h2>
      <div className="demo-content">
        <p>Current count: {count}</p>
        <div className="button-group">
          <button onClick={() => inc()}>Increment</button>
          <button onClick={() => dec()}>Decrement</button>
          <button onClick={() => inc(2)}>Increment by 2</button>
          <button onClick={() => dec(2)}>Decrement by 2</button>
        </div>
        <div className="button-group">
          <button onClick={() => set(5)}>Set to 5</button>
          <button onClick={() => reset()}>Reset</button>
        </div>
      </div>
    </div>
  );
}
