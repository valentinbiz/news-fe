import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";

const CommentsCard = ({ comment }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers(comment.author).then(({ user }) => {
      setUser(user);
    });
  });
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
      <div className="comment_votes">
        <p>
          <FontAwesomeIcon icon={faThumbsUp} />
        </p>
        <p>{comment.votes}</p>
        <p>
          <FontAwesomeIcon icon={faThumbsDown} />
        </p>
      </div>
    </div>
  );
};

export default CommentsCard;
