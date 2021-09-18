import React, { useEffect, useState } from "react";
import Question from './Questions';

import data from "./data.js";
import "./local.css";

const Accordion = () => {
  const [questions, setquestions] = useState([]);
  useEffect(()=>{
    setquestions(data)
  },[])
  return (
    <main>
      <div className="containerian">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}/>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Accordion;
