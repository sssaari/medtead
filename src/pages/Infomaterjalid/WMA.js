import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./infomaterjalid.css";

function Who() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM pdfArticle">
            <h1>Maailma Arstide Liidu eetikakoodeks</h1>
            {/*<iframe
              id="iframepdf"
              title="WMAPdf"
              className="pdfviewer"
              src="../../pdfarticles/WMAarstideeetikakoodeks.pdf"
              height="90%"
              width="100%"
            ></iframe>*/}
            <img
              src="../../pdfarticles/WMAarstideeetikakoodeks-1.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/WMAarstideeetikakoodeks-2.jpg"
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

export default Who;
