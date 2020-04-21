import React from "react";
import DownArrowSVG from "./SVG/down-arrow-svg";
import UpArrowSVG from "./SVG/up-arrow-svg";

const Timer = (props) => {
  return (
    <div className={"timer"}>
      <button type="button" onClick={props.addOnClick}>
        <UpArrowSVG />
      </button>
      <h2>{`${Math.floor(props.second / 60)
        .toString()
        .padStart(2, "0")}:${`${props.second % 60}`
        .toString()
        .padStart(2, "0")}`}</h2>
      <button type="button" onClick={props.substractionOnClick}>
        <DownArrowSVG />
      </button>
    </div>
  );
};

export default Timer;
