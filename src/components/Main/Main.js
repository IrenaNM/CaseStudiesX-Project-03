import React, { useContext, useState, useEffect } from "react";
import FilterContainer from "../Filters/FilterContainer";
import CardVertical from "../Cards/CardVertical";
import { Grid } from "@material-ui/core";
import { Context } from "../../context/appContext";
import { makeStyles } from "@material-ui/core/styles";
import CardHorizontal from "../Cards/CardHorizontal";

const useStyles = makeStyles({
  container: {
    padding: "50px 0",
    "@media (max-width: 959px)": {
      padding: "0 0 10px 0",
    },
  },
});
const Main = () => {
  const classes = useStyles();
  const { filterToggle, filtered } = useContext(Context);
  const [favourites, setFavourites] = useState([]);


  useEffect(() => {
   if(localStorage.getItem('favourites')){
    setFavourites(JSON.parse(localStorage.getItem('favourites')))
   }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const handleFavourites = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((el) => el !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };
  console.log(favourites);

  return (
    <>
      <FilterContainer />
      <Grid container className={classes.container}>
        <Grid item md={1}></Grid>
        <Grid item lg={10} xs={12}>
          <Grid container>
            {filtered.map((card) =>
              filterToggle ? (
                <CardHorizontal
                  favourites={favourites}
                  toggleHeart={handleFavourites}
                  key={card.id}
                  id={card.id}
                  card={card}
                />
              ) : (
                <CardVertical
                  key={card.id}
                  id={card.id}
                  card={card}
                  favourites={favourites}
                  toggleHeart={handleFavourites}
                />
              )
            )}
          </Grid>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </>
  );
};

export default Main;
