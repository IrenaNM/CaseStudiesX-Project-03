import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Main from "../Main/Main";
import CardDetails from "../CardDetails/CardDetails";
import NotFound from "../NotFound/NotFound";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  body: {
    backgroundColor: "#f6f7fb",
  },
});

const Body = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.body}>
      <Header />
      <Banner />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/details/:id" component={CardDetails}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Grid>
  );
};

export default Body;
