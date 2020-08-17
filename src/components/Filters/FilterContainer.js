import React, { useContext } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Typography, FormGroup, Switch, FormControlLabel} from "@material-ui/core";
import { Context } from "../../context/appContext";
import FilterButton from "./FilterButton";
import { useMediaQuery } from "@material-ui/core";
import FilterMobile from "./FilterMobile";

const useStyles = makeStyles({
  container: {
    paddingTop: "30px",
    "@media (max-width: 600px)": {
      paddingTop: "0px",
    },
  },
  filterTitle: {
    fontSize: "1.7rem",
    "@media (max-width: 969px)": {
      fontSize: "1.9rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.2rem",
      padding: "0 10px"
    },
    marginRight: "20px",
  },
  filterCont: {
    marginTop: "20px",
  }
});

const FilterDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterContainer = () => {
  const buttonsText = ["ПРОГРАМИРАЊЕ", "ДИЗАЈН", "МАРКЕТИНГ", "UX/UI", "DATA SCIENCE", "БИЗНИС"]
  // Filter button
  const { filterToggle, handleChangeToggleFilter} = useContext(
    Context
  );
  const toggleFilterUi = useMediaQuery("(max-width: 959px)");
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.filterCont}>
        <Grid item sm={2}></Grid>
        <Grid item md={8} xs={12} >
          <FilterDiv>
            <Typography variant="h4" className={classes.filterTitle}>
              Филтрирај по Категорија
            </Typography>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={filterToggle}
                    onChange={handleChangeToggleFilter}
                    name="checkedB"
                    color="primary"
                    className={classes.switchBtn}
                  />
                }
              />
            </FormGroup>
          </FilterDiv>
        </Grid>
        <Grid item sm={2}></Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        item
        sm={12}
        className={classes.container}
      >
        {toggleFilterUi ? (
          <FilterMobile />
        ) : (
          <>
            <FilterButton category="СИТЕ" />
            {buttonsText.map((button, index) => (
              <FilterButton key={index} category={button} />
            ))}
          </>
        )}
      </Grid>
    </>
  );
};

export default FilterContainer;
