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
      <Footer />
    </div>
  );
}

export default Infomaterjalid;
