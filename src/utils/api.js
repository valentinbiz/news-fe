import axios from "axios";

const myApi = axios.create({
  baseURL: "https://news-api-hosting.onrender.com/api",
});

export const fetchArticles = () => {
  return myApi.get(`/articles`).then((res) => {
    return res.data;
  });
};
