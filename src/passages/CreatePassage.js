import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CreatePassageFields from "./CreatePassageFields";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
}));

export default function CreatePassage() {
  const classes = useStyles();
  return <CreatePassageFields></CreatePassageFields>;
}
