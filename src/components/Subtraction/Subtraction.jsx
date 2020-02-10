import React, { useState, useEffect } from "react";
import "./Subtraction.scss";
// import Points from "./../Points/Points";
// import frozenBg from "../../../src/images/frozen-bg.png";
// import AdditionPointsUpdate from "./AdditionPointsUpdate";
import Axios from "axios";
import MathForm from "./../MathForm/MathForm";

const Subtraction = props => {
  //State hooks
  const mathOperator = "-";
  const [firstNum, setFirstNum] = useState(Number);
  const [secondNum, setSecondNum] = useState(Number);
  const [answerNum, setAnswerNum] = useState("");
  const [correctResult, setCorrectResult] = useState("");
  const [wrongResult, setWrongResult] = useState("");
  const [subtractionPoints, setSubtractionPoints] = useState([]);

  const startAddHandler = () => {
    setFirstNum(Math.floor(Math.random() * 9 + 1));
    setSecondNum(Math.floor(Math.random() * 9 + 1));
  };
  if (firstNum < secondNum) {
    return startAddHandler();
  }

  const onSubmitHandler = event => {
    event.preventDefault();
    const finalAnswer = firstNum - secondNum;
    const answer = parseInt(answerNum);

    if (answer === finalAnswer) {
      setCorrectResult("Correct!");
      setSubtractionPoints(prevSubtractionPoints => [
        ...prevSubtractionPoints,
        { total: 1 }
      ]);
      startAddHandler();
      setAnswerNum("");
    } else {
      setWrongResult("Opps, Try Again!");
      setAnswerNum("");
      setSubtractionPoints(prevSubtractionPoints => [
        ...prevSubtractionPoints,
        { total: -1 }
      ]);
    }
  };

  //reset right wrong messages
  const resetResult = () => {
    setTimeout(() => {
      setCorrectResult(" ");
      setWrongResult(" ");
    }, 500);
  };

  return (
    <div className="subtraction__container">
      <div className="subtraction__frame">
        <h1>Emily's Subtraction Challenge</h1>
        <button onClick={startAddHandler} className="start__button">
          START
        </button>
        <MathForm
          onSubmit={onSubmitHandler}
          firstNum={firstNum}
          secondNum={secondNum}
          resetResult={resetResult}
          answerNum={answerNum}
          onChange={event => setAnswerNum(event.target.value)}
          mathOperator={mathOperator}
        />
        <h3>
          <ul>
            Total Points:{" "}
            {/* <AdditionPointsUpdate additionPoints={additionPoints} /> */}
            {/* <Points additionPoints = {additionPoints}/> */}
          </ul>
        </h3>
      </div>
      <h2 className="correct__result">{correctResult}</h2>

      <h2 className="wrong__result">{wrongResult}</h2>
      {/* <div className="olof"></div>
      <div className="snow"></div> */}
    </div>
  );
};

export default Subtraction;
