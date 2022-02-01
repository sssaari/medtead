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
            <h1>WHO arstide eetikakoodeks</h1>

            <embed
              src="../../pdfarticles/WHO arstide eetikakoodeks.pdf"
              width="100%"
              height="90%"
            ></embed>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Who;
