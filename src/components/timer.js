import React from "react";
import AddButtonSVG from "./SVG/add-button-svg";
import MinusButtonSVG from "./SVG/minus-button-svg";

const Timer = (props) => {
  return (
    <div className={"timer"}>
      <button type="button" onClick={props.addOnClick}>
        <AddButtonSVG />
      </button>
      <h2>{`${Math.floor(props.second / 60)
        .toString()
        .padStart(2, "0")}:${`${props.second % 60}`
        .toString()
        .padStart(2, "0")}`}</h2>
      <button type="button" onClick={props.substractionOnClick}>
        <MinusButtonSVG />
      </button>
    </div>
  );
};

export default Timer;
