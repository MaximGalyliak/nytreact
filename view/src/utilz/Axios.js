import axios from "axios";

const getArticles = term => {
  return axios.get(`/api/nyt/${term}`);
};

const getArticlesByYear = (term, start_year, end_year) => {
  return axios.get(`/api/nyt/${term}/${start_year}/${end_year}`);
};

const saveArticle = (title, url, snippet, date, multimedia) => {
  return axios.post("/db/articles", {
    title,
    url,
    snippet,
    date,
    multimedia,
  });
};

const getSavedArticles = () => {
  return axios.get("/db/articles");
};

const deleteSavedArticle = id => {
  return axios.delete(`/db/articles/${id}`);
};
export {
  getArticles,
  getArticlesByYear,
  saveArticle,
  getSavedArticles,
  deleteSavedArticle,
};
