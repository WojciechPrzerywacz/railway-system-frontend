import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#19222a",
    color: "#F4F2F3",
    width: "420px",
    height: "40px",
    borderRadius: "20px",
  },
  link: {
    textDecoration: "none",
    color: "inhert",
  },
  glass: {
    width: "350px",
    background: "rgba( 255, 255, 255, 0.15 )",
    backgroundColor: "#fafafa",
    backdropFilter: "blur( 13.0px )",
    borderRadius: "10px",
    border: "2px solid #339989",
    "&:hover": {
      backgroundColor: "#339989",
      color: "#F4F2F3",
      border: "4px solid #F4F2F3",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "red",
      },
    },
  },
}));

const StyledCard = withStyles((theme) => ({
  root: {
    height: "45px",

    "&:hover": {
      backgroundColor: "#339989",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "red",
      },
    },
  },
}))(Card);

export default function PassagesListItem(props) {
  const { id, name, start, destination } = props;
  const classes = useStyles();

  return (
    <Link to={`/${id}`} className={classes.link}>
      <Card className={classes.glass} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {start} - {destination}
          </Typography>
          <Typography color="textSecondary">
            Departure: 13:45
            <br />
            {name}
          </Typography>
        </CardContent>
        <CardActions className={classes.button}>
          <Button size="medium">
            <InfoIcon fontSize="large" />
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
