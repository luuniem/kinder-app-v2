import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Addition.scss";
import Points from "./../Points/Points";
import frozenBg from "../../../src/images/frozen-bg.png";
import AdditionPointsUpdate from "./AdditionPointsUpdate";
import Axios from "axios";
import MathForm from "./../MathForm/MathForm";

const Addition = props => {
  //animations
  let trans1 = useRef(null);

  useEffect(() => {
    gsap.from([trans1], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.2
      }
    });
  }, [trans1]);
  //State hooks
  const mathOperator = "+";
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [answerNum, setAnswerNum] = useState("");
  const [correctResult, setCorrectResult] = useState("");
  const [wrongResult, setWrongResult] = useState("");
  const [additionPoints, setAdditionPoints] = useState([]);

  const startAddHandler = () => {
    setFirstNum(Math.floor(Math.random() * 9 + 1));
    setSecondNum(Math.floor(Math.random() * 9 + 1));
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    const finalAnswer = secondNum + firstNum;
    const answer = parseInt(answerNum);

    if (answer === finalAnswer) {
      setCorrectResult("Correct!");
      setAdditionPoints(prevAdditionPoints => [
        ...prevAdditionPoints,
        { total: 1 }
      ]);
      startAddHandler();
      setAnswerNum("");
    } else {
      setWrongResult("Opps, Try Again!");
      setAnswerNum("");
      setAdditionPoints(prevAdditionPoints => [
        ...prevAdditionPoints,
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
    <div className="addition__container">
      <div className="addition__frame">
        <h1 ref={el => (trans1 = el)}>Emily's Addition Challenge</h1>
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
            <Points additionPoints={additionPoints} />
          </ul>
        </h3>
      </div>
      <h2 className="correct__result">{correctResult}</h2>

      <h2 className="wrong__result">{wrongResult}</h2>
      <div className="olof"></div>
      <div className="snow"></div>
    </div>
  );
};

export default Addition;
