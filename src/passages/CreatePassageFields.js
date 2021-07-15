import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import { fetchTrainsList } from "../trains/trainsSlice";
import {
  setStartingPlace,
  setEndingPlace,
  setLocomotiveId,
} from "./createPassagesSlice";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import TrainsListItem from "../trains/TrainsListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "#4b5c69",
    borderRadius: "0px 20px 20px 0px",
    marginRight: "20px",
  },
}));

const calculateLoad = (value) => {
  let res = 0;
  value?.wagons.map((val, indx) => {
    res = res + val?.load_weight;
    return val?.load_weight;
  });

  return res;
};

export default function CreatePassageFields() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedTrain, setSelectedTrain] = useState("");
  const { trains } = useSelector((store) => store.trainslist);

  const [currentSelect, setCurrentSelect] = useState(0);

  useEffect(() => {
    dispatch(fetchTrainsList(`http://localhost:8080/trains`));
  }, [dispatch]);

  return (
    <Grid>
      <TextField
        id="starting-location-label"
        label="Enter starting location"
        value={start}
        onChange={(event) => {
          setStart(event.target.value);
          dispatch(setStartingPlace(event.target.value));
        }}
      />
      <TextField
        id="destination-label"
        label="Enter destination"
        value={destination}
        onChange={(event) => {
          setDestination(event.target.value);
          dispatch(setEndingPlace(event.target.value));
        }}
      />
      <TextField
        id="select-train"
        select
        value={selectedTrain}
        //onChange={(event) => setSelectedTrain(event.target.value)}
        helperText="Please select train"
      >
        {trains?.map((option, index) => (
          <MenuItem
            onClick={() => {
              setSelectedTrain(option?.id);
              dispatch(setLocomotiveId(option?.id));
            }}
          >
            {option?.locomotive.locomotive_name}
          </MenuItem>
        ))}
      </TextField>
      <List
        component="nav"
        aria-label="main mailbox folders"
        className={classes.root}
      >
        <TrainsListItem
          id={selectedTrain}
          name={trains[selectedTrain - 2]?.locomotive.locomotive_name}
          max_load={trains[selectedTrain - 2]?.locomotive.max_load}
          current_load={calculateLoad(trains[selectedTrain - 2])}
        ></TrainsListItem>
      </List>
    </Grid>
  );
}
