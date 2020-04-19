import React, { useState, useEffect } from "react";
import Timer from "./components/timer";
import Buttons from "./components/buttons";
import BreakModal from "./components/break-modal";

const App = () => {
  const [seconds, setSeconds] = useState(60 * 0.1);
  const [stopTimer, setStopTimer] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [breakTimer, setBreakTimer] = useState(false);

  // COUNTDOWN
  const countdown = (interval) => {
    // If start : decrease seconds
    if (!stopTimer) {
      setSeconds((sec) => {
        // If seconds <= 0 : timer stop
        if (sec <= 0 && !breakTimer) {
          setStopTimer(true);
          setShowModal(true);
          return sec;
        } else if (sec <= 0 && breakTimer) {
          setStopTimer(true);
          setShowModal(false);
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
    setBreakTimer(true);
  };

  //IF NO: Remove the modal and reset the minutes to 25
  const cancelBreakTimer = () => {
    setShowModal(false);
    setSeconds(60 * 25);
    setBreakTimer(false);
  };

  return (
    <>
      <Timer
        value={breakTimer ? "Break timer" : "Work timer"}
        second={seconds}
      />

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

      {seconds <= 0 && breakTimer ? (
        <button
          type="button"
          onClick={() => {
            cancelBreakTimer();
          }}
        >
          {"Work timer"}
        </button>
      ) : null}

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
