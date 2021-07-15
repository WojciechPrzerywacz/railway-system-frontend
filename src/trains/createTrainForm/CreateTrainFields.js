import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocomotives, setLocomotiveIdToPost } from "./createTrainSlice";
import { fetchWagons, setWagonsToPost } from "./createTrainSlice";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "200px",
  },
  button: {
    borderRadius: "100px",
    color: "#4b5c69",
    border: "2px solid #a74db0",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#a74db0",
      color: "white",
    },
  },
  gridbox: {
    width: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dropfield: {
    width: "60%",
    backgroundColor: "white",
  },
  field: {
    width: "60%",
    backgroundColor: "white",
    marginBottom: "25px",
  },
}));

let selectedWagons = [];

export default function CreateTrainFields() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { locomotives, locomotiveIdToPost, wagons } = useSelector(
    (store) => store.createTrain
  );
  const [currentSelect2, setCurrentSelect2] = useState("");

  useEffect(() => {
    dispatch(fetchLocomotives(`http://localhost:8080/locomotives`));
  }, [dispatch]);

  const [currentSelect, setCurrentSelect] = useState({ id: "", load: 0 });
  const [currentWagonType, setCurrentWagonType] = useState("");
  const [enteredLoad, setEnteredLoad] = useState(500);

  useEffect(() => {
    dispatch(fetchWagons(`http://localhost:8080/wagontypes`));
  }, [dispatch]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={6}
    >
      <Grid item xs={12} className={classes.gridbox}>
        <TextField
          id="select-locomotive"
          select
          className={classes.dropfield}
          value={currentSelect2}
          onChange={(event) => setCurrentSelect2(event.target.value)}
          helperText="Please select locomotive type"
        >
          {locomotives?.map((option, index) => (
            <MenuItem
              key={index}
              value={option.id}
              onClick={() => {
                dispatch(setLocomotiveIdToPost(option?.id));
              }}
            >
              {option?.locomotive_name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      {
        ////
        ////
      }
      <Grid item xs className={classes.gridbox}>
        <TextField
          id="select-wagon"
          className={classes.dropfield}
          select
          value={currentWagonType}
          onChange={(event) => setCurrentSelect(event.target.value)}
          helperText="Please select wagon type"
        >
          {wagons?.map((option, index) => (
            <MenuItem
              key={index}
              onClick={() => setCurrentWagonType(option?.type)}
              value={{ id: option?.id, load: option?.max_load }}
            >
              {"'" + option?.type + "' (max load: " + option?.max_load + ")"}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs className={classes.gridbox}>
        <TextField
          id="wagon-load-field"
          label="Enter load (t)"
          className={classes.field}
          value={enteredLoad}
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
          style={{
            backgroundColor: "white",
            color: "#4b5c69",
          }}
          onClick={() => {
            selectedWagons.push({ id: currentSelect.id, load: enteredLoad });
            dispatch(setWagonsToPost(selectedWagons));
          }}
        >
          Add Wagon
        </Button>
      </Grid>
    </Grid>
  );
}
