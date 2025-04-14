import React, { useRef } from 'react';

const FocusForm = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Focus Input Form</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus me"
      />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
};

export default FocusForm;
