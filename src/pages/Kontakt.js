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
            <p>
              <strong>E-mail:</strong> meedikud.teadlased@gmail.com
            </p>
            <p>
              <strong>Aadress:</strong> MTÜ aadress Saaremaa, Vanalõve küla ,
              Leieri talu, 94318
            </p>
            <p>
              <strong>Arvelduskonto:</strong> a/a LHV EE587700771007269270
              <br />
              Aasta liikmemaks 30 EUR
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kontakt;
