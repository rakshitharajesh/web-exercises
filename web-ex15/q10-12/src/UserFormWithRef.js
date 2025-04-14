import React, { useRef, useState } from 'react';

const UserFormWithRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    setSubmittedData({ name, email });
  };

  return (
    <div>
      <h2>User Form (useRef)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" ref={nameRef} placeholder="Enter your name" />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input type="email" ref={emailRef} placeholder="Enter your email" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <>
          <hr />
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </>
      )}
    </div>
  );
};

export default UserFormWithRef;
