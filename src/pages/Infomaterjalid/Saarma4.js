import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./infomaterjalid.css";
import pdfArticle from "../../static/Covid-19-läbipõdenuid-diskrimineeritakse-alusetult_071221.pdf";

function Saarma4() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM pdfArticle">
            <h1>Covid-19 läbipõdenuid diskrimineeritakse alusetult</h1>
            <a
              href={pdfArticle}
              target="_blank"
              rel="noreferrer"
              className="pdfArticleLink"
            >
              Ava PDF
            </a>
            <img
              src="../../pdfarticles/Covid-19-läbipõdenuid-diskrimineeritakse-alusetult_071221-1.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Covid-19-läbipõdenuid-diskrimineeritakse-alusetult_071221-2.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Covid-19-läbipõdenuid-diskrimineeritakse-alusetult_071221-3.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Covid-19-läbipõdenuid-diskrimineeritakse-alusetult_071221-4.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Covid-19-läbipõdenuid-diskrimineeritakse-alusetult_071221-5.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Covid-19-läbipõdenuid-diskrimineeritakse-alusetult_071221-6.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Covid-19-läbipõdenuid-diskrimineeritakse-alusetult_071221-7.jpg"
              alt=""
              className="pdfImage"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saarma4;
