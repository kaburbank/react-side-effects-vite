// Step 1: Accept `joke` and `loading` as props

const JokeDisplay = ({ joke, loading }) => {    
  if (loading === true) {
    return <div className="joke-container">Loading...</div>;
  };
  return (
    <div className="joke-container">
      {/* Step 2: If `loading` is true, display "Loading..." */}
      {/* Step 3: Otherwise, display the joke */}
      {joke}
    </div>
  );
};

export default JokeDisplay;