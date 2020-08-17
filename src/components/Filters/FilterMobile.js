import React, { useContext } from "react";
import { Context } from "../../context/appContext";
import { makeStyles } from "@material-ui/core/styles";
import { Divider,Checkbox,ListItemText, ListItem, List} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 959,
    backgroundColor: theme.palette.background.paper,
    margin: "10px",
    padding: "0",
  },
  list: {
    padding: "0 10px",
  },
  checkbox: {
    padding: "5px",
  },
  category: {
    paddingLeft: "10px",
  },
}));

export default function FilterMobile() {
  const { handleToggle, checked } = useContext(Context);
  const classes = useStyles();
  const buttonsText = ["ПРОГРАМИРАЊЕ","ДИЗАЈН","МАРКЕТИНГ","UX/UI","DATA SCIENCE","БИЗНИС"];

  return (
    <List className={classes.root}>
      <ListItem>
        <FontAwesomeIcon
          icon={["fas", `filter`]}
          style={{ color: `#303f9f`, height: "1.6em" }}
        />
        <ListItemText primary={`Филтри`} className={classes.category} />
      </ListItem>
      <Divider />
      {buttonsText.map((text, index) => {
        return (
          <ListItem key={index} className={classes.list}>
            <Checkbox
              value={text}
              edge="end"
              onChange={handleToggle(text)}
              checked={checked.includes(text)}
              color="primary"
              className={classes.checkbox}
            />
            <ListItemText
              primary={`${text}`}
              className={classes.category}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
