import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Points.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../../../node_modules/materialize-css/dist/js/materialize.min.js";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
// import AdditionPointsUpdate from "./../Math/Addition/AdditionPointsUpdate";
import AdditionPointsUpdate from "./../Math/Addition/AdditionPointsUpdate";
import Modal from "./../../components/Modal";
const Points = props => {
  const { updatePoints } = props;
  const [totalPoints, setTotalPoints] = useState([]);

  const prizes = [
    {
      name: "1 Sticker",
      image: "mickeySticker.jpg",
      points: 10,
      description: ""
    },
    {
      name: "1 Ice-Cream Sandwich",
      image: "icecream.png",
      points: 10,
      description: ""
    },
    {
      name: "1 Hour YouTube",
      image: "youtube.png",
      points: 15,
      description: ""
    },
    {
      name: "1 Happy Meal",
      image: "happyMeal.jpeg",
      points: 15,
      description: ""
    },
    {
      name: "Paint model",
      image: "paintModel.jpg",
      points: 20,
      description: ""
    },
    {
      name: "Paint canvas",
      image: "paintCanvas.webp",
      points: 20,
      description: ""
    },
    {
      name: "Extra Paint",
      image: "extraPaint.jpeg",
      points: 20,
      description: ""
    },
    {
      name: "Dizzy Castle",
      image: "dizzyCastle.jpg",
      points: 30,
      description: ""
    },
    {
      name: "Disney World",
      image: "disneyworld.jpeg",
      points: 2000,
      description: ""
    }
  ];
  console.log(prizes.name);
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

  // const [errorMessage, setErrorMessage] = useState(false);
  const subtractPointsHandler = point => {
    if (totalPoints.total > point) {
      setTotalPoints({ total: totalPoints.total - point });
      console.log(totalPoints);
      setOpen(false);
    } else {
      // setErrorMessage(true);
      setOpen(true);
    }
  };

  const [open, setOpen] = useState(false);

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      {/* modal error */}
      <Dialog
        open={open}
        onClose={closeHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Sorry Emily!!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You don't have enough points to use on this prize yet. Please try
            another prize.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      {/* end modal */}
      <h2>Your Points: {totalPoints.total}</h2>
      <div className="points__card__container">
        {prizes.map(card => (
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src={require("../../images/mickeySticker.jpg")}
                alt=""
              />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {card.name}
                <i className="material-icons right">
                  {card.points}
                  <img
                    className="activator point_image"
                    src={require("../../images/points.png")}
                  />
                </i>
              </span>

              <Modal
                totalPoints={totalPoints.total}
                points={card.points}
                name={card.name}
                subtractPoints={() => subtractPointsHandler(card.points)}
                subtractedPoints={totalPoints}
              />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                {card.name}
                <i className="material-icons right">close</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Points;
