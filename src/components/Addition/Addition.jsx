import React, { useState, useEffect } from "react";
import "./Addition.scss";
import Points from "./../Points/Points";
import frozenBg from "../../../src/images/frozen-bg.png";

const Addition = props => {
  const [firstNum, setFirstNum] = useState(Number);
  const [secondNum, setSecondNum] = useState(Number);
  const [answerNum, setAnswerNum] = useState("");
  const [correctResult, setCorrectResult] = useState("");
  const [wrongResult, setWrongResult] = useState("");

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
      setCorrectResult("Correct!");
      setPoints(points + 1);
      startAddHandler();
      setAnswerNum("");
    } else {
      setWrongResult("Opps, Try Again!");
      setAnswerNum("");
      setPoints(points - 1);
    }
  };

  const resetResult = () => {
    setTimeout(() => {
      setCorrectResult(" ");
      setWrongResult(" ");
    }, 500);
  };

  return (
    <div className="addition__container">
      <div className="addition__frame">
        <h1>Emily's Addition Challenge</h1>
        <button onClick={startAddHandler} className="start__button">
          START
        </button>
        <form onSubmit={submitAdditionHandler} className="add__form">
          <div className="input__container">
            <input value={firstNum} readOnly className="first__box boxes" />
            <h3>+</h3>
            <input value={secondNum} readOnly className="second__box boxes" />
            <h3>=</h3>
            <input
              onClick={resetResult}
              className="answer__box boxes"
              type="text"
              value={answerNum}
              name={answerNum}
              onChange={event => {
                setAnswerNum(event.target.value);
              }}
            />
          </div>
          <button type="submit" className="submit__button">
            ANSWER
          </button>
        </form>

        <h3>Points: {points}</h3>
        {/* <h1>{result}</h1>
        <h1>Points: {points}</h1> */}
        {/* <Points addPoints={points} /> */}
      </div>
      <h2 className="correct__result">{correctResult}</h2>

      <h2 className="wrong__result">{wrongResult}</h2>
      <div className="olof"></div>
      <div className="snow"></div>
    </div>
  );
};

export default Addition;
