import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Huvitavat() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../pageImg.jpg" alt="" />
        </div>

        <div className="containerArticle">
          <div className="articleCardIM">
            <h1>Huvitavat lugemist</h1>
            <Link to="/Infomaterjalid/Epidemioloogidelt">
              <li>Epidemioloogidelt</li>
            </Link>
            <Link to="/Infomaterjalid/Muud-huvitavat">
              <li>Muud huvitavat</li>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Huvitavat;
