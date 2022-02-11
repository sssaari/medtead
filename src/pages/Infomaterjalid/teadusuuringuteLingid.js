import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./infomaterjalid.css";
import pdfArticle from "../../static/Innate Immune Suppression by SARS-CoV-2.pdf";

function TeadusuuringuteLingid() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM">
            <h1>Lingid teadusuuringutele</h1>
            <a
              href={pdfArticle}
              target="_blank"
              rel="noreferrer"
              className="pdfArticleLink"
            >
              <li>
                Innate Immune Suppression by SARS-CoV-2 mRNA Vaccinations: The
                role of G-quadruplexes, exosomes and microRNAs 21.01.2022
              </li>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeadusuuringuteLingid;
