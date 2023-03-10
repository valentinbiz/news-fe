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

export const fetchComments = (articleId) => {
  return myApi.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data;
  });
};
export const fetchUsers = (userName) => {
  return myApi.get(`/users/${userName}`).then((res) => {
    return res.data;
  });
};

export const patchArticleVotes = (articleId, newVote) => {
  return myApi
    .patch(`/articles/${articleId}`, { inc_votes: newVote })
    .then((res) => {
      return res.data;
    });
};

export const postArticleComment = (articleId, author, commentData) => {
  return myApi
    .post(`/articles/${articleId}/comments`, {
      username: author,
      body: commentData,
    })
    .then((res) => {
      return res.data;
    });
};
