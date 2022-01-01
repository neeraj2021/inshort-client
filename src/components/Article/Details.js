import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Grid,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { fullViewArticle } from "../../service/api";

const useStyles = makeStyles((theme) => ({
  component: {
    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
    marginBottom: 20,
  },
  container: {
    display: "flex",
    padding: 8,
    paddingBottom: "4px!important",
  },
  image: {
    width: "100%",
    borderRadius: 5,
    objectFit: "cover",
  },
  rightContainer: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      margin: "5px 0",
    },
  },
  title: {
    fontWeight: 300,
    color: "#44444d",
    fontSize: 22,
    lineHeight: "27px",
  },
  author: {
    color: "#808290",
    fontSize: 12,
    lineHeight: "22px",
  },
  description: {
    lineHeight: "22px",
    color: "#44444d",
    marginTop: 5,
    fontFamily: "'Roboto',sans-serif",
    fontWeight: 300,
  },
  short: {
    color: "#44444d",
    fontFamily: "'Convergence', sans-serif",
  },
  publisher: {
    fontSize: 12,
    marginTop: "auto",
    marginBottom: 10,
    "& > *": {
      textDecoration: "none",
      color: "#000",
      fontWeight: 900,
    },
  },
}));

function Details() {
  const classes = useStyles();
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fullView = async () => {
      const response = await fullViewArticle(id);
      setArticle(response.data);
    };
    fullView();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [id]);

  return (
    <div>
      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <Card className={classes.component}>
          <CardContent className={classes.container}>
            <Grid container>
              <Grid xs={12} item>
                <img src={article.url} alt="pic" className={classes.image} />
              </Grid>
              <Grid xs={12} item className={classes.rightContainer}>
                <Typography className={classes.title}>
                  {article.title}
                </Typography>
                <Typography className={classes.author}>
                  <b className={classes.short}>short</b> by {article.author} /{" "}
                  {new Date(article.timestamp).toDateString()}
                </Typography>
                <Typography className={classes.description}>
                  {article.description}
                </Typography>
                <Typography className={classes.publisher}>
                  read more at
                  <a href={article.link} rel="noreferrer" target="_blank">
                    {" "}
                    {article.publisher}
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default Details;
