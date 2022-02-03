import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

function Kontakt() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="pageImg.jpg" alt="" />
        </div>
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
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdHMFfNsqjZ5Uyyag0Q9aBwuu8A-rMeLoK7cGWyMbY-kMmR5w/viewform"
              >
                <button className="liikmeavaldus">MTÜ liikmeavaldus</button>
              </a>
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
