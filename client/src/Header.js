import "./Header.css";

const Header = () => {
  return (
    <div className="container-header">
      <div className="left">
      <div className="name">Pierre Guerineau</div>
        <span className="section">music</span>

      </div>
      <div className="right">
        <span className="section">web</span>
        <span className="section">contact</span>

      </div>
      <div className="sections">
      </div>
    </div>
  );
};

export default Header;
