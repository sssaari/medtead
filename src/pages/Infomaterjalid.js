import { Link, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import { MenuItems } from "../components/MenuItems";

function Infomaterjalid() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="pageImg.jpg" alt="" />
        </div>
        <h1>INFOMATERJALID</h1>
      </div>

      <div className="containerArticle">
        <div className="articleCardIM">
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <Link className={item.cName} to={item.path}>
                  <li key={index}>{item.title.toUpperCase()}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Infomaterjalid;
