import React, { useState, useEffect } from "react";
import Button from "../Base/Button";
import Container from "Component/Base/Container";

const Header = () => {
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
  return (
    <>
      <div className={shadow ? "header shadow" : "header"}>
        <Container>
          <div className="main">
            <div className="logo">
              <Button color="#2d9bf0" fontWeight={"500"}>
                Your Logo
              </Button>
            </div>
            <div className="menu">
              <ul>
                <li>Services</li>
                <li>About Us</li>
                <li>Join Us</li>
                <li>
                  <Button backgroudColor={"#000"} color={"#fff"}>
                    Get a Quote !
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <style jsx>
        {`
          .header {
            position: sticky;
            top: 0;
            z-index: 10;
            background: #fff;
          }
          .shadow {
            background: #fff;
            -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
            -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
            box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
            transition: 0.4s;
          }
          .main {
            height: 70px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          ul {
            list-style: none;
          }
          li {
            display: inline-block;
            font-family: "Poppins";
            font-weight: 500;
            margin: 0px 20px;
            cursor: pointer;
          }
          li:hover {
            letter-spacing: 1.1;
          }
        `}
      </style>
    </>
  );
};

export default Header;
