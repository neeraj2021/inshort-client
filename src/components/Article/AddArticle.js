import React, { useState } from "react";
import { postArticle } from "../../service/api";

import {
  Box,
  TextField,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "500px",
    marginTop: "12px",
  },
  button: {
    marginTop: "15px",
  },
}));

export default function AddArticle() {
  const classes = useStyles();

  const [article, setArticle] = useState({
    title: "",
    author: "",
    description: "",
    url: "",
    link: "",
    publisher: "",
  });

  const post = async (event) => {
    event.preventDefault();

    const response = await postArticle(article);
    setArticle({
      title: "",
      author: "",
      description: "",
      url: "",
      link: "",
      publisher: "",
    });
  };

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setArticle((values) => ({ ...values, [name]: value }));
  }

  return (
    <>
      <Typography variant="h4">Add New Article</Typography>
      <Box component="form" noValidate autoComplete="off" onSubmit={post}>
        <div>
          <TextField
            label="Title"
            className={classes.input}
            name="title"
            value={article.title}
            onChange={handleInput}
            variant="outlined"
            size="small"
          />
        </div>
        <div>
          <TextField
            label="Author"
            className={classes.input}
            id="outlined-textarea"
            name="author"
            value={article.author}
            onChange={handleInput}
            variant="outlined"
            size="small"
          />
        </div>
        <div>
          <TextField
            label="Description"
            className={classes.input}
            value={article.description}
            name="description"
            onChange={handleInput}
            multiline
            rows={4}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="Image Url"
            className={classes.input}
            name="url"
            value={article.url}
            onChange={handleInput}
            variant="outlined"
            size="small"
          />
        </div>
        <div>
          <TextField
            label="Article Link"
            className={classes.input}
            name="link"
            value={article.link}
            onChange={handleInput}
            variant="outlined"
            size="small"
          />
        </div>
        <div>
          <TextField
            label="Publisher"
            className={classes.input}
            name="publisher"
            value={article.publisher}
            onChange={handleInput}
            variant="outlined"
            size="small"
          />
        </div>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          type="submit"
        >
          POST
        </Button>
      </Box>
    </>
  );
}
