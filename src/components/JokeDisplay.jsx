// Step 1: Accept `joke` and `loading` as props
const JokeDisplay = ({ joke, loading }) => {    
  // Step 2: If `loading` is true, display "Loading..."
  if (loading === true) {
    return <div className="joke-container">Loading...</div>;
  };
  //  Step 3: Otherwise, display the joke 
  return (
    <div className="joke-container">
      {joke}
    </div>
  );
};

export default JokeDisplay;