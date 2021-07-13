import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LocomotivesDropdown from "./LocomotivesDropdown";
import WagonsDropdown from "./WagonsDropdown";

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
}));

export default function CreateTrain() {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper}>
      <LocomotivesDropdown />
      <WagonsDropdown />
    </Paper>
  );
}
