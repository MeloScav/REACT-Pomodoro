import React from "react";

const buttons = (props) => {
  return (
    <div>
      <button type="button" onClick={props.addOnClick}>
        {"+"}
      </button>
      <button type="button">{"Start"}</button>
      <button type="button" onClick={props.resetOnClick}>
        {"Reset"}
      </button>
      <button type="button" onClick={props.substractionOnClick}>
        {"-"}
      </button>
    </div>
  );
};

export default buttons;
