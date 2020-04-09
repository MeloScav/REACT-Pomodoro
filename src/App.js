import React, { useState, useEffect } from "react";
import Buttons from "./components/buttons";

const App = () => {
  const [seconds, setSeconds] = useState(60 * 25);

  // INCREMENTATION
  const incrementSeconds = () => {
    setSeconds(seconds + 60);
  };

  // DECREMENTATION
  const decrementSeconds = () => {
    setSeconds(seconds - 60);
  };

  // RESET
  const resetTimer = () => {
    setSeconds(60 * 25);
  };

  return (
    <div>
      <h1>{`${Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0")}:${`${seconds % 60}`
        .toString()
        .padStart(2, "0")}`}</h1>
      <Buttons
        addOnClick={() => {
          incrementSeconds();
        }}
        substractionOnClick={() => {
          decrementSeconds();
        }}
        resetOnClick={() => {
          resetTimer();
        }}
      />
    </div>
  );
};

export default App;
