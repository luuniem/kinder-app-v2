import React from "react";

const AdditionPointsUpdate = props => {
  const { additionPoints } = props;

  //Get Points from Firebase

  return (
    <>
      <h3>Points: {additionPoints}</h3>
    </>
  );
};

export default AdditionPointsUpdate;
