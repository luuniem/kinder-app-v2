import React, { useState, useEffect } from "react";
import "./Multiplication.scss";
// import Points from "./../Points/Points";
// import frozenBg from "../../../src/images/frozen-bg.png";
// import AdditionPointsUpdate from "./AdditionPointsUpdate";
import Axios from "axios";
import MathForm from "./../MathForm/MathForm";

const Multiplication = props => {
  //State hooks
  const mathOperator = "x";
  const [firstNum, setFirstNum] = useState(Number);
  const [secondNum, setSecondNum] = useState(Number);
  const [answerNum, setAnswerNum] = useState("");
  const [correctResult, setCorrectResult] = useState("");
  const [wrongResult, setWrongResult] = useState("");
  const [multiplyPoints, setMultiplyPoints] = useState([]);

  const startAddHandler = () => {
    setFirstNum(Math.floor(Math.random() * 2 + 1));
    setSecondNum(Math.floor(Math.random() * 9 + 1));
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    const finalAnswer = firstNum * secondNum;
    const answer = parseInt(answerNum);

    if (answer === finalAnswer) {
      setCorrectResult("Correct!");
      setMultiplyPoints(prevMultiplyPoints => [
        ...prevMultiplyPoints,
        { total: 1 }
      ]);
      startAddHandler();
      setAnswerNum("");
    } else {
      setWrongResult("Opps, Try Again!");
      setAnswerNum("");
      setMultiplyPoints(prevMultiplyPoints => [
        ...prevMultiplyPoints,
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
    <div className="multiply__container">
      <div className="multiply__frame">
        <h1>Emily's Multiplication Challenge</h1>
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

export default Multiplication;
