import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./infomaterjalid.css";

function Saarma1() {
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
              Pressikonverents Eesti teadlaste ja immunoloogidega 27.09.21
            </h1>

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

export default Saarma1;
