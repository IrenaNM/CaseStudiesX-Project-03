import React, { useState } from "react";
import { makeStyles,withStyles } from "@material-ui/core/styles";
import {Grid, Paper, Typography, Button, FormControl, Input, InputLabel} from "@material-ui/core";

const StyledInput = withStyles({
  root: {
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "#FFF"
    }
  }
})(Input);

const useStyles = makeStyles(({
  banner: {
    backgroundColor: "#303f9f",
    color: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    height: "calc(100vh - 144px)",
    padding: "20px",
    "@media (max-width: 1279px)": {
      margin: "0 10px",
    },
    boxShadow: "rgba(0, 0, 0, 0.4) 0px 5px 7px",
  },
  container: {
    padding: "40px 0",
    textAlign: "center",
    "@media (max-width: 600px)": {
      // padding: "20px 0",
      paddingBottom: "40px",
    },
  },
  input: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 0 10px 0",
    width: "100%",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
    "&:hover:not(disabled):not(focused):not(error) notchedOutline": {
      borderColor: "red"
    }
  },
  emailBtn: {
    backgroundColor: "#fff",
    borderRadius: "0",
    "@media (max-width: 600px)": {
      width: "70%",
    },
  },
  inpitColors: {
    marginBottom: "6px",
    color: "#FFF",
    '&::before':{
      borderBottom: "2px solid #fff"
   },
    '&::hover':{
      borderBottom: "2px solid #fff"
   },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `red !important`,
    }
  },
  inputText: {
    width: "20%",
    "@media (max-width: 1100px)": {
      width: "30%",
    },
    "@media (max-width: 600px)": {
      width: "70%",
    },
  },
  title: {
    "@media (max-width: 1280px)": {
      fontSize: "1.7rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.5rem",
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  
  return (
    <Grid container className={classes.container}>
      <Grid item sm={1}></Grid>
      <Grid item lg={10} xs={12} md={12}>
        <Paper className={classes.banner}>
          <Typography variant="h4" className={classes.title}>
            Приклучи се на 1350 ентузијасти и учи дигитални вештини. Бесплатно.
          </Typography>
          <form
            autoComplete="off"
            className={classes.input}
            onSubmit={handleSubmit}
          >
            <FormControl className={classes.inputText}>
              <InputLabel
                style={{ color: "#FFF" }}
                className={classes.inpitColors}
              >
                Enter E-mail
              </InputLabel>
              <StyledInput
                id="component-error"
                aria-describedby="component-error-text"
                className={classes.inpitColors}
                value={email}
                onChange={handleChange}
                type="email"
                required
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={classes.emailBtn}
            >
              Пријави се
            </Button>
          </form>
          <Typography>
            Можеш да се исклучиш од листата на мејлови во секое време!
          </Typography>
        </Paper>
      </Grid>
      <Grid item sm={1}></Grid>
    </Grid>
  );
};

export default Banner;
