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
import { useParams } from "react-router-dom";
import { myfetch, deleteTemplate } from "../app/myFetch";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "400px",
  },
  button: {
    width: "400px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  glass: {
    height: "100vh",
    background: "rgba( 255, 255, 255, 0.15 )",
    backgroundColor: "#fafafa",
    backdropFilter: "blur( 13.0px )",
    borderRadius: "10px",
    border: "1px solid #339989",
  },
  wagon: {
    borderRadius: "10px",
    border: "1px solid #c7c7c7",
    marginTop: "5px",
    width: "200px",
  },
}));

export default function PassageDetails(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  let { id } = useParams();
  const { currentPassage } = useSelector((store) => store.passageslist);

  useEffect(() => {
    if (id !== undefined) {
      console.log(id);
      dispatch(fetchCurrentPassage(`http://localhost:8080/passages/${2}`));
    }
  }, [dispatch, id]);

  const deletePassage = () => {
    if (id !== -1) {
      let url = `http://localhost:8080/passages/${id}`;
      myfetch(url, deleteTemplate);
      window.location.reload(false);
    }
  };

  const calculateLoad = (value) => {
    let res = 0;
    value?.wagons.map((val, indx) => {
      res = res + val?.load_weight;
      return val?.load_weight;
    });
    return res;
  };

  const calculateWagonsNumber = (value) => {
    let res = 0;
    value?.wagons.map((val, indx) => {
      res = res + 1;
      return val?.load_weight;
    });
    return res;
  };

  return (
    <Card className={classes.glass} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {currentPassage?.start} - {currentPassage?.destination}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Name: {currentPassage?.passageName}
          <br />
          Departure: 13:45
          <br />
          Locomotive: {currentPassage?.train?.locomotive.locomotive_name}
        </Typography>
        <Typography variant="body2" component="p">
          Wagons number: {calculateWagonsNumber(currentPassage?.train)}
          <br />
          Total load: {calculateLoad(currentPassage?.train)}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          Wagons:
          <br />
        </Typography>
        {currentPassage?.train?.wagons.map((value, index) => (
          <Typography variant="body2" component="p" className={classes.wagon}>
            <br />
            Type: {value?.type}
            <br />
            Load: {value?.load_weight}
            <br />
            Max load: {value?.max_load}
          </Typography>
        ))}
      </CardContent>
      <CardActions className={classes.button}>
        <Button size="medium" onClick={deletePassage}>
          <DeleteIcon fontSize="large" />
        </Button>
      </CardActions>
    </Card>
  );
}
