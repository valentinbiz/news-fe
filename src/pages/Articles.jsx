import { useEffect, useState } from "react";

import * as api from "../utils/api";

import ItemCard from "../components/ArticleCard";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div className="loader">Loading...</div>;
  return (
    <div className="articles__div">
      {articles.map((article) => {
        return <ItemCard article={article} />;
      })}
    </div>
  );
};

export default Articles;
