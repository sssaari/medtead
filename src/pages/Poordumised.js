import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import getArticle from "./Articles";

function Poordumised() {
  return (
    <div>
      <Navbar />
      <img className="pageImg" src="pageImg.jpg" alt="" />
      <div>
        <h1>PÖÖRDUMISED</h1>
      </div>
      <section className="container">
        {getArticle().map((element) => (
          <div className="card">
            <div className="cardText">
              <div className="card-image">{element.img}</div>
              <div className="artTitle">{element.title}</div>
              <div className="artPrevText">{element.preview}</div>

              <Link to="" className="loeEdasi">
                LOE EDASI
              </Link>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Poordumised;
