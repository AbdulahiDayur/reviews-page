import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  return (
    <section className="title">
      <div>
        <h1>Our Reviews</h1>
        <div className="underline"></div>
      </div>
      <article className="container">
        {people.map((person) => {
          const { id, name, job, image, text } = person;
          return (
            <div key={id} className="review">
              <div className="img-container ">
                <img className="person-img" src={image} alt={name} />
                <div className="quote-icon">
                  <FaQuoteRight />
                </div>
              </div>
              <div>
                <h4 className="author">{name}</h4>
                <h4 className="job">{job}</h4>
              </div>
              <footer>
                <p className="info">{text}</p>
                <div>
                  <FaChevronLeft className="prev-btn" />
                  <FaChevronRight className="next-btn" />
                </div>
                <button className="random-btn">Surprise Me</button>
              </footer>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Review;
