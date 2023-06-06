import React, { useState, useEffect } from "react";

const Ticker: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Increment count every 1000ms (1 second)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
};

export default Ticker;
