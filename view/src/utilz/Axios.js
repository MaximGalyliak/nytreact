import axios from "axios";

const getArticles = term => {
  return axios.get(`/api/nyt/${term}`);
};

export default getArticles;
