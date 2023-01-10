import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../utils/api";
// import Loading from "./Loading";

const ArticleTopicsBar = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [topics, setTopics] = useState();

  useEffect(() => {
    fetchTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div>
      <div className="navbar__div">
        <Link to="/articles">
          <p> All </p>
        </Link>
        {topics !== undefined &&
          topics.map((topic) => {
            return (
              <Link to={`/articles/topics/${topic.slug}`} key={topic.slug}>
                <p>{topic.slug}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default ArticleTopicsBar;
