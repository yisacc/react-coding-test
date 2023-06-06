import React, { useState, useEffect } from 'react';

const DebounceAndThrottle: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const debounce = (func: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const throttle = (func: Function, limit: number) => {
    let throttling = false;
    return (...args: any[]) => {
      if (!throttling) {
        func.apply(null, args);
        throttling = true;
        setTimeout(() => {
          throttling = false;
        }, limit);
      }
    };
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const debouncedSearch = debounce(() => {
    setDebouncedSearchTerm(searchTerm);
  }, 500); // Debounce delay of 500ms

  const throttledSearch = throttle(() => {
    setDebouncedSearchTerm(searchTerm);
  }, 1000); // Throttle limit of 1000ms

  useEffect(() => {
    debouncedSearch();
  }, [searchTerm]);

  useEffect(() => {
    throttledSearch();
  }, [searchTerm]);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search" />
      <p>Search Term: {searchTerm}</p>
      <p>Debounced Search Term: {debouncedSearchTerm}</p>
    </div>
  );
};

export default DebounceAndThrottle;
