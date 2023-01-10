import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import { fetchSingleArticle } from "../utils/api";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postedTime, setPostedTime] = useState("");
  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(article_id).then(({ article }) => {
      setSingleArticle(article);
      setIsLoading(false);
      setPostedTime(article.created_at.substring(0, 10));
    });
  }, [article_id]);

  if (isLoading) return <Loading />;
  return (
    <div className="single_article_page">
      <div className="single_article_container">
        <h1>{singleArticle.title}</h1>
        <div className="single_article_info">
          <h3>Author: {singleArticle.author}</h3>
          <h3>Date posted: {postedTime}</h3>
          <h3>Topic: {singleArticle.topic}</h3>
        </div>
        <h2>{singleArticle.body}</h2>
      </div>
    </div>
  );
};

export default SingleArticle;
