import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <Grid container>
      <Grid item md={1}></Grid>
      <Grid item lg={10} xs={12}>
        <Grid container justify={"center"} style={{padding: "0 20px"}}>
            <Typography variant="h5" color="primary"   >
            Се изгуби? Сеуште можеш да ни се приклучиш или оди
            <Link to="/">
            <Button variant="contained" color="primary" style={{margin: "25px"}}>Назад</Button>
            </Link>
            </Typography>
        </Grid>
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
  );
};

export default NotFound;
