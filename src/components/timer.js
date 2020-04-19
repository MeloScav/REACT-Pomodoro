import React from "react";

const Timer = (props) => {
  return (
    <div>
      <h1>{`${Math.floor(props.second / 60)
        .toString()
        .padStart(2, "0")}:${`${props.second % 60}`
        .toString()
        .padStart(2, "0")}`}</h1>
    </div>
  );
};

export default Timer;
