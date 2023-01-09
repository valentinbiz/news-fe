const ItemCard = ({ article }) => {
  return (
    <div className="card">
      <h2> {article.title} </h2>
      <h3> Author: {article.author}</h3>
      <div className="card_article_info">
        <h4> Comments: {article.comment_count}</h4>
        <h4> Votes: {article.votes}</h4>
      </div>
      <div className="card_buttons">
        <button> Read article</button>
        <button> Save article for later</button>
      </div>
    </div>
  );
};

export default ItemCard;
