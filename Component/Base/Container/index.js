import React from "react";
import { size } from "../../../Constants/Layout/Size";

const Container = (props) => {
  return (
    <>
      <div className="main">{props.children}</div>
      <style jsx>
        {`
          .main {
            width: 1200px;
            padding-right: 7.5px;
            padding-left: 7.5px;
            margin: 0 auto;
          }
          @media (min-width: ${size.mobile}) {
            .main {
              max-width: 540px;
            }
          }
          @media (min-width: ${size.tablet}) {
            .main {
              max-width: 720px;
            }
          }
          @media (min-width: ${size.laptop}) {
            .main {
              max-width: 992px;
            }
          }
          @media (min-width: ${size.desktop}) {
            .main {
              max-width: 1200px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Container;
