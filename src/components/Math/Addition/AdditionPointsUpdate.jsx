import React, { useState, useEffect } from "react";
import Axios from "axios";

const AdditionPointsUpdate = props => {
  const { additionPoints } = props;
  const [updatePoints, setUpdatePoints] = useState(0);
  //Get Points from Firebase
  const [totalPoints, setTotalPoints] = useState([]);

  return (
    <>
      <h3>{additionPoints}</h3>
    </>
  );
};

export default AdditionPointsUpdate;
