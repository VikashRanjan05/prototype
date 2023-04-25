import React from "react";
import bg from "../../../../static/images/homepage/image.png";
import showmore from "../../../../static/images/homepage/image6.png";

const Card = (props) => {
  return (
    <>
      <div className="main">
        <div className="card-container">
          <div className="image-container">
            <img src={bg.src} />
          </div>
          <div className="content">{props.title}</div>
          <div className="view-more-container">
            <img src={showmore.src} className="view-more" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            max-height: 400px;
            padding: 50px 0px;
            border: 1px solid #c2c2c2;
            border-radius: 50px;
            margin: 25px 0px;
            box-sizing: border-box;
          }
          .card-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 0px 30px;
          }
          .img-container {
            height: 150px;
            width: 100px;
            border-radius: 50%;
            overflow: hidden;
            margin: 20px 0px;
          }
          .content {
            font-size: 22px;
            text-align: center;
            font-family: "Poppins";
            font-weight: 500;
            margin: 40px 0px;
            color: #636363;
          }
          img {
            height: 100px;
            width: 100px;
          }
          .view-more-container:hover {
            padding-top: 10px;
            transition: 0.5s;
            box-sizing: border-box;
          }
          .view-more {
            height: 50px;
            width: 50px;
            overflow: hidden;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default Card;
