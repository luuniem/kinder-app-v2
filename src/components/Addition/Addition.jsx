import React, { useState, useEffect } from "react";
import "./Addition.scss";

import Points from "./../Points/Points";

const Addition = props => {
  const [firstNum, setFirstNum] = useState(Number);
  const [secondNum, setSecondNum] = useState(Number);
  const [answerNum, setAnswerNum] = useState("");
  const [result, setResult] = useState("");
  const [points, setPoints] = useState(0);

  const startAddHandler = () => {
    setFirstNum(Math.floor(Math.random() * 9 + 1));
    setSecondNum(Math.floor(Math.random() * 9 + 1));
  };

  const submitAdditionHandler = event => {
    event.preventDefault();
    const finalAnswer = secondNum + firstNum;
    const answer = parseInt(answerNum);

    if (answer === finalAnswer) {
      setResult("Correct");
      setPoints(points + 1);
      startAddHandler();
      setAnswerNum("");
    } else {
      setResult("Opps, Try Again!");
      setAnswerNum("");
      setPoints(points - 1);
    }
  };

  return (
    <div className="addition__container">
      <h1>This is Addition page</h1>
      <button onClick={startAddHandler}>Start</button>
      <form onSubmit={submitAdditionHandler}>
        <input value={firstNum} readOnly />
        <h3>+</h3>
        <input value={secondNum} readOnly />
        <h3>=</h3>
        <input
          type="text"
          value={answerNum}
          name={answerNum}
          onChange={event => {
            setAnswerNum(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>{result}</h1>
      <h1>Points: {points}</h1>
      <Points addPoints={points} />
    </div>
  );
};

export default Addition;
