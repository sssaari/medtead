import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./infomaterjalid.css";

function Saarmalt() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM lingid">
            <h1>Kaari Saarmalt</h1>
            <Link to="/Infomaterjalid/Kaari-Saarmalt/pressikonverents-eesti-teadlaste-ja-immunoloogidega-27.09.21">
              <li>
                Pressikonverents Eesti teadlaste ja immunoloogidega 27.09.21
              </li>
            </Link>
            <Link to="/Infomaterjalid/Kaari-Saarmalt/labipodemine-vorreldes-vaktsineerimisega-annab-parema-kaitse-koroonaviiruse-vastu">
              <li>
                Läbipõdemine võrreldes vaktsineerimisega annab parema kaitse
                koroonaviiruse vastu
              </li>
            </Link>
            <Link to="/Infomaterjalid/Kaari-Saarmalt/tervete-laste-vaktsineerimine-covid-19-suhtes-ei-ole-soovitatav">
              <li>
                Laste vaktsineerimise teemaline arutelu Riigikogu
                sotsiaalkomisjoni istungil 16.11.2021
              </li>
            </Link>
            <Link to="/Infomaterjalid/Kaari-Saarmalt/covid-19-labipodenuid-diskrimineeritakse-alusetult">
              <li>Covid-19 läbipõdenuid diskrimineeritakse alusetult</li>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Saarmalt;
