import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    background: "#fff",
    height: 70,
  },
  menu: {
    color: "#000",
  },
  image: {
    height: 55,
    margin: "auto",
    paddingRight: 70,
  },
  link: {
    margin: "auto",
  },
});

function Header() {
  const classes = useStyles();
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Menu className={classes.menu} />
        <Link to="/" className={classes.link}>
          <img src={url} alt="logo" className={classes.image} />
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
