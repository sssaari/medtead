import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Poordumised() {
  return (
    <div>
      <Navbar />
      <img className="pageImg" src="pageImg.jpg" alt="" />
      <div>
        <h1>PÖÖRDUMISED</h1>
      </div>
      <section className="container">
        <div className="card">
          <div className="card-image"></div>
          <h2>Pealkiri</h2>
          <p>Tekst</p>
          <Link to="">LOE EDASI</Link>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <h2>Pealkiri</h2>
          <p>Tekst</p>
          <Link to="">LOE EDASI</Link>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <h2>Pealkiri</h2>
          <p>Tekst</p>
          <Link to="">LOE EDASI</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Poordumised;
