import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentsCard from "./CommentsList";

const Comments = ({ articleId }) => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    fetchComments(articleId).then(({ comments }) => {
      setCommentsList(comments);
    });
  }, [articleId]);
  return (
    <div className="comments_list">
      <h1>Comments</h1>
      {commentsList.map((comment) => {
        return <CommentsCard comment={comment} key={comment.comment_id} />;
      })}
    </div>
  );
};

export default Comments;
