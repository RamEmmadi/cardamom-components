import React, { useState } from 'react';
//import classes from './Counter.module.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const toggleCounterHandler = () => {};

  const incrementCounter = () => {
    const currCounter = counter + 1;
    setCounter(currCounter);
  };

  const decrementCounter = () => {
    if (counter >= 1) {
      const currCounter = counter - 1;
      setCounter(currCounter);
    }
  };

  return (
    <div
      className=""
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>{counter}</h1>
      <div style={{ margin: '10px' }}>
        <button style={{ margin: '10px' }} onClick={incrementCounter}>
          Increment +{' '}
        </button>
        <button style={{ margin: '10px' }} onClick={decrementCounter}>
          Decrement -{' '}
        </button>
      </div>
    </div>
  );
};

export default Counter;
