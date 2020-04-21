import React from "react";

const addButton = {
  width: "35px",
  height: "35px",
};

const AddButtonSVG = () => {
  return (
    <div>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 357 357"
        style={addButton}
      >
        <g>
          <g id="add">
            <path
              fill="#fff"
              d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AddButtonSVG;
