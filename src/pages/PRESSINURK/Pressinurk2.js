import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

import pdfArticle from "../../static/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis.pdf";

function Pressinurk2() {
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
              Laste vaktsineerimise teemaline arutelu Riigikogu
              sotsiaalkomisjoni istungil 16.11.2021
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
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-01.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-02.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-03.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-04.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-05.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-06.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-07.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-08.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-09.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-10.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-11.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-12.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Tervete-laste-vaktsineerimine-Covid-19-suhtes-ei-ole-soovitav_251121_Teadusuudis-13.jpg"
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

export default Pressinurk2;
