import React, { useState } from 'react';

import StyledButton from './StyledButton';
import LifecycleDemo from './LifecycleDemo';
import Parent from './Parent';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import JokeFetcher from './JokeFetcher';


// Header Component
const Header = ({ title }) => {
  return <header><h1>{title}</h1></header>;
};

// Content Component
const Content = () => {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my computer I needed a break, and now it won't stop sending me KitKat ads.",
    "Why did the developer go broke? Because he used up all his cache."
  ];

  const [joke, setJoke] = useState("");

  const showJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <main>
	<StyledButton label="Tell me a joke" onClick={showJoke} />
      {joke && <p>{joke}</p>}
    </main>
  );
};

// Footer Component
const Footer = () => {
  return <footer><p>© 2025 My React App - Good day!</p></footer>;
};

// App Component
const App = () => {
	  const [showComponent, setShowComponent] = useState(true);


  return (
    <div>
      <Header title="React Exercise 15"/>
      <Content />
    
	
      <h1>Lifecycle Demo Example</h1>
      <button onClick={() => setShowComponent((prev) => !prev)}>
        {showComponent ? 'Unmount Component' : 'Mount Component'}
      </button>

      {showComponent && <LifecycleDemo />}
	  
	  <Parent />
	  
	  <Counter1 />
	  <Counter2 />
	  
	  <JokeFetcher />

	  
	  <Footer />
    </div>
	
  );
};

export default App;
