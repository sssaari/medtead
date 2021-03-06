import { Link, Router, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import getArticle from "./ArticleTexts";

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
        {getArticle().map((element) => {
          if (element.articleType === "poordumine") {
            return (
              <div className="card">
                <div className="cardText">
                  <div className="card-image">{element.img}</div>
                  <div className="artTitle">{element.title}</div>
                  <div className="artPrevText">{element.preview}</div>

                  <Link
                    to={"/Poordumised/Artikkel/" + element.articleID}
                    className="loeEdasi"
                  >
                    LOE EDASI
                  </Link>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </section>
      <Footer />
    </div>
  );
}

export default Poordumised;
