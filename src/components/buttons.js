import React from "react";

const buttons = (props) => {
  return (
    <div className={"buttons"}>
      <button type="button" onClick={props.toggleOnClick}>
        {props.value}
      </button>
      <button type="button" onClick={props.resetOnClick}>
        {"Reset"}
      </button>
    </div>
  );
};

export default buttons;
