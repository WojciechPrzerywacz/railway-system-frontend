import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Link, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CommuteIcon from "@material-ui/icons/Commute";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(1),
    width: "300px",
    backgroundColor: "#19222a",
    borderRadius: "0px 10px 10px 0px",
  },
  link: {
    width: "100%",
    color: "#F4F2F3",
    textDecoration: "none",
    fontFamily: "sans-serif",
  },
  icon: {
    marginRight: "10%",
    color: "#F4F2F3",
  },
  header: {
    width: "100%",
    height: "60px",
    color: "black",
    display: "flex",
    fontFamily: "Lato",
    justifyContent: "flex-start",
    borderRadius: "0px 10px 0px 0px",
    alignItems: "center",
    backgroundColor: "#339989",
    textDecoration: "none",
  },
  headerTypo: {
    color: "#F4F2F3",
    marginLeft: "15px",
  },
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    height: "60px",
    "&:hover": {
      backgroundColor: "rgba(51, 153, 137, 0.7)",
    },
  },
}))(MenuItem);

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Paper elevation={6} className={classes.paper}>
      <Box className={classes.header}>
        <Typography className={classes.headerTypo}>Trains App</Typography>
      </Box>
      <MenuList>
        <StyledMenuItem
          onClick={() => history.push("/")}
          className={classes.link}
        >
          <HomeOutlinedIcon className={classes.icon} />
          Home
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => history.push("/alltrains")}
          className={classes.link}
        >
          <ListAltIcon className={classes.icon} />
          Locomotive types
        </StyledMenuItem>

        <StyledMenuItem
          onClick={() => history.push("/createpassage")}
          className={classes.link}
        >
          <CommuteIcon className={classes.icon} />
          Create Passage
        </StyledMenuItem>
      </MenuList>
    </Paper>
  );
}
