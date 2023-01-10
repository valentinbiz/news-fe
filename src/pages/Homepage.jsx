import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage__div">
      <h1> !falsey news</h1>
      <h2>
        The platform with totally true, verified news platform <br /> where the
        truth gets a new meaning.
      </h2>
      <Link to="/articles">
        <button> Explore articles</button>
      </Link>
    </div>
  );
};

export default Homepage;
