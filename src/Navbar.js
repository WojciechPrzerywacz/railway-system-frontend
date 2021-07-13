import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(1),
    width: "10vw",
    minWidth: "170px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={4} className={classes.paper}>
        <MenuList>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/createtrain">Create Train</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/createpassage">Create Passage</Link>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
