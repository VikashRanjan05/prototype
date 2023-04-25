import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [scrollbtn, setScrollbtn] = useState(false);
  const GoUp = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    if (window.pageYOffset >= 100) {
      setScrollbtn(true);
    } else {
      setScrollbtn(false);
    }
  };

  return (
    <>
      <div className="main">
        {scrollbtn ? (
          <div className="backtoTop" onClick={GoUp}>
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        ) : null}
        <div className="container">
          <div className="content"> Thank You</div>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            height: 70px;
            width: 100%;
            background: #000;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .content {
            font-size: 20px;
            font-weight: 500;
            font-family: "Roboto";
            letter-spacing: 2.1px;
          }
          :global(html) {
            scroll-behavior: smooth;
          }
          .backtoTop {
            width: 40px;
            height: 40px;
            position: fixed;
            bottom: 18px;
            right: 15px;
            text-decoration: none;
            background-color: #000;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.14),
              0 4px 8px rgba(0, 0, 0, 0.28);
            border-radius: 50%;
            cursor: pointer;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .backtoTop:focus,
          .backtoTop:active,
          .backtoTop:visited {
            outline: none;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
