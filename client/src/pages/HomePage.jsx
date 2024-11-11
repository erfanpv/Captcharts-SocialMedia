import React from "react";
import Banner from "../componetns/features/Banner/Banner";
import About from "../componetns/features/About/About";
import Explore from "../componetns/features/Explore/Explore";
import Gallery from "../componetns/features/Gallery/Gallery";
import Event from "../componetns/features/Event/Event";
import Footer from "../componetns/features/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Explore />
      <Gallery />
      <Event />
      <Footer />
    </div>
  );
};

export default HomePage;
