import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  paper: {
    height: "100vh",
    width: "80%",
    backgroundColor: "blue",
  },
}));

export default function CreatePassage() {
  const classes = useStyles();
  return <Paper elevation={2} className={classes.paper}></Paper>;
}
