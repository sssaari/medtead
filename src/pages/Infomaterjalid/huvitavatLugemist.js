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
          <div className="articleCardIM lingid">
            <h1>Huvitavat lugemist</h1>
            <Link to="/Infomaterjalid/Epidemioloogidelt">
              <li>EPIDEMIOLOOGIDELT</li>
            </Link>
            <Link to="/Infomaterjalid/Kaari-Saarmalt">
              <li>KAARI SAARMALT</li>
            </Link>
            <Link to="/Infomaterjalid/Muud-huvitavat">
              <li>MUUD HUVITAVAT</li>
            </Link>
            <Link to="/Infomaterjalid/Raamatud">
              <li>RAAMATUD</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Huvitavat;
