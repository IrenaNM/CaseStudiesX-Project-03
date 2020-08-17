import React from "react";
import {Link} from "react-router-dom"
import {Grid, Box, Card, CardActions, CardContent, Typography, IconButton, Button} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridCard: {
    padding: "10px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  mainP: {
    overflow: "hidden",
    height: "150px",
    "@media (max-width: 600px)": {
      height: "auto",
    },
  },
  buttonRed: {
    color: "red"
  }
});

export default function CardHorizontal({ card, toggleHeart, favourites }) {
  const classes = useStyles();

  return (
    <Grid item md={6} xs={12} className={classes.gridCard}>
      <Card variant="outlined">
        <CardContent className={classes.mainP}>
          <Box className={classes.title}>
            <Typography gutterBottom variant="h5" component="h2">
              {card.category}
            </Typography>
            <Typography paragraph>Број на лекции: {card.lectures}</Typography>
          </Box>
          <Typography variant="body2" color="textPrimary" component="p">
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites" onClick={() => toggleHeart(card.id)}>
            <FavoriteIcon className={favourites.includes(card.id) ? classes.buttonRed : ""}/>
          </IconButton>
          <Link to={`details/${card.id}`}>
          <Button variant="contained" size="small">Повеќе</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
