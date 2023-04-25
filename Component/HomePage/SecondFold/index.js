import Card from "Component/Base/card";
import React from "react";

export const SecondFold = () => {
  const content = [
    {
      title: "Higher Quality",
      description:
        "Unmatched Quality consulting with aim to provide standard & custom test solutions",
    },
    {
      title: "Faster & Reliable, be your own competition",
      description: "Performance testing",
    },
  ];
  return (
    <>
      <div className="main">
        {content.map((item, idx) => {
          return (
            <div key={idx}>
              <Card title={item.title} description={item.description} />
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .main {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 25px 0px;
          }
        `}
      </style>
    </>
  );
};
