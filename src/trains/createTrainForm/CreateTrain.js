import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TrainInfoLabel from "./TrainInfoLabel";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import CreateTrainFields from "./CreateTrainFields";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  paper: {
    height: "100vh",
    width: "80%",
    backgroundColor: "white",
  },
  button: {
    marginLeft: "50%",
    borderRadius: "100px",
    border: "2px solid #a74db0",
    backgroundColor: "white",
    color: "#4b5c69",
    "&:hover": {
      backgroundColor: "#a74db0",
      color: "white",
    },
  },
}));

export default function CreateTrain() {
  const classes = useStyles();
  const { wagonsToPost, locomotiveIdToPost } = useSelector(
    (store) => store.createTrain
  );

  const handleSubmit = (e) => {
    const trainToSubmit = {
      locomotiveId: locomotiveIdToPost,
      wagonsList: wagonsToPost,
    };

    fetch("http://localhost:8080/trains", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trainToSubmit),
    }).then(() => {
      console.log(JSON.stringify(trainToSubmit));
    });
  };

  return (
    <Paper elevation={2} className={classes.paper}>
      <CreateTrainFields></CreateTrainFields>
      <TrainInfoLabel />
      <Button
        className={classes.button}
        variant="outlined"
        onClick={() => {
          handleSubmit();
        }}
      >
        Create Train
      </Button>
    </Paper>
  );
}
