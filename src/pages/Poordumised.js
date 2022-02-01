import { Link, Router, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import getArticle from "./ArticleTexts";
import Artikkel from "./Artikkel";

function Poordumised() {
  return (
    <div>
      <Navbar />

      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="pageImg.jpg" alt="" />
        </div>
        <h1>PÖÖRDUMISED</h1>
      </div>
      <section className="container">
        {getArticle().map((element) => (
          <div className="card">
            <Link to={"/Artikkel/" + element.articleID}>
              <div className="cardText" onClick={console.log("artiklivajutus")}>
                <div className="card-image">{element.img}</div>
                <div className="artTitle">{element.title}</div>
                <div className="artPrevText">{element.preview}</div>

                <div className="loeEdasi">LOE EDASI</div>
              </div>
            </Link>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Poordumised;
