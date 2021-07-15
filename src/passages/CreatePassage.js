import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CreatePassageFields from "./CreatePassageFields";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  button: {
    borderRadius: "100px",
    border: "2px solid #a74db0",
    backgroundColor: "white",
    color: "#4b5c69",
    "&:hover": {
      backgroundColor: "#a74db0",
      color: "white",
    },
  },
  grid: {
    height: "100vh",
  },
}));

export default function CreatePassage() {
  const classes = useStyles();
  const { startingPlace, endingPlace, locomotiveId } = useSelector(
    (store) => store.createPassage
  );

  const handleSubmit = (e) => {
    const passageToSubmit = {
      startingPlace: startingPlace,
      endingPlace: endingPlace,
      locomotiveId: locomotiveId,
    };

    fetch("http://localhost:8080/passages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passageToSubmit),
    }).then(() => {
      console.log(JSON.stringify(passageToSubmit));
    });
  };

  return (
    <Grid
      className={classes.grid}
      container
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      className={classes.grid}
    >
      <CreatePassageFields></CreatePassageFields>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={() => {
          handleSubmit();
        }}
      >
        Create Passage
      </Button>
    </Grid>
  );
}
