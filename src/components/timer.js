import React from "react";

const Timer = (props) => {
  return (
    <div className={"timer"}>
      <h2>{`${Math.floor(props.second / 60)
        .toString()
        .padStart(2, "0")}:${`${props.second % 60}`
        .toString()
        .padStart(2, "0")}`}</h2>
    </div>
  );
};

export default Timer;
