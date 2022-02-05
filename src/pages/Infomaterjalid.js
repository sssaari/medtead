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
      </div>
      <div className="containerArticle">
        <div className="articleCardIM">
          <h1>INFOMATERJALID</h1>
          <div>
            {MenuItems.map((item, index) => {
              return (
                <Link className={item.cName} to={item.path} key={index}>
                  {item.title.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Infomaterjalid;
