import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

import pdfArticle from "../../static/Pressikonverents-Eesti-teadlaste-ja-immunoloogidega-27.09.21.pdf";

function Pressinurk1() {
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
              Pressikonverents Eesti teadlaste ja immunoloogidega 27.09.2021
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
              src="../../pdfarticles/Pressikonverents-Eesti-teadlaste-ja-immunoloogidega-27.09.21-1.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Pressikonverents-Eesti-teadlaste-ja-immunoloogidega-27.09.21-2.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Pressikonverents-Eesti-teadlaste-ja-immunoloogidega-27.09.21-3.jpg"
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

export default Pressinurk1;
