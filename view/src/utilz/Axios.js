import axios from "axios";

const getArticles = term => {
  return axios.get(`/api/nyt/${term}`);
};

const getArticlesByYear = (term, start_year, end_year) => {
  return axios.get(`/api/nyt/${term}/${start_year}/${end_year}`);
};

export { getArticles, getArticlesByYear };
