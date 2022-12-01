import "./Header.css";
import { Link } from "react-router-dom";
import Music from "./music";
import Web from "./web";

const Header = () => {
  return (
    <div className="container-header">
      <div className="left">
        <div className="name">Pierre Guerineau</div>
        <Link to="/music" className="section">
          music
        </Link>
      </div>
      <div className="right">
        <Link to="/web" className="section">
          web
        </Link>
        <span className="section">contact</span>
      </div>
      <div className="sections"></div>
    </div>
  );
};

export default Header;
