import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import getArticle from "./ArticleTexts";
import Poordumine3003 from "./Poordumine3003";

function Artikkel() {
  let { articleID } = useParams();

  return (
    <div>
      <Navbar />
      <div className="pageImgContainer">
        <img className="pageImg" src="../../pageImg.jpg" alt="" />
      </div>
      {articleID.toString() === "00010" && <Poordumine3003 />}
      {articleID.toString() !== "00010" && (
        <div className="containerArticle">
          {getArticle().map((element) => {
            if (element.articleID === articleID) {
              return (
                <div key={element.articleID} className="articleCard">
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
      )}
    </div>
  );
}

export default Artikkel;
