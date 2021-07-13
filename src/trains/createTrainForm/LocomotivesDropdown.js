import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocomotives } from "../trainsSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
}));

export default function LocomotivesDropdown() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { locomotives } = useSelector((store) => store.trainslist);
  const [currentSelect, setCurrentSelect] = useState("none");

  useEffect(() => {
    dispatch(fetchLocomotives(`http://localhost:8080/locomotives`));
  }, [dispatch]);

  const handleChange = (event) => {
    setCurrentSelect(event.target.value);
  };
  return (
    <TextField
      id="select-locomotive"
      select
      value={currentSelect}
      onChange={handleChange}
      helperText="Please select locomotive type"
    >
      {locomotives?.map((option, index) => (
        <MenuItem key={index} value={option?.locomotive_name}>
          {option?.locomotive_name}
        </MenuItem>
      ))}
    </TextField>
  );
}
