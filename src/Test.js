import React, { useState, useEffect } from "react";

const Test = () => {
  const [counter, setcounter] = useState(0);
  const [show, setshow] = useState(true);
  const [name, setname] = useState("ali");

  useEffect(() => {
    console.log("First Render = Did Mount");
  }, []);
  useEffect(() => {
    console.log("counter updated = Did Update");
  }, [counter, show, name]);

  useEffect(() => {
    return () => {
      console.log("will un mount");
    };
  }, []);

  const SetName = () => {
    setname(name.concat("kalantari"));
  };
  return (
    <div className="test-container">
      <div className="test-wraper"></div>
      <h1>{counter}</h1>
      <h1>{show ? "true" : "false"}</h1>
      <h3>{name}</h3>

      <button onClick={() => setcounter(counter + 1)}>increment</button>
      <button onClick={() => setshow(!show)}>toggle</button>
      <button onClick={SetName}>concat</button>
    </div>
  );
};

export default Test;
