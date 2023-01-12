import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Comments from "../components/Comments";
import Votes from "../components/ItemVotes";
import Loading from "../components/Loading";
import BasicModal from "../components/Modal";

import { fetchSingleArticle, patchArticleVotes } from "../utils/api";
import AddComment from "../components/AddComment";

import "../styles/SingleArticleStyle.css";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [postedTime, setPostedTime] = useState("");
  const [votesCount, setVotesCount] = useState(0);
  const [error, setError] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [numberOfArticles, setNumberOfArticles] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(article_id).then(({ article }) => {
      setSingleArticle(article);
      setPostedTime(article.created_at.substring(0, 10));
      setVotesCount(article.votes);
      setIsLoading(false);
      setNumberOfArticles(article.comment_count);
    });
  }, [article_id]);

  const adjustCount = (incrementAmount) => {
    setVotesCount((currVotesCount) => currVotesCount + incrementAmount);
    patchArticleVotes(article_id, incrementAmount).catch((error) => {
      setVotesCount((currVotesCount) => currVotesCount - incrementAmount);
      setError(
        "Sorry, something went wrong and your vote was not recorded. Please try again later!"
      );
      setDisplayModal(true);
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="single_article_page">
      <BasicModal
        open={displayModal}
        onClose={() => setDisplayModal(false)}
        modalMessage={error}
        modalType="error"
      />
      <div className="single_article_container">
        <div className="single_article_header">
          <h1>{singleArticle.title}</h1>
          <Votes
            votes={votesCount}
            voteChange={adjustCount}
            errorStatus={error}
          />
        </div>
        <div className="single_article_info">
          <h3>Author: {singleArticle.author}</h3>
          <h3>Date posted: {postedTime}</h3>
          <h3>Topic: {singleArticle.topic}</h3>
        </div>
        <h2>{singleArticle.body}</h2>
      </div>
      <div className="comments_section">
        <Comments articleId={article_id} articles={numberOfArticles} />
        <AddComment
          articleId={article_id}
          setError={setError}
          setNumberOfArticles={setNumberOfArticles}
        />
      </div>
    </div>
  );
};

export default SingleArticle;
