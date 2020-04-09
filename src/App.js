import React, { useState, useEffect } from "react";
import Buttons from "./components/buttons";

const App = () => {
  const [seconds, setSecondes] = useState(60 * 25);

  return (
    <div>
      <h1>{`${Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0")}:${`${seconds % 60}`
        .toString()
        .padStart(2, "0")}`}</h1>
      <Buttons />
    </div>
  );
};

export default App;
