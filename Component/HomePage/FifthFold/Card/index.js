import React from "react";
import bg from "../../../../static/images/homepage/image(5).png";

export const Card = (props) => {
  const { title, description } = props.content;
  return (
    <>
      <div className="main">
        <div className="card-container">
          <div className="img-container">
            <img src={bg.src} />
          </div>
          <div className="contentContainer">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .main {
          max-height: 400px;
          padding: 40px 0px;
          background-color: #dadde1;
          margin: 25px 0px;
          box-sizing: border-box;
          margin: 0px 25px;
        }
        .card-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 0px 30px;
        }
        .img-container {
          height: 140px;
          width: 140px;
          border-radius: 50%;
          overflow: hidden;
        }
        img {
          height: 140px;
          width: 140px;
        }
        .title {
          font-size: 20px;
          padding: 15px 0px;
          font-family: math;
          font-weight: 600;
          letter-spacing: 1.8px;
          color: #004857;
          cursor: pointer;
        }
        .description {
          font-size: 11px;
          font-family: Poppins;
          color: #004857;
        }
      `}</style>
    </>
  );
};
