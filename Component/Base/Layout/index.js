import React from "react";
import Header from "../../Header";
import Footer from "Component/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
