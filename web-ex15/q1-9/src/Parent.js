import React from 'react';
import Child from './Child';

const Parent = () => {
  const parentMessage = "Sample message from the Parent component!";

  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={parentMessage} />
	  <Child />
    </div>
  );
};

export default Parent;
