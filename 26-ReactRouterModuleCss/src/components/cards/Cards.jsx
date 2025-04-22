import React from "react";
import Button from "../button/Button";
import "./Cards.css";

const Cards = () => {
  const cardsData = [
    {
      title: "Free",
      price: "$0",
      listTitle: " 1 users",
    },
    {
      title: " Pro",
      price: "$49",
      listTitle: " 5 users",
    },
    {
      title: "Enterprise",
      price: "$9",
      listTitle: " Unlimited users",
    },
  ];
  return (
    <section id="cardhero">
      <div className="container">
        <div className="cards-hero">
          <h2>Pay as you grow</h2>
          <p className="text">With our no hassle pricing plans</p>
          <div className="card">
            {cardsData.map((item, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <p className="title">{item.title}</p>
                  <h1 className="price">{item.price}</h1>
                  <ul className="card-list">
                    <li> {item.listTitle}</li>
                    <li> 5GB storage</li>
                    <li>Unlimited public projects</li>
                    <li>Community access</li>
                    <li>Unlimited private projects</li>
                    <li> Dedicated support</li>
                    <li>Free linked domain</li>
                    <li> Monthly status reports</li>
                  </ul>
                  <Button className="plan-btn">Choose Plan</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
