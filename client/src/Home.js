import "./Home.css";
// import Scroll from "./Scroll";
import Header from "./Header";
import pg from "./images/pg-blue.jpg";

const Home = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="container">
        <div className="description">RECORD PRODUCER / WEB DEVELOPER</div>
        <img src={pg} alt="portrait" className="portrait"></img>
      </div>
      {/* <Scroll /> */}
    </>
  );
};

export default Home;
