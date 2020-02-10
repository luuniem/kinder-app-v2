import React from "react";
import Points from "./Points";

const PointsContainer = props => {
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

  return <div></div>;
};

export default PointsContainer;
