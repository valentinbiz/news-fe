import { useState } from "react";
import "../styles/CommentFormStyle.css";
import { postArticleComment } from "../utils/api";
import BasicModal from "./Modal";
import Loading from "./Loading";

const AddComment = ({ articleId, setNumberOfArticles }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [usernameData, setusernameData] = useState("");
  const [commentData, setCommentData] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [modalTypeState, setModalTypeState] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleUsernameCHange = (event) => {
    setusernameData(event.target.value);
  };
  const handleCommentCHange = (event) => {
    setCommentData(event.target.value);
  };

  const handleCommentSubmit = () => {
    setRequestSubmitted(true);
    if (usernameData && commentData) {
      postArticleComment(articleId, usernameData, commentData)
        .then((res) => {
          setErrorMessage("Comment submited succesfully!");
          setModalTypeState("good");
          setDisplayModal(true);
          setusernameData("");
          setCommentData("");
          setNumberOfArticles((currArticles) => currArticles + 1);
          setRequestSubmitted(false);
        })
        .catch((error) => {
          setModalTypeState("error");
          setErrorMessage(
            "Sorry, something went wrong and your comment was not posted. Please check the details and try again later!"
          );
          setDisplayModal(true);
          setRequestSubmitted(false);
        });
    } else {
      setModalTypeState("error");
      setErrorMessage("Make sure you completed all the fields!");
      setDisplayModal(true);
      setRequestSubmitted(false);
    }
  };
  return (
    <div className="add_comment_container">
      <BasicModal
        open={displayModal}
        onClose={() => setDisplayModal(false)}
        modalMessage={errorMessage}
        modalType={modalTypeState}
      />
      <h1>Add a comment</h1>
      <div className="form-container">
        <form>
          <div className="name-fields">
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={handleUsernameCHange}
              value={usernameData || ""}
              required
            />
          </div>
          <div className="message-field">
            <textarea
              id="subject"
              name="comment"
              placeholder="comment"
              style={{ height: "100px" }}
              onChange={handleCommentCHange}
              value={commentData || ""}
              required
            ></textarea>
          </div>
          <p>
            *Until auth functionality will be added please use username *
            jessjelly * to post comments
          </p>
        </form>
        {requestSubmitted ? (
          <Loading />
        ) : (
          <button onClick={() => handleCommentSubmit()}> Submit comment</button>
        )}
      </div>
    </div>
  );
};

export default AddComment;
