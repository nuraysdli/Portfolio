import React from "react";
import Button from "../button/Button";
import "./HeroWrap.css";

const HeroWrap = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-wrap">
          <h1>Present your business in a whole new way</h1>
          <p>
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit!
          </p>
          <div className="hero-btns">
            <Button className="started-btn">Get Started</Button>
            <Button className="learn-btn">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWrap;
