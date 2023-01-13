import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentsCard from "./CommentsList";
import Loading from "./Loading";

import "../styles/CommentsListStyle.css";

const Comments = ({ articleId, articles }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchComments(articleId).then(({ comments }) => {
      setCommentsList(comments);
      setIsLoading(false);
    });
  }, [articleId, articles]);

  if (isLoading) return <Loading />;
  return (
    <div className="comments_list">
      <h1>Comments: {articles}</h1>
      <div className="comments_list_container">
        {commentsList.map((comment) => {
          return <CommentsCard comment={comment} key={comment.comment_id} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
