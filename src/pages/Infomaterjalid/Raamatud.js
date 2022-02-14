import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Raamatud() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../pageImg.jpg" alt="" />
        </div>

        <div className="containerArticle">
          <div className="articleCardIM lingid">
            <h1>Raamatud</h1>
            <Link to="/Infomaterjalid/Raamatud/depressioonil-on-mitu-nagu-airi-varnik">
              <li>Airi Värnik - Depressioonil on mitu nägu - 2022</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Raamatud;
