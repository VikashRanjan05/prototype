import React from "react";
import bg from "../../../static/images/homepage/image(5).png";

export const Sixth = () => {
  return (
    <>
      <div className="main">
        <div className="top-section">
          <div className="content1">
            <li>
              <span className="lets-Bigin">Let's Begin</span>
            </li>
          </div>
          <div className="content2">What are you looking for</div>
        </div>
        <div className="card-section">
          <div className="card">
            <div className="image">
              <img src={bg.src} />
            </div>
            <div className="content">
              I want to find the{" "}
              <span className="card1">right testing type</span> for my product.
            </div>
            <div className="btn">Contact Us</div>
          </div>
          <div className="card">
            <div className="image">
              <img src={bg.src} />
            </div>
            <div className="content">
              I want <span className="card2">QA experts</span> to test my
              application.
            </div>
            <div className="btn">Contact Us</div>
          </div>
          <div className="card">
            <div className="image">
              <img src={bg.src} />
            </div>
            <div className="content">
              I'm looking for a{" "}
              <span className="card3">long-term testing partner.</span>
            </div>
            <div className="btn">Contact Us</div>
          </div>
          <div className="card">
            <div className="image">
              <img src={bg.src} />
            </div>
            <div className="content">
              I want to consult a <span className="card4">QA Specialist.</span>
            </div>
            <div className="btn">Contact Us</div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            padding: 50px 0px;
          }
          .card-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 0px;
          }
          .card {
            width: calc(25% - 40px);
            min-height: 400px;
            padding: 30px 20px;
            border: 1px solid #c2c2c2;
            border-radius: 50px;
            margin: 25px 0px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
          }
          img {
            height: 150px;
            width: 200px;
            overflow: hidden;
            border-radius: 20px;
          }
          li {
            text-align: center;
            font-size: 18px;
            font-family: "Poppins";
            font-weight: 400;
            color: #ff595a;
          }
          .lets-Bigin {
            margin-left: -10px;
          }
          .content {
            margin: 10px 0px;
            padding: 10px;
            font-size: 22px;
            text-align: center;
            font-family: math;
            line-height: 1.3;
            min-height: 110px;
            margin: 20px 0px;
          }
          .content2 {
            font-size: 38px;
            text-align: center;
            font-weight: 600;
            font-family: Poppins;
            letter-spacing: 2.1px;
            color: #0c0520;
          }
          .btn {
            height: 50px;
            width: auto;
            border: 1px solid #755fff;
            padding: 14px 25px;
            border-radius: 50px;
            font-size: 16px;
            font-family: "Roboto";
            text-align: center;
            cursor: pointer;
          }
          .btn:hover {
            background-color: #755fff;
            color: #fff;
            transition: 0.5s;
          }
          .card1,
          .card2,
          .card3,
          .card4 {
            font-weight: 900;
            color: #221763;
            text-decoration: underline;
            text-decoration-thickness: 2px;
            text-underline-position: under;
            font-size: 24px;
          }
          .card1 {
            text-decoration-color: #fdb321;
          }
          .card2 {
            text-decoration-color: #755fff;
          }
          .card3 {
            text-decoration-color: #ff5e5f;
          }
          .card4 {
            text-decoration-color: #21c0c0;
          }
        `}
      </style>
    </>
  );
};
