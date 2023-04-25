import React from "react";
import Button from "../../Base/Button";
import bg from "../../../static/images/homepage/homepageFirstFold.png";

export const FirstFold = () => {
  return (
    <>
      <div className="main">
        {/* <div className="invisible"></div> */}
        <div className="img-container">
          <div className="img">{/* <img src={bg.src} /> */}</div>
        </div>

        <div className="content-container">
          <div className="headline">
            Revolutionizing Software Testing with Our Cutting-Edge Solution
          </div>
          <div className="subline">
            We are a next gen software testing company.
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
            .main{
                width auto;
                position:relative;
                padding: 50px 0px 100px;
            }
            .img-container{
                position: absolute;
                bottom: 0;
                float: right;
                width: 100%;
                background: #fff;
            }
            // .invisible{
            //     position: absolute;
            //     top: 0;
            //     width: -webkit-fill-available;
            //     height: 166px;
            //     background: #ececec;
            //     z-index: -1;
            // }
            .img{
                position: absolute;
                bottom: 0;
                right: 0;
                height: 350px;
                width: 640px;
                overflow: hidden;
                background-image: url(${bg.src});
                background-size: cover;
            }
            .content-container{
                test-align: left;
                width:410px;
            }
            .headline{
               font-size: 55px;
                font-weight: 600;
                font-family: 'Roboto';
                padding: 20px 0px;
                text-transform: capitalize;
                letter-spacing:2.5px;
                letter-spacing: 2.5px;
            }
            .subline{
                font-size: 25px;
                font-family: Roboto;
                color:#636363;
                margin:20px 0px;
            }
            .btn{
                margin-top:40px;
            }
        `}
      </style>
    </>
  );
};
