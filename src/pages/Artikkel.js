import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import getArticle from "./ArticleTexts";

function Artikkel() {
  let { articleID } = useParams();

  return (
    <div>
      <Navbar />
      <img className="pageImg" src="pageImg.jpg" alt="" />
      <div className="containerArticle">
        {getArticle().map((element) => {
          if (element.articleID === articleID) {
            return (
              <div className="articleCard">
                <div className="card-image">{element.img}</div>
                <div className="artTitle">{element.title}</div>
                <div className="artText">{element.fullText}</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Artikkel;
