import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./infomaterjalid.css";
import pdfArticle from "../../static/Innate Immune Suppression by SARS-CoV-2.pdf";

function Teaduslink1() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM pdfArticle">
            <h1>
              Innate Immune Suppression by SARS-CoV-2 mRNA Vaccinations: The
              role of G-quadruplexes, exosomes and microRNAs
            </h1>
            <a
              href={pdfArticle}
              target="_blank"
              rel="noreferrer"
              className="pdfArticleLink"
            >
              Ava PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teaduslink1;
