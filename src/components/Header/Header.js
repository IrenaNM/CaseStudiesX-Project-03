import React, { useState } from "react";
import Menu from "./Menu";
import logo from "../../static/images/brainster_space_logo.svg";
import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Avatar,
  Modal,
  Backdrop,
  Input,
  Fade,
  Grid,
  Tab,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBtn: {
    marginLeft: "30px",
  },
  icon: {
    borderRadius: "0px",
  },
  iconBtn: {
    "&:hover": {
      backgroundColor: "#FFF",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #303f9f",
    padding: theme.spacing(5, 8, 5),
  },
  tab: {
    minWidth: "0",
    padding: "0",
    marginLeft: "20px",
    minHeight: "0",
    fontWeight: "bold",
  },
  flex: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: "#FFF",
    color: "#000",
  },
  modalInBtn: {
    marginTop: "10px",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useToggle();
  const [openMenu, setOpenMenu] = useToggle();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      setEmail("");
      setOpenModal(false);
    }
  };

  return (
    <Grid container direction="column">
      <AppBar position="static" className={classes.nav}>
        <Toolbar id="back-to-top-anchor">
          <Grid item className={classes.flex}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={setOpenMenu}
            >
              <MenuIcon />
            </IconButton>
            <IconButton className={classes.iconBtn}>
              <Link to="/">
                <Avatar className={classes.icon} src={logo} />
              </Link>
            </IconButton>
          </Grid>
          <Grid item>
            <Box display={{ xs: "none", md: "block" }}>
              <Tab
                className={classes.tab}
                label="Академии"
                href="https://www.brainster.io/"
                target="_blank"
              />
              <Tab
                className={classes.tab}
                label="Вебинари"
                href="https://online.brainster.co/webinar/%D0%B2%D0%B5%D0%B1%D0%B8%D0%BD%D0%B0%D1%80-1/"
                target="_blank"
              />
              <Tab
                className={classes.tab}
                label="Тест за кариера"
                href="https://www.wearelaika.com/"
                target="_blank"
              />
              <Tab
                className={classes.tab}
                label="Блог"
                href="https://blog.brainster.co/"
                target="_blank"
              />
            </Box>
          </Grid>
          <Grid>
            <Button
              className={classes.modalBtn}
              variant="contained"
              color="primary"
              onClick={setOpenModal}
            >
              Пријави се
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={openModal}
              onClose={setOpenModal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openModal}>
                <div className={classes.paper}>
                  <form onSubmit={handleSubmit}>
                    <FormControl>
                      <InputLabel htmlFor="name">Enter E-mail</InputLabel>
                      <Input
                        id="name"
                        autoComplete="off"
                        onChange={handleChange}
                        value={email}
                        type="email"
                        required
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.modalInBtn}
                      >
                        Пријави се
                      </Button>
                      <FormHelperText id="my-helper-text">
                        We'll never share your email.
                      </FormHelperText>
                    </FormControl>
                  </form>
                </div>
              </Fade>
            </Modal>
          </Grid>
        </Toolbar>
      </AppBar>
      <Menu openMenu={openMenu} setMenuOpen={setOpenMenu} />
    </Grid>
  );
}
