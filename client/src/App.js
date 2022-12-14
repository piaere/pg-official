import Header from "./Header";

import Home from "./Home";
import Music from "./music";
import Web from "./web";
import "./Global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/web" element={<Web />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
