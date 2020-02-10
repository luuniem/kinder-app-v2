import React, { useState, useEffect } from "react";

const AdditionPointsUpdate = props => {
  const { additionPoints } = props;
  const [updatePoints, setUpdatePoints] = useState(0);
  //Get Points from Firebase
  //   const [totalPoints, setTotalPoints] = useState([]);

  //   useEffect(() => {
  //     Axios.get("https://emily-kinder-app.firebaseio.com/Points.json")
  //       .then(response => {
  //         setTotalPoints([response.data]);
  //         console.log(totalPoints);
  //       })

  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, []);

  //   const updatePointsHandler = () => {
  //     const updatedPoints = [];
  //     additionPoints.map(point => {
  //       updatedPoints.push(point);
  //     });

  return (
    <h3>
      {additionPoints.map(point => (
        <li>{point.total}</li>
      ))}
    </h3>
  );
};

export default AdditionPointsUpdate;
