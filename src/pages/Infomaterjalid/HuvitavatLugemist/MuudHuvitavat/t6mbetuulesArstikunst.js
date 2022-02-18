import Navbar from "../../../../components/Navbar/Navbar";
import "../../infomaterjalid.css";

import pdfArticle from "../../../../static/Teaduse ja progressi tõmbetuules arstikunst.pdf";

function T6mbetuulesArstikunst() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM pdfArticle">
            <h1>Teaduse ja progressi tõmbetuules arstikunst</h1>
            <h3>
              <em>oktoober 2021</em>
              <a
                href={pdfArticle}
                target="_blank"
                rel="noreferrer"
                className="pdfArticleLink"
              >
                Ava PDF
              </a>
            </h3>

            <img
              src="../../pdfarticles/Teaduse ja progressi tõmbetuules arstikunst-1.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Teaduse ja progressi tõmbetuules arstikunst-2.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Teaduse ja progressi tõmbetuules arstikunst-3.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Teaduse ja progressi tõmbetuules arstikunst-4.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Teaduse ja progressi tõmbetuules arstikunst-5.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Teaduse ja progressi tõmbetuules arstikunst-6.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Teaduse ja progressi tõmbetuules arstikunst-7.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Teaduse ja progressi tõmbetuules arstikunst-8.jpg"
              alt=""
              className="pdfImage"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T6mbetuulesArstikunst;
