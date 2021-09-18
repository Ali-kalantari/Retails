import React, { useState } from "react";

const Question = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={showInfo ? 'question active' : 'question'}>
      <header>
        <h4>{props.title}</h4>
        <span className="btn-acc" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <button className='btn-c'>-</button> : <button className='btn-c'>+</button>}
        </span>
      </header>
      {/* {showInfo && <p>{props.info}</p>} */}
      <p className={showInfo?'question-p active' : 'question-p'}>{props.info}</p>
    </article>
  );
};

export default Question;
