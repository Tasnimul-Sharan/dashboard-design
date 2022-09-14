import React from "react";
import Footer from "../../Shared/Footer";
import About from "./About";
import Banner from "./Banner";
import Bussness from "./Bussness";
import Contract from "./Contract";
import Services from "./Services";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      {/* <About /> */}
      <Services />
      <Bussness />
      <Contract />
      <Footer />
    </div>
  );
};

export default LandingPage;
