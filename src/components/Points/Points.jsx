import React, { useState, useEffect } from "react";
import Axios from "axios";
const Points = props => {
  const { addPoints } = props;
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
  console.log(totalPoints[0]);

  console.log(addPoints);
  //   const updatedPoints = totalPoints.points + addPoints;
  //   console.log(updatedPoints);
  //   useEffect(() => {

  //     Axios.post("https://emily-kinder-app.firebaseio.com/Points.json", {
  //       total: 1
  //     }).catch(error => {
  //       console.log(error);
  //     });
  //   });

  return (
    <div>
      <h1>
        Total Points:{" "}
        <ul>
          {totalPoints.map(point => (
            <li key={point.id}>{point.total}</li>
          ))}
        </ul>
      </h1>
    </div>
  );
};

export default Points;
