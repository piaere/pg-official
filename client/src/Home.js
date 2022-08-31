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
        <img src={pg} alt="portrait" className="portrait"></img>
      </div>
        {/* <Scroll /> */}
    </>
  );
};

export default Home;
