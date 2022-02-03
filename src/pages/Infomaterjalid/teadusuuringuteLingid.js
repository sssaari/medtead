import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./infomaterjalid.css";

function TeadusuuringuteLingid() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM">
            <h1>Lingid teadusuuringutele</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeadusuuringuteLingid;
