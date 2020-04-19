import React, { useState } from "react";
import { createPortal } from "react-dom";

const BreakModal = (props) => {
  const [secondsBreak, setSecondsBreak] = useState(60 * 0.2);

  // INCREMENTATION
  const incrementSeconds = () => {
    setSecondsBreak(secondsBreak + 60);
  };

  // DECREMENTATION
  const decrementSeconds = () => {
    if (secondsBreak > 60) {
      setSecondsBreak(secondsBreak - 60);
    }
  };

  return createPortal(
    <>
      <h1>{"Take a break"}</h1>
      <div className={"break-timer"}>
        <button
          type="button"
          onClick={() => {
            incrementSeconds();
          }}
        >
          {"+"}
        </button>
        <h2>{`${Math.floor(secondsBreak / 60)
          .toString()
          .padStart(2, "0")}:${`${secondsBreak % 60}`
          .toString()
          .padStart(2, "0")}`}</h2>

        <button
          type="button"
          onClick={() => {
            decrementSeconds();
          }}
        >
          {"-"}
        </button>
      </div>
      <div>
        <button type="button" onClick={() => props.setBreakTimer(secondsBreak)}>
          {"Ok"}
        </button>
        <button type="button" onClick={() => props.cancelBreakTimer()}>
          {"No thanks"}
        </button>
      </div>
    </>,
    document.querySelector("#break-modal")
  );
};

export default BreakModal;
