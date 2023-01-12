import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import {
  faThumbsUp as faThumbsUpFull,
  faThumbsDown as faThumbsDownFull,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Votes = ({ votes, voteChange, errorStatus }) => {
  const [voteGiven, setVoteGiven] = useState(0);
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);

  const handleUpVote = () => {
    setUpVote((prevUpVote) => !prevUpVote);
    if (!upVote && voteGiven === 0) {
      voteChange(1);
      setVoteGiven(1);
    } else if (upVote && voteGiven === 1) {
      voteChange(-1);
      setVoteGiven(0);
    }
  };

  const handleDownVote = () => {
    setDownVote((prevDownVote) => !prevDownVote);
    if (!downVote && voteGiven === 0) {
      voteChange(-1);
      setVoteGiven(1);
    } else if (downVote && voteGiven === 1) {
      voteChange(1);
      setVoteGiven(0);
    }
  };
  return (
    <div className="comment_votes">
      <button
        disabled={downVote}
        onClick={() => {
          setVoteGiven(1);
          handleUpVote();
        }}
      >
        {upVote && !errorStatus ? (
          <FontAwesomeIcon icon={faThumbsUpFull} size={"2x"} />
        ) : (
          <FontAwesomeIcon icon={faThumbsUp} size={"2x"} />
        )}
      </button>
      <h4>{votes}</h4>
      <button
        disabled={upVote}
        onClick={() => {
          setVoteGiven(1);
          handleDownVote();
        }}
      >
        {downVote && !errorStatus ? (
          <FontAwesomeIcon icon={faThumbsDownFull} size={"2x"} />
        ) : (
          <FontAwesomeIcon icon={faThumbsDown} size={"2x"} />
        )}
      </button>
    </div>
  );
};

export default Votes;
