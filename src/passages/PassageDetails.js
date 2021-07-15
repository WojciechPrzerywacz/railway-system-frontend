import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fetchCurrentPassage } from "./passagesSlice";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "400px",
    // backgroundColor: "#fafafa",
    // borderRadius: "20px",
  },
  button: {
    width: "400px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  glass: {
    background: "rgba( 255, 255, 255, 0.15 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 13.0px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
}));

export default function PassageDetails(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { passages, selectedPassageId, currentPassage } = useSelector(
    (store) => store.passageslist
  );

  useEffect(() => {
    dispatch(
      fetchCurrentPassage(`http://localhost:8080/passages/${selectedPassageId}`)
    );
  }, [dispatch, selectedPassageId]);

  const deletePassage = () => {
    fetch(`http://localhost:8080/passages/${selectedPassageId}`, {
      method: "DELETE",
    }).then(window.location.reload(false));
  };

  return (
    <Card className={classes.glass} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {currentPassage?.start} - {currentPassage?.destination}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Departure: 13:45
          <br />
          Locomotive: {currentPassage?.train?.locomotive.locomotive_name}
        </Typography>
        <Typography variant="body2" component="p">
          Wagons number:
          <br />
          Total load:
        </Typography>
      </CardContent>
      <CardActions className={classes.button}>
        <Button size="medium">
          <InfoIcon fontSize="large" />
        </Button>
        <Button size="medium" onClick={deletePassage}>
          <DeleteIcon fontSize="large" />
        </Button>
      </CardActions>
    </Card>
  );
}
