import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CreatePassageFields from "./CreatePassageFields";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { myfetch, postTemplate } from "../../app/myFetch";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    borderRadius: "100px",
    color: "#4b5c69",
    border: "2px solid #339989",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#339989",
      color: "white",
    },
  },
  grid: {
    // height: "100vh",
    width: "80%",
  },
}));

export default function CreatePassage() {
  const history = useHistory();
  const classes = useStyles();
  const { startingPlace, endingPlace, passageName } = useSelector(
    (store) => store.createPassage
  );
  const { wagonsToPost, locomotiveIdToPost } = useSelector(
    (store) => store.createTrain
  );

  const handleSubmit = (e) => {
    const passageToSubmit = {
      passageName: passageName,
      startingPlace: startingPlace,
      endingPlace: endingPlace,
      locomotiveId: locomotiveIdToPost,
      wagonsList: wagonsToPost,
    };
    if (
      passageToSubmit.passageName !== "" &&
      passageToSubmit.locomotiveIdToPost !== -1 &&
      passageToSubmit.startingPlace !== "" &&
      passageToSubmit.endingPlace !== "" &&
      passageToSubmit.wagonsList.length > 0
    ) {
      myfetch("http://localhost:8080/passages", postTemplate(passageToSubmit));
      alert("Succesfully Created Passage!");
      history.push("/allpassages");
    } else {
      alert("Could not create passage!");
    }
  };

  return (
    <Grid
      className={classes.grid}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
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
