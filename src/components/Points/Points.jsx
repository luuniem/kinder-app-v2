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

import Modal from "./../../components/Modal";

const Points = props => {
  const [totalPoints, setTotalPoints] = useState([]);

  const prizes = [
    {
      name: "1 Sticker",
      image: "mickeySticker.jpg",
      points: 10,
      description:
        "Pick any one stickers you like from a collection of stickers."
    },
    {
      name: "1 Ice-Cream Sandwich",
      image: "icecream.jpg",
      points: 10,
      description:
        "You get to have a whole icecream sandwich from the big freezer!"
    },
    {
      name: "1 Hour YouTube",
      image: "youtube.png",
      points: 15,
      description:
        "The doctor says you can have 1 hour of time on the iPad. You can earn it here!"
    },
    {
      name: "1 Happy Meal",
      image: "happyMeal.jpg",
      points: 15,
      description:
        "It's more junk food, but if you have enough points, you can claim this reward!"
    },
    {
      name: "Paint model",
      image: "paintModel.jpg",
      points: 20,
      description: "You can pick any paint models from the store!"
    },
    {
      name: "Paint canvas",
      image: "paintCanvas.jpg",
      points: 20,
      description: "You can win one paint canvas to paint on!"
    },
    {
      name: "Extra Paint",
      image: "extraPaint.jpg",
      points: 20,
      description: "If you run out of paint, just earn it here."
    },
    {
      name: "Dizzy Castle",
      image: "dizzyCastle.jpg",
      points: 30,
      description: "One trip to Dizzy Castle!"
    },
    {
      name: "Disney World",
      image: "disneyworld.jpg",
      points: 3000,
      description: "The ultimate trip"
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

  const subtractPointsHandler = async point => {
    if (totalPoints.total > point) {
      const updatePoints = { total: totalPoints.total - point };
      await Axios.put(
        "https://emily-kinder-app.firebaseio.com/Points.json",
        updatePoints
      );
      setTotalPoints({ total: totalPoints.total - point });
    } else {
      setOpen(true);
    }
  };
  console.log(totalPoints);

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
        {prizes.map(card => {
          return (
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img src={require(`../../images/${card.image}`)} alt="" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {card.name}
                  <i className="material-icons right">
                    {card.points}
                    <img
                      className="activator point_image"
                      src={require("../../images/points.png")}
                      alt=""
                    />
                  </i>
                </span>

                <Modal
                  totalPoints={totalPoints.total}
                  points={card.points}
                  name={card.name}
                  subtractPoints={() => subtractPointsHandler(card.points)}
                  // subtractedPoints={totalPoints}
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
          );
        })}
      </div>
    </div>
  );
};

export default Points;
