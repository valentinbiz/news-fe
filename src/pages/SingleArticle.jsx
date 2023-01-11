import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Comments from "../components/Comments";
import Votes from "../components/ItemVotes";
import Loading from "../components/Loading";
import Error from "./Error";

import { fetchSingleArticle, patchArticleVotes } from "../utils/api";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [postedTime, setPostedTime] = useState("");
  const [votesCount, setVotesCount] = useState(0);
  const [patchError, setPatchError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(article_id).then(({ article }) => {
      setSingleArticle(article);
      setPostedTime(article.created_at.substring(0, 10));
      setVotesCount(article.votes);
      setIsLoading(false);
    });
  }, [article_id]);

  const adjustCount = (incrementAmount) => {
    setVotesCount((currVotesCount) => currVotesCount + incrementAmount);
    patchArticleVotes(article_id, incrementAmount).catch((error) => {
      setVotesCount((currVotesCount) => currVotesCount - incrementAmount);
      setPatchError("Sorry, something went wrong. Please try again");
    });
  };

  if (isLoading) return <Loading />;
  if (patchError)
    return (
      <Error
        errorMessage={patchError}
        article={article_id}
        setPatchError={setPatchError}
      />
    );

  return (
    <div className="single_article_page">
      <div className="single_article_container">
        <div className="single_article_header">
          <h1>{singleArticle.title}</h1>
          <Votes votes={votesCount} voteChange={adjustCount} />
        </div>
        <div className="single_article_info">
          <h3>Author: {singleArticle.author}</h3>
          <h3>Date posted: {postedTime}</h3>
          <h3>Topic: {singleArticle.topic}</h3>
        </div>
        <h2>{singleArticle.body}</h2>
      </div>
      <Comments articleId={article_id} />
    </div>
  );
};

export default SingleArticle;
