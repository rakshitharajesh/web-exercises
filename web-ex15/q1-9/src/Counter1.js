import React, { useState } from 'react';

const Counter1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count useState: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default Counter1;
