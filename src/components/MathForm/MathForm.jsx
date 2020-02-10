import React from "react";

const MathForm = props => {
  const {
    onSubmit,
    firstNum,
    secondNum,
    resetResult,
    answerNum,
    onChange,
    mathOperator
  } = props;
  return (
    <form onSubmit={onSubmit} className="add__form">
      <div className="input__container">
        <input value={firstNum} readOnly className="first__box boxes" />
        <h3>{mathOperator}</h3>
        <input value={secondNum} readOnly className="second__box boxes" />
        <h3>=</h3>
        <input
          onClick={resetResult}
          className="answer__box boxes"
          type="text"
          value={answerNum}
          name={answerNum}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="submit__button">
        ANSWER
      </button>
    </form>
  );
};

export default MathForm;
