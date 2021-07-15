import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TrainIcon from "@material-ui/icons/Train";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPassageId } from "./passagesSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#a93fb5",
    // color: "white",
    // width: "400px",
    // height: "50px",
    // borderRadius: "20px",
    // marginTop: "10px",
  },
}));

export default function PassagesListItem(props) {
  const { id, name, start, destination } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { selectedPassageId } = useSelector((store) => store.passageslist);

  return (
    <ListItem
      button
      key={id}
      onClick={() => {
        dispatch(setSelectedPassageId(id));
        console.log(selectedPassageId);
      }}
      className={classes.root}
    >
      <TrainIcon />
      <ListItemText primary={` ${name} `} />
      <ListItemText primary={` To: ${start} `} />
      <ListItemText primary={` From: ${destination} `} />
    </ListItem>
  );
}
