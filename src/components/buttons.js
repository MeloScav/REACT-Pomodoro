import React from "react";
import ResetButtonSVG from "./SVG/reset-button-svg";

const buttons = (props) => {
  return (
    <div className={"buttons"}>
      <button type="button" onClick={props.toggleOnClick}>
        {props.svg} {props.value}
      </button>
      <button type="button" onClick={props.resetOnClick}>
        <ResetButtonSVG /> {"Reset"}
      </button>
    </div>
  );
};

export default buttons;
