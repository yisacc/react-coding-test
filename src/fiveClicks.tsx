import React, { useState } from "react";

const FiveTimes: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isTimeout, setIsTimeout] = useState(false);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount + 1 >= 5) {
      setIsTimeout(true);
      setTimeout(() => {
        setIsTimeout(false);
        setClickCount(0);
      }, 5000); // Timeout duration of 5 seconds
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isTimeout}>
        Click Me
      </button>
      {isTimeout && (
        <p>You have clicked the button 5 times. Timeout for 5 seconds.</p>
      )}
    </div>
  );
};

export default FiveTimes;
