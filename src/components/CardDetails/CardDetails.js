import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { cardDetails } from "../../static/consts/db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Box, Card, CardContent, Typography,CardActionArea } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridCard: {
    margin: "10px",
  },
  number: {
    color: "#303f9f",
    fontWeight: "bold",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 670px)": {
      justifyContent: "flex-start",
    },
  },
  title: {
    paddingLeft: "5px",
    fontWeight: "bold",
  },
  date: {
    backgroundColor: "#ffffb5",
    color: "#ff9400",
    fontWeight: "bold",
    padding: "2px 10px",
    borderRadius: "7px",
    marginLeft: "10px",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 7px",
  },
  cardTitleCont: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 670px)": {
      flexDirection: "column-reverse",
    },
  },
  container: {
    paddingBottom: "50px",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const CardDetails = () => {
    const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item md={1}></Grid>
      <Grid item lg={10} xs={12}>
        <Grid container>
          <Grid item md={8} xs={12}>
            {cardDetails.map((card, index) => (
              <Card key={index} variant="outlined" className={classes.gridCard}>
               <CardActionArea href={card.href} target="_blank">
                <CardContent>
                  <Box className={classes.cardTitleCont}>
                    <Box className={classes.flex}>
                      <Typography className={classes.number}>
                        #{card.id}
                      </Typography>
                      <Typography paragraph className={classes.title}>
                        {card.title}
                      </Typography>
                    </Box>
                    <Box className={classes.flex}>
                      <FontAwesomeIcon
                        icon={["fas", `${card.icon}`]}
                        style={{ color: `${card.color}`, height: "1.9em" }}
                        />
                      <Typography paragraph className={classes.date}>
                        {card.date}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography paragraph>{card.description}</Typography>
                </CardContent>
               </CardActionArea>
              </Card>
            ))}
          </Grid>
          <Grid item md={4} xs={12}>
            <Card variant="outlined" className={classes.gridCard}>
              <CardContent>
                <Box>
                  <Typography gutterBottom variant="h5">
                    Банер наслов
                  </Typography>
                  <Typography>
                    The previous example illustrates a simple scenario, where
                    the applied class list doesn’t change, independently of the
                    application’s state. But what if you wanted that one or more
                    classes were applied based on certain condition? For
                    instance, let’s say you have a component whose wrapper div
                    should be styled with a given class if the loading state
                    variable is set to true.
                  </Typography>
                </Box>
              </CardContent>              
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
  );
};

export default CardDetails;
