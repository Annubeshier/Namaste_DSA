import { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const handleIncrease = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };
  const handleDecrease = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };
  const handleReset = () => {
    setProgress(0);
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "40px",
          borderRadius: "20px",
          backgroundColor: "#eeeeee",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#4ea3a3",
            transition: "width 0.3s ease",
          }}
        >
          {progress}%
        </div>
      </div>
      <button
        style={{ marginTop: "40px", marginRight: "20px" }}
        onClick={handleIncrease}
      >
        Increase
      </button>
      <button style={{ marginTop: "40px" }} onClick={handleDecrease}>
        Decrease
      </button>
      <button style={{ marginTop: "40px" }} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
export default ProgressBar;
