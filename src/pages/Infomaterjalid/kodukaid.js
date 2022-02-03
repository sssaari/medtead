import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./infomaterjalid.css";
import { Link } from "react-router-dom";

function Kodukaid() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM">
            <h1>Lingid kodulehekülgedele</h1>
            <a target="_blank" href="https://mottekoda.ee/">
              <li>MTÜ Mõttekoda Terve Laps - Terve Ühiskond</li>
            </a>
            <a
              target="_blank"
              href="https://www.tekabinet.ee/funktsionaalne-meditsiin/"
            >
              <li>Teadliku Eluviisi Kabinet</li>
            </a>
            <a target="_blank" href="https://collateralglobal.org/">
              <li>
                Collateral Global - Cultivating a better understanding of the
                impact of the COVID-19 responses
              </li>
            </a>
            <a target="_blank" href="https://www.teadusuudis.ee/">
              <li>Teadusuudised</li>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kodukaid;
