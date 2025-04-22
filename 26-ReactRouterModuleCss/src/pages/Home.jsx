import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroWrap from "../components/hero/HeroWrap";
import Feature from "../components/feature/Feature";
import Cards from "../components/cards/Cards";
import Testimonial from "../components/testimonial/Testimonial";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroWrap />
      <Feature />
      <Cards />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
