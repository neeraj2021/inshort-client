import axios from "axios";

const URL = "https://inshort-clone-server.herokuapp.com";

export const getArticle = async (page, size = 5) => {
  try {
    return await axios.get(`${URL}/news?page=${page}&size=${size}`);
  } catch (error) {
    console.log("error while calling getNews API");
  }
};

export const postArticle = async (article) => {
  const { title, author, description, url, link, publisher } = article;
  if (!title || !author || !description || !url || !link || !publisher) {
    alert("Please Fill All Column");
    return;
  }
  try {
    await axios.post(URL, article);
    alert("Form Submitted Sucessfully");
  } catch (error) {
    console.log(error);
  }
};
