import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [myNum, setMyNum] = useState(0);
  const { id, name, job, image, text } = people[myNum];

  function handleRigtClick() {
    if (myNum < people.length - 1) {
      setMyNum(myNum + 1);
    } else {
      setMyNum(0);
    }
  }

  function handleLeftClick() {
    if (myNum === 0) {
      setMyNum(people.length - 1);
    } else {
      setMyNum(myNum - 1);
    }
  }

  function handleRandom() {
    let randomNum = Math.floor(Math.random() * people.length);
    // console.log(randomNum);
    setMyNum(randomNum);
  }

  return (
    <article className="review">
      <div className="img-container ">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div>
        <h4 className="author">{name}</h4>
        <h4 className="job">{job}</h4>
        <p className="info">{text}</p>
      </div>
      <>
        <div>
          <FaChevronLeft className="prev-btn" onClick={handleLeftClick} />
          <FaChevronRight className="next-btn" onClick={handleRigtClick} />
        </div>
        <button className="random-btn" onClick={handleRandom}>
          Surprise Me
        </button>
      </>
    </article>
  );
};

export default Review;
