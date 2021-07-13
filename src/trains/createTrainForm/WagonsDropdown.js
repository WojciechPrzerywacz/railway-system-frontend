import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchWagons } from "../trainsSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
}));

export default function WagonsDropdown() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { wagons } = useSelector((store) => store.trainslist);
  const [currentSelect, setCurrentSelect] = useState("none");

  useEffect(() => {
    dispatch(fetchWagons(`http://localhost:8080/wagons`));
  }, [dispatch]);

  const handleChange = (event) => {
    setCurrentSelect(event.target.value);
  };
  return (
    <TextField
      id="select-wagon"
      select
      value={currentSelect}
      onChange={handleChange}
      helperText="Please select wagon type"
    >
      {wagons?.map((option, index) => (
        <MenuItem key={index} value={option?.type}>
          {option?.type}
        </MenuItem>
      ))}
    </TextField>
  );
}
