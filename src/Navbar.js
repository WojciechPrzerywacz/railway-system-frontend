import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import CommuteIcon from "@material-ui/icons/Commute";
import AppsIcon from "@material-ui/icons/Apps";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(1),
    width: "10vw",
    minWidth: "180px",
  },
  link: {
    width: "80%",
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={4} className={classes.paper}>
        <MenuList>
          <MenuItem>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <MenuOpenIcon className={classes.icon} />
          </MenuItem>
          <MenuItem>
            <Link to="/alltrains" className={classes.link}>
              Trains
            </Link>
            <ListAltIcon className={classes.icon} />
          </MenuItem>
          <MenuItem>
            <Link to="/createtrain" className={classes.link}>
              Create Train
            </Link>
            <TrainOutlinedIcon className={classes.icon} />
          </MenuItem>
          <MenuItem>
            <Link to="/allpassages" className={classes.link}>
              Passages
            </Link>
            <ListAltIcon className={classes.icon} />
          </MenuItem>
          <MenuItem>
            <Link to="/createpassage" className={classes.link}>
              Create Passage
            </Link>
            <CommuteIcon className={classes.icon} />
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
