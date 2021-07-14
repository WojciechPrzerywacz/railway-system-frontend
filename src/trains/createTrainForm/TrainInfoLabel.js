import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocomotives, setLocomotiveIdToPost } from "./createTrainSlice";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
}));

export default function TrainInfoLabel() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { locomotiveIdToPost, locomotives, wagonsToPost } = useSelector(
    (store) => store.createTrain
  );

  useEffect(() => {
    dispatch(fetchLocomotives(`http://localhost:8080/locomotives`));
  }, [dispatch]);

  return (
    <Box>
      <List component="nav" aria-label="main mailbox folders">
        {wagonsToPost.map((value, index) => (
          <ListItem button>
            <ListItemText primary={`${value.id}`} />
            <ListItemText primary={`Load: ${value.load}t`} />
          </ListItem>
        ))}
      </List>
      Locomotive name: '{locomotives[locomotiveIdToPost - 1]?.locomotive_name}'
      Engine power: '{locomotives[locomotiveIdToPost - 1]?.engine_power}Km'
      Maximum load: '{locomotives[locomotiveIdToPost - 1]?.max_load}t'
    </Box>
  );
}
