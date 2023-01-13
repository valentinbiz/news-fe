import { Link } from "react-router-dom";

import "../styles/ArticleCardStyle.css";

const ItemCard = ({ article }) => {
  const backgroundPicture =
    article.topic === "football"
      ? "#e0c9bd"
      : article.topic === "cooking"
      ? "#698f7d"
      : article.topic === "coding"
      ? "#bec6c0"
      : "unknown";

  return (
    <div
      className="card"
      style={{
        backgroundColor: `${backgroundPicture}`,
      }}
    >
      <h2> {article.title} </h2>
      <h3> Author: {article.author}</h3>
      <div className="card_article_info">
        <h4> Comments: {article.comment_count}</h4>
        <h4> Votes: {article.votes}</h4>
      </div>
      <div className="card_buttons">
        <Link to={`/articles/${article.article_id}`}>
          <button> Read article</button>
        </Link>
        <button> Save article for later</button>
      </div>
    </div>
  );
};

export default ItemCard;
