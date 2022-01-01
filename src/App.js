import React from "react";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import Articles from "./components/Article/Articles";
import AddArticle from "./components/Article/AddArticle";
import { Box, makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Details from "./components/Article/Details";

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
      <Header />
      <Box className={classes.container}>
        <Switch>
          <Route exact path="/">
            <InfoHeader />
            <Articles />
          </Route>
          <Route exact path="/add" component={AddArticle}></Route>
          <Route exact path="/:id" component={Details}></Route>
        </Switch>
      </Box>
    </Box>
  );
}

export default App;
