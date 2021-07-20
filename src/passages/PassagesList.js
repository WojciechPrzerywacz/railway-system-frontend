import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fetchPassagesList } from "./passagesSlice";
import PassagesListItem from "./PassagesListItem";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "#4b5c69",
    height: "100vh",
    width: "80%",
  },
}));

export default function PassagesList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { passages } = useSelector((store) => store.passageslist);

  useEffect(() => {
    dispatch(fetchPassagesList(`http://localhost:8080/passages`));
  }, [dispatch]);
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      {passages.map((value, index) => (
        <Grid item xs={4}>
          <PassagesListItem
            id={value?.id}
            key={index}
            name={value?.train.locomotive.locomotive_name}
            start={value?.start}
            destination={value?.destination}
          />
        </Grid>
      ))}
    </Grid>
  );
}
