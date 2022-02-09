import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

import pdfArticle from "../../static/ISTUNG RIIGIKOGUS LASTE VAKTSINEERIMISE TEEMAL 08-02-2022.pdf";

function Pressinurk4() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM pdfArticle">
            <h1>Istung Riigikogus laste vaktsineerimise teemal 08.02.2022</h1>
            <a
              href={pdfArticle}
              target="_blank"
              rel="noreferrer"
              className="pdfArticleLink"
            >
              Ava PDF
            </a>
            <img
              src="../../pdfarticles/ISTUNG RIIGIKOGUS LASTE VAKTSINEERIMISE TEEMAL 08-02-2022-1.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/ISTUNG RIIGIKOGUS LASTE VAKTSINEERIMISE TEEMAL 08-02-2022-2.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/ISTUNG RIIGIKOGUS LASTE VAKTSINEERIMISE TEEMAL 08-02-2022-3.jpg"
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

export default Pressinurk4;
