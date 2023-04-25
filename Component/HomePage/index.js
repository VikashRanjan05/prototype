import React from "react";
import { FirstFold } from "./FirstFold";
import { SecondFold } from "./SecondFold";
import ThirdFold from "./ThirdFold";
import Container from "Component/Base/Container";
import FourthFold from "./FourthFold";
import { Sixth } from "./SixthFold";
import { FifthFold } from "./FifthFold";

export const Homepage = () => {
  return (
    <>
      <div className="main">
        <Container>
          <FirstFold />
          <SecondFold />
          <ThirdFold />
          <FourthFold />
        </Container>
        <FifthFold />
        <Container>
          <Sixth />
        </Container>
      </div>

      <style jsx>
        {`
          .main {
          }
        `}
      </style>
    </>
  );
};
