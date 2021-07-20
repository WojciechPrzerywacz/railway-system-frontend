import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Navbar from "./Navbar";
import CreatePassage from "./passages/createPassageForm/CreatePassage";
import PassagesList from "./passages/PassagesList";
import TypesList from "./trains/TypesList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PassageDetails from "./passages/PassageDetails";

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
            <PassagesList />
          </Route>
          <Route path="/createpassage">
            <CreatePassage />
          </Route>
          <Route path="/alltrains">
            <TypesList />
          </Route>
          <Route path="/allpassages">
            <PassagesList />
          </Route>
          <Route path="/:id">
            <PassageDetails />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
