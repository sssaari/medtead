import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./infomaterjalid.css";

function MassvaktsineerimisePooltJaVastu() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM pdfArticle">
            <h1>Massvaktsineerimise poolt ja vastu</h1>

            <img
              src="../../pdfarticles/Massvaktsineerimise-poolt-ja-vastu-2018-1.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Massvaktsineerimise-poolt-ja-vastu-2018-2.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Massvaktsineerimise-poolt-ja-vastu-2018-3.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Massvaktsineerimise-poolt-ja-vastu-2018-4.jpg"
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

export default MassvaktsineerimisePooltJaVastu;
