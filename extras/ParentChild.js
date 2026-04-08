import React, { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const increment = () => {
    if (count < 5) {
      const newCount = count + 1;
      setCount(newCount);
      if (newCount === 5) {
        setIsDone(true);
      }
    }
  };

  const reset = () => {
    setCount(0);
    setIsDone(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Parent Component</h2>

      <input type="text" value={count} readOnly />

      <Child
        count={count}
        increment={increment}
        reset={reset}
        isDone={isDone}
      />
    </div>
  );
};

export default Parent;

const Child = ({ count, increment, reset, isDone }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Child Component</h3>

      {/* Increment Button */}
      <button onClick={increment} disabled={isDone}>
        Increment
      </button>

      {/* Show Reset Button only when done */}
      {isDone && (
        <button onClick={reset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      )}

      {/* Status Block */}
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          color: "#fff",
          backgroundColor: isDone ? "red" : "green",
        }}
      >
        {isDone ? "Done" : "In Progress"}
      </div>
    </div>
  );
};
