import React from "react";
import bg from "../../../static/images/homepage/image(5).png";
import Button from "Component/Base/Button";
const ThirdFold = () => {
  return (
    <>
      <div className="main">
        <div className="image-container">
          <img src={bg.src} />
        </div>
        <div className="content-container">
          <div className="heading">Big company announcement</div>
          <div className="sub-heading">
            Big company announcement or simple sub-header taking two or more
            lines.
          </div>
          <div className="btn">
            <Button
              backgroudColor={"#000"}
              color={"#fff"}
              fontWeight={500}
              letterSpacing={"1.5px"}
              padding={"15px 25px"}
            >
              Get a Quote !!
            </Button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            max-height: 500px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 50px 0px;
          }
          .image-container {
            heigth: auto;
          }
          .content-container {
            margin-left: 130px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            height: 400px;
            width: 420px;
            padding: 10px 0px;
          }
          .heading {
            font-size: 65px;
            font-family: math;
            font-weight: 600;
            padding: 15px 0px;
          }
          .sub-heading {
            font-size: 20px;
            font-weight: 500;
            font-family: "Poppins";
            color: #636363;
            padding: 10px 0px;
          }
          .btn {
            padding: 25px 0px;
          }
          img {
            height: 400px;
          }
        `}
      </style>
    </>
  );
};

export default ThirdFold;
