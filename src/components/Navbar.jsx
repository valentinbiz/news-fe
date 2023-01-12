import { Link } from "react-router-dom";

import "../styles/NavbarStyle.css";

const Navbar = () => {
  return (
    <div className="navbar__div">
      <Link to="/">
        <p> Home </p>
      </Link>
      <Link to="/articles">
        <p>Articles</p>
      </Link>
    </div>
  );
};

export default Navbar;
