import React from "react";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import Articles from "./components/Article/Articles";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 110,
    width: "59%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header></Header>
      <h1>Git Auto deploy testing</h1>
      <h1>Git Auto deploy testing</h1>
      <h1>Git Auto deploy testing</h1>
      <h1>Git Auto deploy testing</h1>
      <h1>Git Auto deploy testing</h1>
      <Box className={classes.container}>
        <InfoHeader></InfoHeader>
        <Articles></Articles>
      </Box>
    </Box>
  );
}

export default App;
