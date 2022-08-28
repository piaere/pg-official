import "./Home.css";
import pg from "./images/pg-blue.jpg";
import fsa from "./images/fsa.jpeg";
import md from "./images/md.jpeg";
import newPath from "./images/newPath.jpeg";

const Home = () => {
  return (
    <>
      <div className="first">
        <h1>
          <span className="name">Pierre Guerineau</span>
          <div className="title">is a music producer and web developer</div>
        </h1>
        <img src={pg} alt="portrait" className="portrait"></img>
      </div>
      <div className="scrollContainer">
        <div className="scrollSection">
          <img src={fsa} alt="fsa" className="img-scroll"></img>
          <img src={md} alt="md" className="img-scroll"></img>
          <img src={newPath} alt="newPath" className="img-scroll"></img>
        </div>
      </div>
      <h2>
        <span className="category">music</span>
        <span className="category">web</span>
      </h2>
    </>
  );
};

export default Home;
