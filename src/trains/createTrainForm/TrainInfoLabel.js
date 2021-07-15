import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocomotives, setLocomotiveIdToPost } from "./createTrainSlice";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import RefreshIcon from "@material-ui/icons/Refresh";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "250px",
  },
  typoflex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteicon: {
    marginLeft: "1px",
  },
}));

export default function TrainInfoLabel() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { locomotiveIdToPost, locomotives, wagonsToPost, wagons } = useSelector(
    (store) => store.createTrain
  );

  const refresh = () => {
    window.location.reload(false);
  };
  useEffect(() => {
    dispatch(fetchLocomotives(`http://localhost:8080/locomotives`));
  }, [dispatch]);

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2"></Typography>
        <Typography className={classes.pos} color="textSecondary">
          Locomotive: {locomotives[locomotiveIdToPost - 1]?.locomotive_name}
          <br />
          Engine power: {locomotives[locomotiveIdToPost - 1]?.engine_power} hp
          <br />
          Maximum load: {locomotives[locomotiveIdToPost - 1]?.max_load}t
          <br />
          Total load:
        </Typography>
        {wagonsToPost.map((value, index) => (
          <Typography
            variant="body2"
            component="p"
            className={classes.typoflex}
          >
            Wagon: '{wagons[value?.id].type}' Load: {value.load}t{" "}
            <DeleteIcon fontSize="small" className={classes.deleteicon} />
          </Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={refresh}>
          <RefreshIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
