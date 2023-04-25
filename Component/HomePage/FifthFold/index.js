import React from "react";
import Slider from "react-slick";
import { Card } from "./Card";
import Container from "Component/Base/Container";
import ArrowNext from "../../../static/svg/slider/ArrowNext";
import ArrowPrev from "../../../static/svg/slider/ArrowPrev";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="icon-prev">
        <ArrowNext width={"16.2px"} height={"16.2px"} pathcolor={"#fff"} />
      </div>
      <style>{`
          .icon-prev {
            width: 34px;
            height: 34px;
            background-color: transparent;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.5s;
          }
          .icon-prev:hover {
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.11);
            background-color: #fff;
          }
          .icon-prev:hover svg path {
           stroke: #004857;
          }
      `}</style>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="icon-right">
        <ArrowPrev width={"16.2px"} height={"16.2px"} pathcolor={"#fff"} />
      </div>
      <style>{`
          .icon-right {
            width: 34px;
            height: 34px;
            background-color: transparent;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.5s;
            
          }
          .icon-right:hover {
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.11);
            background-color: #fff;
          }
          .icon-right:hover svg path {
            stroke: #004857;
          }
      `}</style>
    </div>
  );
}

export const FifthFold = () => {
  const cardContent = [
    {
      img: "",
      title: "HealthCare",
      description:
        "Minimize your risk and minimize your potential to improve patient care.",
    },
    {
      img: "",
      title: "HealthCare",
      description:
        "Minimize your risk and minimize your potential to improve patient care.",
    },
    {
      img: "",
      title: "HealthCare",
      description:
        "Minimize your risk and minimize your potential to improve patient care.",
    },
    {
      img: "",
      title: "HealthCare",
      description:
        "Minimize your risk and minimize your potential to improve patient care.",
    },
    {
      img: "",
      title: "HealthCare",
      description:
        "Minimize your risk and minimize your potential to improve patient care.",
    },
    {
      img: "",
      title: "HealthCare",
      description:
        "Minimize your risk and minimize your potential to improve patient care.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="main">
        <Container>
          <div className="container">
            <div className="content">
              <span>We support your industry</span>
            </div>
            <Slider {...settings}>
              {cardContent.map((item, idx) => {
                return (
                  <div key={idx} className="card">
                    <Card content={item} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </Container>
      </div>
      <style jsx>{`
        .main {
          padding: 50px 50px 80px;
          background-color: #004857;
        }
        :global(.container .slick-next) {
          right: -30px;
          top: 120px;
          z-index: 1000;
        }
        :global(.container .slick-prev) {
          top: 120px;
          z-index: 1000;
        }
        :global(.container .slick-prev:before) {
          color: #004857;
        }
        :global(.container .slick-next:before) {
          color: #004857;
        }
        .content {
          padding: 30px 0px;
          font-size: 35px;
          color: #fff;
          font-family: math;
          width: 1200px;
        }
      `}</style>
    </>
  );
};
