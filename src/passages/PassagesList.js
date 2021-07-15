import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { fetchPassagesList } from "./passagesSlice";
import PassagesListItem from "./PassagesListItem";
import PassageDetails from "./PassageDetails";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "#4b5c69",
    height: "100vh",
    width: "80%",
    borderRadius: "0px 20px 20px 0px",
    marginRight: "20px",
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
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <List component="nav" aria-label="Passages">
        {passages.map((value, index) => (
          <PassagesListItem
            id={value?.id}
            key={index}
            name={value?.train.locomotive.locomotive_name}
            start={value?.start}
            destination={value?.destination}
          />
        ))}
      </List>
      <PassageDetails></PassageDetails>
    </Grid>
  );
}
