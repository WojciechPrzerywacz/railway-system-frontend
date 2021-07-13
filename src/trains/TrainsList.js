import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import { fetchTrainsList } from "./trainsSlice";
import TrainsListItem from "./TrainsListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "#4b5c69",
    borderRadius: "0px 20px 20px 0px",
    marginRight: "20px",
  },
}));

export default function UsersList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { trains } = useSelector((store) => store.trainslist);

  useEffect(() => {
    dispatch(fetchTrainsList(`http://localhost:8080/trains`));
  }, [dispatch]);

  const calculateLoad = (value) => {
    let res = 0;
    value?.wagons.map((val, indx) => {
      res = res + val?.load_weight;
      return val?.load_weight;
    });

    return res;
  };
  return (
    <Box>
      <List
        component="nav"
        aria-label="main mailbox folders"
        className={classes.root}
      >
        {trains.map((value, index) => (
          <TrainsListItem
            key={index}
            id={value?.id}
            name={value?.locomotive.locomotive_name}
            max_load={value?.locomotive.max_load}
            current_load={calculateLoad(value)}
          ></TrainsListItem>
        ))}
      </List>
    </Box>
  );
}
