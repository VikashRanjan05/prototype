import React from "react";
import bg from "../../../static/images/homepage/image.png";

const Card = (props) => {
  return (
    <>
      <div className="main">
        <div className="img-container">
          <img src={bg.src} />
        </div>
        <div className="content-container">
          <div className="heading">{props.title}</div>
          <div className="sub-heading">{props.description}</div>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            text-align: center;
            padding: 60px 30px;
            min-height: 375px;
          }
          .img-container {
            height: 100px;
            width: 100px;
            border-radius: 50%;
            overflow: hidden;
            margin: 20px 0px;
          }
          img {
            height: 100px;
            width: 100px;
          }
          .content-container {
            width: 416px;
          }
          .heading {
            font-size: 25px;
            font-family: "Roboto";
            margin-bottom: 10px;
            font-weight: 500;
          }
          .sub-heading {
            font-size: 20px;
            font-family: "Roboto";
            color: #636363;
            padding: 10px;
            letter-spacing: 2.1px;
          }
        `}
      </style>
    </>
  );
};

export default Card;
