import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import getArticle from "./ArticleTexts";

function Pressinurk() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="pageImg.jpg" alt="" />
        </div>

        <h1>PRESSINURK</h1>
      </div>
      <section className="container">
        {getArticle().map((element) => {
          if (element.articleType === "pressinurk") {
            return (
              <div className="card">
                <div className="cardText">
                  <div className="card-image">{element.img}</div>
                  <div className="artTitle">{element.title}</div>
                  <div className="artPrevText">{element.preview}</div>
                  <Link
                    to={
                      "" +
                      element.title
                        .toLowerCase()
                        .replaceAll(" ", "-")
                        .replaceAll(".", "-")
                        .replaceAll("ä", "a")
                        .replaceAll("õ", "o")
                    }
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

export default Pressinurk;
