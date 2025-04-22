import React from "react";
import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonial = () => {
  const testimonyBox = [
    {
      description:
        "Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
      comment: "- Client Name, Location",
    },
    {
      description:
        "The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!",
      comment: "- Client Name, Location",
    },
  ];

  return (
    <section id="testimonial">
      <div className="container">
        <div className="testimonial">
          <h2>Pay as you grow</h2>
          <p className="text">With our no hassle pricing plans</p>
          <div className="comment-box">
            {testimonyBox.map((item, index) => (
              <div key={index} className="comment">
                <div className="comment-content">
                  <FontAwesomeIcon icon="fa-solid fa-quote-left" />
                  <div className="comment-content">
                    <p className="desc">{item.description}</p>
                    <p className="person">{item.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
