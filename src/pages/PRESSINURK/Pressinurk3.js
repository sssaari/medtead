import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

import pdfArticle from "../../static/COVID-19 läbipõdenute tunnustamine. MTÜ Ühinenud Meedikud ja Teadlased seisukoht.pdf";

function Pressinurk3() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM pdfArticle">
            <h1>Covid-19 läbipõdenute tunnustamine</h1>
            <a
              href={pdfArticle}
              target="_blank"
              rel="noreferrer"
              className="pdfArticleLink"
            >
              Ava PDF
            </a>
            <img
              src="../../pdfarticles/COVID-19 läbipõdenute tunnustamine. MTÜ Ühinenud Meedikud ja Teadlased seisukoht-1.jpg"
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

export default Pressinurk3;
