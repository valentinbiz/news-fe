import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const Votes = ({ votes, voteChange }) => {
  return (
    <div className="comment_votes">
      <button
        onClick={() => {
          voteChange(1);
        }}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <p>{votes}</p>
      <button
        onClick={() => {
          voteChange(-1);
        }}
      >
        <FontAwesomeIcon icon={faThumbsDown} />
      </button>
    </div>
  );
};

export default Votes;
