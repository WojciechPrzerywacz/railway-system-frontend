import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { fetchTrainTypes } from "../../trains/trainsSlice";
import {
  fetchLocomotives,
  setLocomotiveIdToPost,
} from "../../trains/createTrainForm/createTrainSlice";
import {
  fetchWagons,
  setWagonsToPost,
} from "../../trains/createTrainForm/createTrainSlice";
import {
  setStartingPlace,
  setEndingPlace,
  setPassageName,
} from "./createPassagesSlice";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import TrainInfoLabel from "../../trains/createTrainForm/TrainInfoLabel";
import LocomotivesDialog from "./LocomotivesDialog";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "#4b5c69",
    borderRadius: "0px 20px 20px 0px",
    marginRight: "20px",
  },
  gridbox: {
    width: "500px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px",
  },
  avatar: {
    backgroundColor: "#339989",
    color: "#F4F2F3",
    margin: "0px 15px 0px 0px",
  },
  dropfield: {
    width: "400px",
    borderRadius: "10px",
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
}));

const calculateLoad = (value) => {
  let res = 0;
  value?.wagons.map((val, indx) => {
    res = res + val?.load_weight;
    return val?.load_weight;
  });

  return res;
};

let selectedWagons = [];

export default function CreatePassageFields() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [start, setStart] = useState("Some location");
  const [destination, setDestination] = useState("Some location");
  const [selectedTrain, setSelectedTrain] = useState(-1);
  const { trainTypes } = useSelector((store) => store.trainslist);
  const { locomotives, wagons } = useSelector((store) => store.createTrain);

  const [currentLoco, setCurrentLoco] = useState("");

  const [currentWagonToList, setcurrentWagonToList] = useState({
    id: -1,
    load: 0,
  });
  const [currentWagonType, setCurrentWagonType] = useState("");
  const [enteredLoad, setEnteredLoad] = useState(500);

  const [enteredName, setEnteredName] = useState("");

  useEffect(() => {
    dispatch(fetchTrainTypes(`http://localhost:8080/trains`));
    dispatch(fetchLocomotives(`http://localhost:8080/locomotives`));
    dispatch(fetchWagons(`http://localhost:8080/wagontypes`));
  }, [dispatch]);

  //do dialoga
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("HELLO");

  //^^
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {/* <Grid className={classes.gridbox}>
        <Typography variant="subtitle1">
          Selected locomotive: {selectedValue}
        </Typography>
        <br />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpen(true)}
        >
          Select locomotive type
        </Button>
        <LocomotivesDialog
          selectedValue={selectedValue}
          open={open}
          onClose={(value) => {
            setOpen(false);
            setSelectedValue(value);
          }}
        />
      </Grid> */}
      <Grid item xs={12} className={classes.gridbox}>
        <TextField
          id="passage-name"
          label="Enter passage name"
          className={classes.dropfield}
          value={enteredName}
          variant="outlined"
          onChange={(event) => {
            dispatch(setPassageName(event.target.value));
            setEnteredName(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} className={classes.gridbox}>
        <TextField
          id="select-locomotive"
          select
          className={classes.dropfield}
          value={currentLoco}
          onChange={(event) => setCurrentLoco(event.target.value)}
          InputProps={{ disableUnderline: true }}
          label="Please select locomotive type"
          variant="outlined"
        >
          {locomotives?.map((option, index) => (
            <MenuItem
              key={index}
              value={option.id}
              onClick={() => {
                dispatch(setLocomotiveIdToPost(option?.id));
              }}
            >
              {/* <Avatar className={classes.avatar}>
                <TrainIcon />
              </Avatar> */}
              {option?.locomotive_name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      {
        //wagony
      }
      <Grid item xs={12} className={classes.gridbox}>
        <TextField
          id="select-wagon"
          className={classes.dropfield}
          select
          value={currentWagonType}
          onChange={(event) => setcurrentWagonToList(event.target.value)}
          label="Please select wagon type"
          variant="outlined"
          InputProps={{ disableUnderline: true }}
        >
          {wagons?.map((option, index) => (
            <MenuItem
              key={index}
              onClick={() => setCurrentWagonType(option?.type)}
              value={{ id: option?.id - 1, load: option?.max_load }}
            >
              {"'" + option?.type + "' (max load: " + option?.max_load + ")"}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} className={classes.gridbox}>
        <TextField
          id="wagon-load-field"
          label="Enter load (t)"
          className={classes.dropfield}
          value={enteredLoad}
          variant="outlined"
          onChange={(event) => setEnteredLoad(event.target.value)}
        />
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => {
            if (currentWagonToList.id !== -1) {
              selectedWagons.push({
                id: currentWagonToList.id,
                load: enteredLoad,
              });
              dispatch(setWagonsToPost(selectedWagons));
            } else {
              alert("Choose wagon type first!");
            }
          }}
        >
          Add Wagon
        </Button>
      </Grid>
      <Grid item xs={12} className={classes.gridbox}>
        <TrainInfoLabel />
      </Grid>
      {
        //lokacje
      }
      <Grid item xs={12} className={classes.gridbox}>
        <TextField
          id="starting-location-label"
          label="Enter starting location"
          className={classes.dropfield}
          value={start}
          type="text"
          error={start.length === 0 ? true : false}
          helperText=""
          variant="outlined"
          onBlur={() => {}}
          onChange={(event) => {
            setStart(event.target.value);
            dispatch(setStartingPlace(event.target.value));
          }}
        />
      </Grid>
      <Grid item xs={12} className={classes.gridbox}>
        <TextField
          id="destination-label"
          className={classes.dropfield}
          label="Enter destination"
          error={destination.length === 0 ? true : false}
          value={destination}
          type="text"
          variant="outlined"
          onChange={(event) => {
            setDestination(event.target.value);
            dispatch(setEndingPlace(event.target.value));
          }}
        />
      </Grid>
    </Grid>
  );
}
