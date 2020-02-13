import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Addition.scss";
import Points from "../../Points/Points";
import AdditionPointsUpdate from "./AdditionPointsUpdate";
import Axios from "axios";
import MathForm from "../../MathForm/MathForm";
import { TapTarget } from "materialize-css";

const Addition = props => {
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
  const mathOperator = "+";
  const [firstNum, setFirstNum] = useState(undefined);
  const [secondNum, setSecondNum] = useState(undefined);
  const [answerNum, setAnswerNum] = useState("");
  const [correctResult, setCorrectResult] = useState("");
  const [wrongResult, setWrongResult] = useState("");
  // const [additionPoints, setAdditionPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState([]);

  const startAddHandler = () => {
    setFirstNum(Math.floor(Math.random() * 9 + 1));
    setSecondNum(Math.floor(Math.random() * 9 + 1));
  };

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

  const onSubmitHandler = async event => {
    event.preventDefault();
    const finalAnswer = secondNum + firstNum;
    const answer = parseInt(answerNum);

    if (answer === finalAnswer) {
      setCorrectResult("Correct!");
      // setAdditionPoints(additionPoints + 1);
      setTotalPoints({ total: totalPoints.total + 1 });

      startAddHandler();
      setAnswerNum("");
    } else {
      setWrongResult("Opps, Try Again!");
      setAnswerNum("");
      // setAdditionPoints(additionPoints - 1);
      setTotalPoints({ total: totalPoints.total - 1 });
    }
    console.log(totalPoints);

    await Axios.put(
      "https://emily-kinder-app.firebaseio.com/Points.json",
      totalPoints
    );
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

        <AdditionPointsUpdate additionPoints={totalPoints.total} />
      </div>
      <h2 className="correct__result">{correctResult}</h2>

      <h2 className="wrong__result">{wrongResult}</h2>
      <div className="olof"></div>
      <div className="snow"></div>
    </div>
  );
};

export default Addition;
