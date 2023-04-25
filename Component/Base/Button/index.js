import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="btn">{props.children}</button>
      <style jsx>
        {`
          .btn {
            padding: ${props.padding ? props.padding : "10px 18px"};
            border-radius: 5px;
            background-color: ${props.backgroudColor};
            color: ${props.color};
            font-weight: ${props.fontWeight ? props.fontWeight : "100"};
            letter-spacing: ${props.letterSpacing ? props.letterSpacing : ""};
            height: ${props.height};
            width: ${props.width};
            font-size: 14px;
            font-family: roboto;
            cursor: pointer;
            box-sizing: border-box;
            transition: 0.5s;
            border: none;
            outline: none;
          }
        `}
      </style>
    </>
  );
};

export default Button;
