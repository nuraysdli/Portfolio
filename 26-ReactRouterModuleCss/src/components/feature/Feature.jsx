import React from "react";
import "./Feature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faBuilding,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

const Feature = () => {
  const featureData = [
    {
      icon: faCreditCard,
      title: "Responsive",
      description:
        "Call to action Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime praesentium minima nobis eum laboriosam cupiditate, inventore beatae ex ducimus ipsumdelectus, a, sed eius!",
    },
    {
      icon: faBuilding,
      title: "Cross Platform",
      description:
        "Call to action Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime praesentium minima nobis eum laboriosam cupiditate, inventore beatae ex ducimus ipsumdelectus, a, sed eius!",
    },
    {
      icon: faSliders,
      title: "Fast Performance",
      description:
        "Call to action Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime praesentium minima nobis eum laboriosam cupiditate, inventore beatae ex ducimus ipsumdelectus, a, sed eius!",
    },
  ];
  return (
    <section id="feature">
      <div className="container">
        <div className="featured">
          {featureData.map((item, index) => (
            <div key={index} className="icon-box">
              <div className="icon">
                <FontAwesomeIcon
                  icon={item.icon}
                  size="3x"
                  className="icon-i"
                />
              </div>
              <h3>{item.title}</h3>
              <span>{item.description}</span>
              <br />
              <a href="">
                Call to action
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
