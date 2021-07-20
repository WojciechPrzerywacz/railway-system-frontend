import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fetchWagonTypes, fetchTrainTypes } from "./trainsSlice";
import TrainIcon from "@material-ui/icons/Train";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "#4b5c69",
    borderRadius: "0px 20px 20px 0px",
    marginRight: "20px",
  },
  grid: {
    height: "100vh",
    width: "80%",
  },
  card: {
    margin: "10px",
    width: "400px",
  },
}));

export default function TypesList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { trainTypes, wagonTypes } = useSelector((store) => store.trainslist);

  useEffect(() => {
    dispatch(fetchTrainTypes(`http://localhost:8080/locomotives`));
    dispatch(fetchWagonTypes(`http://localhost:8080/wagontypes`));
  }, [dispatch]);

  return (
    <Grid
      className={classes.grid}
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {" "}
      <Grid item xs={6}>
        {trainTypes.map((value, index) => (
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <TrainIcon />

              <Typography variant="h5" component="h2">
                {value?.locomotive_name}
              </Typography>
              <Typography color="textSecondary">
                Id: {value?.id}
                <br />
                Max load: {value?.max_load}t
                <br />
                Engine power: {value?.engine_power}hp
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      {
        //typy wgonów
      }
      <Grid item xs={6}>
        {wagonTypes.map((value, index) => (
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <ShoppingCartIcon />
              <Typography variant="h5" component="h2">
                {value?.type}
              </Typography>
              <Typography color="textSecondary">
                Id: {value?.id}
                <br />
                Max load: {value?.max_load}t
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
