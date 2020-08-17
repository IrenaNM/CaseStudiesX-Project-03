import React from "react";
import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Grid,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Typography,
  IconButton,
} from "@material-ui/core";

import { blue } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[900],
  },
  gridCard: {
    padding: "10px",
  },
  mainP: {
    overflow: "hidden",
    height: "200px",
  },
  buttonRed: {
    color: "red",
  },
}));

export default function CardVertical({ card, favourites, toggleHeart }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useToggle();

  return (
    <Grid item xs={12} sm={6} md={4} className={classes.gridCard}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {card.avatar}
            </Avatar>
          }
          title={
            <Typography variant="h5" component="h2">
              {card.category}
            </Typography>
          }
        />
        <CardMedia
          className={classes.media}
          image={require(`../../static/images/${card.id}.jpg`)}
          title="Paella dish"
        />
        <CardContent className={classes.mainP}>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {card.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => toggleHeart(card.id)}
          >
            <FavoriteIcon
              className={favourites.includes(card.id) ? classes.buttonRed : ""}
            />
          </IconButton>
          <Link to={`details/${card.id}`}>
            <Button variant="contained" color="primary" size="small">
              Повеќе
            </Button>
          </Link>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={setExpanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon color="primary" />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Број на лекции: {card.lectures}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
