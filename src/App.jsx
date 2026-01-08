import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  // Step 3: Define a function that fetches a programming joke from an API
  const fetchJoke = () => {
    // - Start by setting `loading` to true
    setLoading((loading) => true);
    // - Fetch the joke from the API
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((response) => response.json())
      .then((data) => {
        // - Update the `joke` state with the fetched joke
        setJoke(data.joke);
        // - Set `loading` to false once the joke is loaded
        setLoading((loading) => false);
      })
      // - Handle any errors in the `.catch` block
      .catch((error) => {
        console.error("Error fetching joke:", error);
        setLoading((loading) => false);
      });
  };

  // Render the JokeDisplay and FetchButton components
  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading}/>
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton onFetchJoke={fetchJoke}/>
    </div>
  );
};

export default App