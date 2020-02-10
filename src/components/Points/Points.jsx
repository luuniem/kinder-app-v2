import React, { useState, useEffect } from "react";
import Axios from "axios";
import AdditionPointsUpdate from "./../Addition/AdditionPointsUpdate";

const Points = props => {
  const { additionPoints } = props;
  const [totalPoints, setTotalPoints] = useState([]);

  useEffect(() => {
    Axios.get("https://emily-kinder-app.firebaseio.com/Points.json")
      .then(response => {
        setTotalPoints([response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log("firebase : " + totalPoints);
  //   const updatedPoints = totalPoints.points + addPoints;
  //   console.log(updatedPoints);
  //   useEffect(() => {

  //     Axios.post("https://emily-kinder-app.firebaseio.com/Points.json", {
  //       total: 1
  //     }).catch(error => {
  //       console.log(error);
  //     });
  //   });

  // const updatePoints = () => {
  //   setTotalPoints(totalPoints + 1);
  // };

  return (
    <div>
      {/* <AdditionPointsUpdate updatedPoints={updatePoints} /> */}
      {additionPoints.map(point => (
        <h3>Addition Points: {point.total}</h3>
      ))}
    </div>
  );
};

export default Points;
