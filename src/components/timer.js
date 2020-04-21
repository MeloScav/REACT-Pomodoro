import React from "react";

const Timer = (props) => {
  return (
    <div className={"timer"}>
      <button type="button" onClick={props.addOnClick}>
        {"+"}
      </button>
      <h2>{`${Math.floor(props.second / 60)
        .toString()
        .padStart(2, "0")}:${`${props.second % 60}`
        .toString()
        .padStart(2, "0")}`}</h2>
      <button type="button" onClick={props.substractionOnClick}>
        {"-"}
      </button>
    </div>
  );
};

export default Timer;
