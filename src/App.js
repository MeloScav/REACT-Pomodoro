import React, { useState, useEffect } from "react";
import Timer from "./components/timer";
import Buttons from "./components/buttons";
import BreakModal from "./components/break-modal";
import PlayButtonSVG from "./components/SVG/play-button-svg";
import PauseButtonSVG from "./components/SVG/pause-button-svg";
import Alarm from "./assets/mon-audio.mp3";

const App = () => {
  const [seconds, setSeconds] = useState(60 * 25);
  const [stopTimer, setStopTimer] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [breakTimer, setBreakTimer] = useState(false);

  // AUDIO: we create an audio to use it after
  let timerAlarm = new Audio(Alarm);

  // COUNTDOWN
  const countdown = (interval) => {
    // If start : decrease seconds
    if (!stopTimer) {
      setSeconds((sec) => {
        // If seconds <= 0 : timer stop and sound the alarm
        if (sec <= 0) {
          setStopTimer(true);
          timerAlarm.play();
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
    if (breakTimer) {
      setBreakTimer(false);
    } else {
      setBreakTimer(true);
    }
  };

  //IF NO: Remove the modal and reset the minutes to 25
  const cancelBreakTimer = () => {
    setShowModal(false);
    if (breakTimer) {
      setBreakTimer(true);
      setSeconds(60 * 5);
    } else {
      setBreakTimer(false);
      setSeconds(60 * 25);
    }
  };

  return (
    <>
      <h1 className={"title"}>{breakTimer ? "Break timer" : "Work timer"}</h1>

      <Timer
        second={seconds}
        addOnClick={() => {
          incrementSeconds();
        }}
        substractionOnClick={() => {
          decrementSeconds();
        }}
      />

      <Buttons
        toggleOnClick={() => {
          toggleTimer();
        }}
        value={stopTimer ? "Start" : "Pause"}
        svg={stopTimer ? <PlayButtonSVG /> : <PauseButtonSVG />}
        resetOnClick={() => {
          resetTimer();
        }}
      />

      {showModal ? (
        <BreakModal
          secondsB={breakTimer ? 25 : 5}
          value={breakTimer ? "It's time to work" : "Take a break"}
          setBreakTimer={(secondsBreak) => setBreakModal(secondsBreak)}
          cancelBreakTimer={() => cancelBreakTimer()}
        />
      ) : null}
    </>
  );
};

export default App;
