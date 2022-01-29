import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

function Kontakt() {
  return (
    <div>
      <Navbar />
      <img className="pageImg" src="pageImg.jpg" alt="" />
      <div>
        <div className="containerArticle">
          <div className="articleCard">
            <h1>KONTAKT</h1>
            <br />
            <p>
              <strong>E-mail:</strong> meedikud.teadlased@gmail.com
              <br />
              <br />
            </p>
            <p>
              <strong>Aadress:</strong> MTÜ aadress Saaremaa, Vanalõve küla ,
              Leieri talu, 94318
              <br />
              <br />
            </p>
            <p>
              <strong>Arvelduskonto:</strong> a/a LHV EE587700771007269270
              <br />
              <br />
              Aasta liikmemaks 30 EUR
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kontakt;
