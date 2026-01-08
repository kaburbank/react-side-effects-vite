// Step 1: Accept `fetchJoke` as a prop
const FetchButton = ({ onFetchJoke }) => {
  // Step 2: Add an onClick event that calls `fetchJoke`
  return (
    <button className="fetch-button" onClick={onFetchJoke}>Get a New Joke</button>
  );
};

export default FetchButton;