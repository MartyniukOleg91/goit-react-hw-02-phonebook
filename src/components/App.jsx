import React, { useState } from "react";


export const App = () => {
  const [count, setCount] = useState(0);
   const [value, setValue] = useState(' ');
 function increment(params) {
  setCount(count + 1)
 }

  function decrement(params) {
   setCount(count - 1)
 }
  return (
    
    <>
      <h1>{count}</h1>
      <h2>{value}</h2>
      <input type='text' value={value}
      onChange={event => setValue(event.target.value)}/>
      <button onClick={increment}>плюс</button>
      <button onClick={decrement}>мінус</button>
    </>
  );
};

