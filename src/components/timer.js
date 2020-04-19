import React from "react";

const Timer = (props) => {
  return (
    <div>
      <h1>{props.value}</h1>
      <h2>{`${Math.floor(props.second / 60)
        .toString()
        .padStart(2, "0")}:${`${props.second % 60}`
        .toString()
        .padStart(2, "0")}`}</h2>
    </div>
  );
};

export default Timer;
