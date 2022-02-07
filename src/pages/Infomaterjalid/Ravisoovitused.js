import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./infomaterjalid.css";

function Ravisoovitused() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM">
            <h1>Ravisoovitused</h1>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ravisoovitused;