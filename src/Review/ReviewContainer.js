import React from "react";

import Review from "./Review";

const ReviewContainer = () => {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2> تیم ما</h2>
            <div className='under-line'></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  );
};

export default ReviewContainer;
