import axios from "axios";

const myApi = axios.create({
  baseURL: "https://news-api-hosting.onrender.com/api",
});

export const fetchArticles = (topicToSort) => {
  return myApi
    .get(`/articles`, { params: { topic: topicToSort } })
    .then((res) => {
      return res.data;
    });
};

export const fetchSingleArticle = (articleId) => {
  return myApi.get(`/articles/${articleId}`).then((res) => {
    return res.data;
  });
};

export const fetchTopics = () => {
  return myApi.get(`/topics`).then((res) => {
    return res.data;
  });
};
