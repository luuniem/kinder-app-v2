import React, { useState, useEffect } from "react";
import Axios from "axios";

const AdditionPointsUpdate = props => {
  const { additionPoints } = props;
  const [updatePoints, setUpdatePoints] = useState(0);
  //Get Points from Firebase
  const [totalPoints, setTotalPoints] = useState([]);

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

  // const updatePointsHandler = () => {
  //   const updatedPoints = [];
  //   additionPoints.map(point => {
  //     updatedPoints.push(point);
  //   });

  return (
    <>
      <h3>Points: {additionPoints}</h3>
      {/* {totalPoints.map(point => {
        return <p>{point}</p>;
      })} */}
      <h4>{totalPoints.total}</h4>
    </>
  );
};

export default AdditionPointsUpdate;
