import React from "react";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#f44336",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    height: 48,
    marginBottom: 10,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  logo: {
    height: 34,
    "&:last-child": {
      margin: "0 50px 0 20px",
    },
  },
  text: {
    fontSize: 14,
    fontWeight: 300,
    marginLeft: 50,
    fontFamily: "'Roboto',sans-serif",
  },
  button: {
    margin: "auto",
  },
}));

function InfoHeader() {
  const classes = useStyles();
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.text}>
          For the best experience use <b>inshorts</b> app on your smartphone
        </Typography>

        <Box style={{ marginLeft: "auto" }}>
          <img src={appleStore} alt="apple store" className={classes.logo} />
          <img src={googleStore} alt="google store" className={classes.logo} />
        </Box>
      </Box>
      <Box className={classes.box}>
        <Button
          href="/add"
          className={classes.button}
          color="primary"
          variant="contained"
          type="submit"
        >
          ADD NEW POST
        </Button>
      </Box>
    </>
  );
}

export default InfoHeader;
