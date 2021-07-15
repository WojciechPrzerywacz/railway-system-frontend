import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Navbar from "./Navbar";
import Home from "./Home";
import CreateTrain from "./trains/createTrainForm/CreateTrain";
import CreatePassage from "./passages/CreatePassage";
import PassagesList from "./passages/PassagesList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  navbar: {},
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Box className={classes.root}>
        <Navbar className={classes.navbar} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/createtrain">
            <CreateTrain />
          </Route>
          <Route path="/createpassage">
            <CreatePassage />
          </Route>
          <Route path="/alltrains">
            <Home />
          </Route>
          <Route path="/allpassages">
            <PassagesList />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
