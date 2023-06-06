import React, { useState, useEffect } from "react";

const InfiniteScroll: React.FC = () => {
  const [items, setItems] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadItems = () => {
    setIsLoading(true);
    // Simulating an API call to fetch new items
    setTimeout(() => {
      const newItems = Array.from(
        { length: 10 },
        (_, index) => index + (page - 1) * 10 + 1
      );
      setItems((prevItems) => [...prevItems, ...newItems]);
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 5000); // Simulated delay of 1 second
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadItems();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
