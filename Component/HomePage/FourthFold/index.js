import React from "react";
import Card from "./Card";

const FourthFold = () => {
  const cardsContent = [
    { img: "", title: "Functional Testing Services" },
    { img: "", title: "Automation Testing Services" },
    { img: "", title: "Performance Testing Services" },
    { img: "", title: "Security Testing Services" },
    { img: "", title: "Accessibility Testing Services" },
    { img: "", title: "Mobile Testing Services" },
  ];
  return (
    <>
      <div className="main">
        {cardsContent.map((item, idx) => {
          return (
            <div key={idx} className="card">
              <Card title={item.title} />
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1000px; /* or any other desired maximum width */
          margin: 0 auto; /* center the container horizontally */
          padding: 50px 0px;
        }
        .card {
          width: calc(33.33% - 40px);
          margin: 10px;
        }
      `}</style>
    </>
  );
};

export default FourthFold;
