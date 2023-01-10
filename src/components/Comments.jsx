import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentsCard from "./CommentsList";
import Loading from "./Loading";

const Comments = ({ articleId }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchComments(articleId).then(({ comments }) => {
      setCommentsList(comments);
      setIsLoading(false);
    });
  }, [articleId]);

  if (isLoading) return <Loading />;
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
