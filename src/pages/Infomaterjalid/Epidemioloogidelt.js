import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import getArticle from "../ArticleTexts";

function Epidemioloogidelt() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../../pageImg.jpg" alt="" />
        </div>
        <div className="containerArticle">
          <div className="articleCardIM">
            <h1>Epidemioloogidelt</h1>
            <Link to="/Infomaterjalid/Epidemioloogidelt/miks-vaktsineeritakse-imikuid-neile-ebavajaliku-B-hepatiidi-vaktsiiniga?">
              <li>
                Antonina Järviste - Miks vaktsineeritakse imikuid neile
                ebavajaliku B-hepatiidi vaktsiiniga? - 01.03.2018
              </li>
            </Link>
            <a
              target="blank"
              href="https://arhiiv.saartehaal.ee/2018/03/28/massvaktsineerimist-ei-ole-tarvis/"
            >
              <li>
                Antonina Järviste - Massvaktsineerimist ei ole tarvis -
                28.03.2018 Saarte Hääl
              </li>
            </a>
            <Link to="/Infomaterjalid/Epidemioloogidelt/massvaktsineerimise-poolt-ja-vastu">
              <li>
                Massvaktsineerimise poolt ja vastu - 05.04.2018
                Meditsiiniuudised
              </li>
            </Link>
            <a
              target="blank"
              href="https://arvamus.postimees.ee/6546163/ene-margit-tiit-vaikesed-kirstud-ja-suured-arvud"
            >
              <li>
                Ene-Margit Tiit - Väikesed kirstud ja suured arvud - 16.03.2019
                Postimees
              </li>
            </a>
            <Link to="/Infomaterjalid/Epidemioloogidelt/antonina-jarviste-vastulause">
              <li>
                Antonina Järviste vastulause PM artiklile “Väikesed kirstud ja
                suured arvud” 20.03.2019
              </li>
            </Link>
            <a
              target="blank"
              href="https://www.eestiklubi.ee/2021/11/10/nouanded-teadusnoukojale/"
            >
              <li>Jaak Uibu - Nõuandeid teadusnõukojale - 10.11.2021</li>
            </a>
            <a
              target="blank"
              href="https://www.eestiklubi.ee/2021/12/15/jargmised-nouanded-teadusnoukojale/"
            >
              <li>
                Jaak Uibu - Järgmised nõuanded teadusnõukojale - 15.12.2021
              </li>
            </a>
            <a
              target="blank"
              href="https://www.eesti.ca/dr-jaak-uibu-presidendi-tark-rahvas-vajab-tarka-riigikogu/article58882"
            >
              <li>
                Jaak Uibu - Presidendi tark rahvas vajab tarka riigikogu -
                10.01.2022 (Estonian World Review)
              </li>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Epidemioloogidelt;
