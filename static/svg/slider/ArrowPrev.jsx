import React from "react";
import PropTypes from "prop-types";

const Icon = ({ width, height, pathcolor, viewbox, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewbox}
    >
      <path
        d="M7.818 14.223L1.414 7.82l6.404-6.404"
        data-name="Path 4093"
        fill="transparent"
        stroke={pathcolor}
        strokeLinecap="round"
        strokeWidth={2}
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
  pathcolor: "#04b3c0"
};

export default Icon;
