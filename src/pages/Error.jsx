import { Link } from "react-router-dom";
import Cat from "../Planning/cat.png";

const Error = ({ errorMessage, article, setPatchError }) => {
  const resetErrorState = () => {
    setPatchError(null);
  };
  return (
    <div className="error_page_container">
      <img src={Cat} alt="error-crying-cat" />
      <h1>{errorMessage}</h1>
      <Link to={`/articles/${article}`}>
        <button onClick={resetErrorState}> Take me back</button>
      </Link>
    </div>
  );
};

export default Error;
