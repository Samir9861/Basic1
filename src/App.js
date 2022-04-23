import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)} className="button">
        Add
      </button>
      <button onClick={() => setNumber(number - 1)} className="button">
        less
      </button>
      <button onClick={() => setNumber(0)} className="button">
        reset
      </button>
    </div>
  );
};
export default App;
