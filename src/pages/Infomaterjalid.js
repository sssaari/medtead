import { Link, Route, Routes } from "react-router-dom";
import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";

function Infomaterjalid() {
  return (
    <div>
      <NavbarPage />
      <img className="pageImg" src="pageImg.jpg" alt="" />
      <div>
        <h1>INFOMATERJALID</h1>
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

export default Infomaterjalid;
