import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertDialog = props => {
  const [open, setOpen] = React.useState(false);
  const { totalPoints, subtractPoints, points, name } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  //   const [subtractedPoints, setSubtractedPoints] = useState([]);
  const handleClose = () => {
    // setSubtractedPoints(subtractPoints);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Use Points
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Hi Emily! You currently have ${totalPoints} points!`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You're about spend {points} points on {name}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={subtractPoints} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
