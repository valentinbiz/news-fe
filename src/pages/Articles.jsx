import { useEffect, useState } from "react";

import * as api from "../utils/api";

import ItemCard from "../components/ArticleCard";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import ArticleTopicsBar from "../components/ArticlesTopicsBar";

import "../styles/ArticlesPage.css";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles(topic).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <Loading />;
  return (
    <div>
      <ArticleTopicsBar />
      <div className="articles__div">
        {articles.map((article) => {
          return <ItemCard article={article} key={article.article_id} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
