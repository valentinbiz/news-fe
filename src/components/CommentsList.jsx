import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import Votes from "./ItemVotes";

const CommentsCard = ({ comment }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers(comment.author).then(({ user }) => {
      setUser(user);
    });
  }, [comment.author]);
  return (
    <div className="comment_container">
      <div className="comment_user_image">
        <img src={`${user.avatar_url}`} alt=""></img>
      </div>
      <div className="comment_content">
        <span className="comment_name"> {comment.author}</span>
        <span className="comment_time">{comment.created_at}</span> <br />
        <br />
        <span className="comment_body">{comment.body}</span>
      </div>
      <Votes votes={comment.votes} />
    </div>
  );
};

export default CommentsCard;
