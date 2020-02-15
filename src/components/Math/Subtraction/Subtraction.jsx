import React, { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";

import "./Subtraction.scss";
import SubtractionPointsUpdate from "./SubtractionPointsUpdate";
import Axios from "axios";
import MathForm from "../../MathForm/MathForm";

const Subtraction = props => {
  //animations
  let trans1 = useRef(null);

  useEffect(() => {
    gsap.from([trans1], 0.8, {
      delay: 0,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.2
      }
    });
  }, [trans1]);
  //State hooks
  const mathOperator = "-";
  const [firstNum, setFirstNum] = useState(undefined);
  const [secondNum, setSecondNum] = useState(undefined);
  const [answerNum, setAnswerNum] = useState("");
  const [correctResult, setCorrectResult] = useState("");
  const [wrongResult, setWrongResult] = useState("");
  const [totalPoints, setTotalPoints] = useState([]);

  //get poitns from firebase
  useEffect(() => {
    Axios.get("https://emily-kinder-app.firebaseio.com/Points.json")
      .then(response => {
        setTotalPoints(response.data);
      })

      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(totalPoints);

  const startAddHandler = () => {
    setFirstNum(Math.floor(Math.random() * 9 + 1));
    setSecondNum(Math.floor(Math.random() * 9 + 1));
  };
  if (firstNum < secondNum) {
    return startAddHandler();
  }

  const onSubmitHandler = async event => {
    event.preventDefault();
    const finalAnswer = firstNum - secondNum;
    const answer = parseInt(answerNum);

    if (answer === finalAnswer) {
      setCorrectResult("Correct!");
      const updatePoints = { total: totalPoints.total + 1 };
      await Axios.put(
        "https://emily-kinder-app.firebaseio.com/Points.json",
        updatePoints
      );
      setTotalPoints({ total: totalPoints.total + 1 });
      startAddHandler();
      setAnswerNum("");
    } else {
      setWrongResult("Opps, Try Again!");
      const updatePoints = { total: totalPoints.total - 1 };
      await Axios.put(
        "https://emily-kinder-app.firebaseio.com/Points.json",
        updatePoints
      );
      setAnswerNum("");

      setTotalPoints({ total: totalPoints.total - 1 });
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
        <h1 ref={el => (trans1 = el)}>Emily's Subtraction Challenge</h1>
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

        <SubtractionPointsUpdate subtractionPoints={totalPoints.total} />
      </div>
      <h2 className="correct__result">{correctResult}</h2>

      <h2 className="wrong__result">{wrongResult}</h2>
    </div>
  );
};

export default Subtraction;
