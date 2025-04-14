import React, { useEffect, useState } from 'react';

const JokeFetcher = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} — ${data.punchline}`);
    } catch (error) {
      setJoke('Failed to fetch a joke. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch joke on component mount
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      {loading ? <p>Loading...</p> : <p>{joke}</p>}
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
};

export default JokeFetcher;
