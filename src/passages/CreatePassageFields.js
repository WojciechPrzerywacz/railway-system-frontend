import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import { fetchTrainsList } from "../trains/trainsSlice";
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
  const [start, setStart] = useState("");
  const { trains } = useSelector((store) => store.trainslist);

  const handleChange = (event) => {
    setCurrentSelect(event.target.value);
  };
  const [currentSelect, setCurrentSelect] = useState(0);

  return (
    <Grid>
      <TextField
        id="starting-location-label"
        label="Enter starting location"
        value={start}
        onChange={(event) => setStart(event.target.value)}
      />
      <TextField
        id="destination-label"
        label="Enter destination"
        value={start}
        onChange={(event) => setStart(event.target.value)}
      />
      <TextField
        id="select-train"
        select
        value={currentSelect}
        onChange={handleChange}
        helperText="Please select train"
      >
        {trains?.map((option, index) => (
          <MenuItem>{option?.id}</MenuItem>
        ))}
      </TextField>
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
    </Grid>
  );
}
