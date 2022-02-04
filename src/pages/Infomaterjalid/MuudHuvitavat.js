import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./infomaterjalid.css";

function MuudHuvitavat() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM">
            <h1>Muud huvitavat</h1>
            <Link to="/Infomaterjalid/Muud-huvitavat/koroonast-emotsioonideta">
              <li>Arro, Alas, Hudson - Koroonast emotsioonideta - sept 2021</li>
            </Link>
            <Link to="/Infomaterjalid/Muud-huvitavat/teaduse-ja-progressi-tombetuules-arstikunst">
              <li>
                Riin Sildos - Teaduse ja progressi tõmbetuules arstikunst - okt
                2021
              </li>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MuudHuvitavat;
