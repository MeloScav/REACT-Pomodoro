import React, { useState, useEffect } from "react";
import Buttons from "./components/buttons";
import BreakModal from "./components/break-modal";

const App = () => {
  const [seconds, setSeconds] = useState(60 * 25);
  const [stopTimer, setStopTimer] = useState(true);
  const [breakTime, setBreakTime] = useState(false);

  // COUNTDOWN
  const countdown = () => {
    // If start : decrease seconds
    if (!stopTimer) {
      setSeconds((sec) => {
        // If seconds <= 0 : timer stop
        if (sec <= 0) {
          setStopTimer(true);
          setBreakTime(true);
          return sec;
        }
        return sec - 1;
      });
    } else {
      // timer stop
      clearInterval(timerCountDown);
    }
  };

  useEffect(() => {
    let timerCountDown = setInterval(countdown, 1000);
    return () => {
      clearInterval(timerCountDown);
    };
  }, [stopTimer]);

  let $modal;
  if (breakTime) {
    $modal = <BreakModal />;
  }

  // TOGGLE: START - STOP
  const toggleTimer = () => {
    if (stopTimer) {
      setStopTimer(false);
    } else {
      setStopTimer(true);
    }
  };

  // INCREMENTATION
  const incrementSeconds = () => {
    if (stopTimer) {
      setSeconds(seconds + 60);
    }
  };

  // DECREMENTATION
  const decrementSeconds = () => {
    if ((seconds > 60) & stopTimer) {
      setSeconds(seconds - 60);
    }
  };

  // RESET
  const resetTimer = () => {
    setStopTimer(true);
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
        toggleOnClick={() => {
          toggleTimer();
        }}
        value={stopTimer ? "Start" : "Stop"}
        resetOnClick={() => {
          resetTimer();
        }}
        substractionOnClick={() => {
          decrementSeconds();
        }}
      />
      {$modal}
    </div>
  );
};

export default App;
