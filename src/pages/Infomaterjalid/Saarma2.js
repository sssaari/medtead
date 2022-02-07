import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./infomaterjalid.css";
import pdfArticle from "../../static/Läbipõdemine-võrreldes-vaktsineerimisega-annab-parema-kaitse-koroonaviiruse-vastu.pdf";

function Saarma2() {
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
              Läbipõdemine võrreldes vaktsineerimisega annab parema kaitse
              koroonaviiruse vastu
            </h1>
            <a
              href={pdfArticle}
              target="_blank"
              rel="noreferrer"
              className="pdfArticleLink"
            >
              Ava PDF
            </a>
            <img
              src="../../pdfarticles/Läbipõdemine-võrreldes-vaktsineerimisega-annab-parema-kaitse-koroonaviiruse-vastu-1.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Läbipõdemine-võrreldes-vaktsineerimisega-annab-parema-kaitse-koroonaviiruse-vastu-2.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Läbipõdemine-võrreldes-vaktsineerimisega-annab-parema-kaitse-koroonaviiruse-vastu-3.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Läbipõdemine-võrreldes-vaktsineerimisega-annab-parema-kaitse-koroonaviiruse-vastu-4.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Läbipõdemine-võrreldes-vaktsineerimisega-annab-parema-kaitse-koroonaviiruse-vastu-5.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Läbipõdemine-võrreldes-vaktsineerimisega-annab-parema-kaitse-koroonaviiruse-vastu-6.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Läbipõdemine-võrreldes-vaktsineerimisega-annab-parema-kaitse-koroonaviiruse-vastu-7.jpg"
              alt=""
              className="pdfImage"
            ></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Saarma2;
