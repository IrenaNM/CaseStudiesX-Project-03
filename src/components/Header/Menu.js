import React from "react";
import {Drawer, List, Divider, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import LanguageIcon from "@material-ui/icons/Language";
import EventNoteIcon from "@material-ui/icons/EventNote";
import BookIcon from "@material-ui/icons/Book";

export default function Menu({ openMenu, setMenuOpen }) {
  let menuContent = [
    {
      name: "Академии",
      icon: <SchoolIcon />,
    },
    {
      name: "Вебинари",
      icon: <LanguageIcon />,
    },
    {
      name: "Тест за кариера",
      icon: <EventNoteIcon />,
    },
    {
      name: "Блог",
      icon: <BookIcon />,
    },
  ];

  return (
    <Drawer anchor="left" open={openMenu} onClose={setMenuOpen}>
      <List onClick={setMenuOpen} onKeyDown={setMenuOpen}>
        {menuContent.map((link) => (
          <ListItem button key={link.name}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
