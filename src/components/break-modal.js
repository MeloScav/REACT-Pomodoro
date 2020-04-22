import React, { useState } from "react";
import { createPortal } from "react-dom";
import AddButtonSVG from "./SVG/add-button-svg";
import MinusButtonSVG from "./SVG/minus-button-svg";

const BreakModal = (props) => {
  const [secondsBreak, setSecondsBreak] = useState(60 * props.secondsB);

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
    <div className={"break-container"}>
      <h1>{props.value}</h1>
      <div className={"break-timer"}>
        <button
          type="button"
          onClick={() => {
            incrementSeconds();
          }}
        >
          <AddButtonSVG />
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
          <MinusButtonSVG />
        </button>
      </div>
      <div className={"modal-buttons"}>
        <button type="button" onClick={() => props.setBreakTimer(secondsBreak)}>
          {"Ok"}
        </button>
        <button type="button" onClick={() => props.cancelBreakTimer()}>
          {"No thanks"}
        </button>
      </div>
    </div>,
    document.querySelector("#break-modal")
  );
};

export default BreakModal;
