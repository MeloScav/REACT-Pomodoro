import React from "react";
import { createPortal } from "react-dom";

const BreakModal = () => {
  return createPortal(
    <div>
      <h1>{"hello"}</h1>
    </div>,
    document.querySelector("#break-modal")
  );
};

export default BreakModal;
