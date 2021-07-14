import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocomotives, setLocomotiveIdToPost } from "./createTrainSlice";
import { fetchWagons, setWagonsToPost } from "./createTrainSlice";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

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
    marginLeft: "50%",
    borderRadius: "100px",
    color: "#4b5c69",
    border: "2px solid #a74db0",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#a74db0",
      color: "white",
    },
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

  const handleChange = (event) => {
    setCurrentSelect(event.target.value);
  };
  const [currentSelect, setCurrentSelect] = useState({ id: "", load: 0 });
  const [enteredLoad, setEnteredLoad] = useState(0);

  useEffect(() => {
    dispatch(fetchWagons(`http://localhost:8080/wagontypes`));
  }, [dispatch]);

  const handleChange2 = (event) => {
    setCurrentSelect2(event.target.value);
  };

  return (
    <Box>
      <TextField
        id="select-locomotive"
        select
        value={currentSelect2}
        onChange={handleChange2}
        helperText="Please select locomotive type"
      >
        {locomotives?.map((option, index) => (
          <MenuItem
            key={index}
            value={option.id}
            onClick={() => {
              dispatch(setLocomotiveIdToPost(option?.id));
              console.log(locomotiveIdToPost);
            }}
          >
            {option?.locomotive_name}
          </MenuItem>
        ))}
      </TextField>
      {
        ////
        ////
      }
      <TextField
        id="select-wagon"
        select
        value={currentSelect.id}
        onChange={handleChange}
        helperText="Please select wagon type"
      >
        {wagons?.map((option, index) => (
          <MenuItem
            key={index}
            value={{ id: option?.id, load: option?.max_load }}
          >
            {"'" + option?.type + "' max load: " + option?.max_load}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="wagon-load-field"
        label="Enter load"
        value={enteredLoad}
        onChange={(event) => setEnteredLoad(event.target.value)}
      />
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
    </Box>
  );
}
