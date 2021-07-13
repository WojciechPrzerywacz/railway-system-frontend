import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TrainsList from "./trains/TrainsList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  paper: {
    height: "100vh",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.paper}>
      <TrainsList />
    </Paper>
  );
}
