import React, { useState, useEffect } from "react";
import Buttons from "./components/buttons";
import BreakModal from "./components/break-modal";

const App = () => {
  const [seconds, setSeconds] = useState(60 * 25);
  const [stopTimer, setStopTimer] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // COUNTDOWN
  const countdown = (interval) => {
    // If start : decrease seconds
    if (!stopTimer) {
      setSeconds((sec) => {
        // If seconds <= 0 : timer stop
        if (sec <= 0) {
          setStopTimer(true);
          setShowModal(true);
          return sec;
        }
        return sec - 1;
      });
    } else {
      // timer stop
      clearInterval(interval);
    }
  };

  useEffect(() => {
    let timerCountDown = setInterval(() => countdown(timerCountDown), 1000);
    return () => {
      clearInterval(timerCountDown);
    };
  }, [stopTimer]);

  // TOGGLE: START - STOP
  const toggleTimer = () => {
    if (stopTimer && seconds > 0) {
      setStopTimer(false);
    } else {
      setStopTimer(true);
    }

    // The modal disappears if the seconds are greater than 0
    if (seconds > 0) {
      setShowModal(false);
    } else {
      setShowModal(true);
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

  // MODAL
  // IF OK: Recover the seconds of the modal + remove the modal + start the timer
  const setBreakModal = (secondsBreak) => {
    setSeconds(secondsBreak);
    setShowModal(false);
    setStopTimer(false);
  };

  //IF NO: Remove the modal and reset the minutes to 25
  const cancelBreakTimer = () => {
    setShowModal(false);
    setSeconds(60 * 25);
  };

  return (
    <>
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
      {showModal ? (
        <BreakModal
          setBreakTimer={(secondsBreak) => setBreakModal(secondsBreak)}
          cancelBreakTimer={() => cancelBreakTimer()}
        />
      ) : null}
    </>
  );
};

export default App;
