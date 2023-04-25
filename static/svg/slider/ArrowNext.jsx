import React from "react";
import PropTypes from "prop-types";

const Icon = ({ width, height, pathcolor, viewbox, strokeWidth, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewbox}
      strokeWidth={strokeWidth}
    >
      <path
        d="M7.819 14.222l6.404-6.404L7.82 1.414"
        data-name="Path 4055"
        fill="transparent"
        stroke={pathcolor}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewbox: PropTypes.string,
  pathcolor: PropTypes.string
};

Icon.defaultProps = {
  width: "15.637px",
  height: "15.637px",
  viewbox: "0 0 15.637 15.637",
  pathcolor: "#04b3c0",
  strokeWidth: "2"
};

export default Icon;
