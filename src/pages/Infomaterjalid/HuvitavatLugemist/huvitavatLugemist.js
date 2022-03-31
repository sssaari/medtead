import Navbar from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Huvitavat() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pageImgContainer">
          <img className="pageImg" src="../pageImg.jpg" alt="" />
        </div>

        <div className="containerArticle">
          <div className="articleCardIM lingid">
            <h1>Artiklid</h1>
            <a
              target="blank"
              href="https://www.eesti.ca/dr-jaak-uibu-presidendi-tark-rahvas-vajab-tarka-riigikogu/article58882"
            >
              <li>
                <h5 className="articleDate">10.01.2022</h5>
                Jaak Uibu - Presidendi tark rahvas vajab tarka riigikogu -
                Estonian World Review
              </li>
            </a>
            <Link to="/Infomaterjalid/Muud-huvitavat/kaur-parve-motisklus">
              <li>
                {" "}
                <h5 className="articleDate">jaan 2022</h5>Kaur Parve mõtisklus
              </li>
            </Link>
            <a
              target="blank"
              href="https://www.eestiklubi.ee/2021/12/15/jargmised-nouanded-teadusnoukojale/"
            >
              <li>
                <h5 className="articleDate">15.12.2021</h5>
                Jaak Uibu - Järgmised nõuanded teadusnõukojale
              </li>
            </a>
            <Link to="/Infomaterjalid/Kaari-Saarmalt/covid-19-labipodenuid-diskrimineeritakse-alusetult">
              <li>
                <h5 className="articleDate">07.12.2021</h5>
                Kaari Saarma - Covid-19 läbipõdenuid diskrimineeritakse
                alusetult
              </li>
            </Link>
            <a
              target="blank"
              href="https://www.eestiklubi.ee/2021/11/10/nouanded-teadusnoukojale/"
            >
              <li>
                <h5 className="articleDate">10.11.2021</h5>Jaak Uibu - Nõuandeid
                teadusnõukojale
              </li>
            </a>
            <Link to="/Infomaterjalid/Kaari-Saarmalt/labipodemine-vorreldes-vaktsineerimisega-annab-parema-kaitse-koroonaviiruse-vastu">
              <li>
                <h5 className="articleDate">08.10.2021</h5>
                Alar Aab, Kaari Saarma, Sirje Rüütel Boudinot - Läbipõdemine
                võrreldes vaktsineerimisega annab parema kaitse koroonaviiruse
                vastu
              </li>
            </Link>
            <Link to="/Infomaterjalid/Muud-huvitavat/teaduse-ja-progressi-tombetuules-arstikunst">
              <li>
                <h5 className="articleDate">okt 2021</h5>
                Riin Sildos - Teaduse ja progressi tõmbetuules arstikunst
              </li>
            </Link>
            <Link to="/Infomaterjalid/Muud-huvitavat/koroonast-emotsioonideta">
              <li>
                <h5 className="articleDate">sept 2021</h5>
                Arro, Alas, Hudson - Koroonast emotsioonideta
              </li>
            </Link>
            <Link to="/Infomaterjalid/Epidemioloogidelt/antonina-jarviste-vastulause">
              <li>
                <h5 className="articleDate">20.03.2019</h5>
                Antonina Järviste vastulause PM artiklile “Väikesed kirstud ja
                suured arvud”
              </li>
            </Link>
            <a
              target="blank"
              href="https://arvamus.postimees.ee/6546163/ene-margit-tiit-vaikesed-kirstud-ja-suured-arvud"
            >
              <li>
                <h5 className="articleDate">16.03.2019</h5>
                Ene-Margit Tiit - Väikesed kirstud ja suured arvud - Postimees
              </li>
            </a>
            <Link to="/Infomaterjalid/Epidemioloogidelt/massvaktsineerimise-poolt-ja-vastu">
              <li>
                <h5 className="articleDate">05.04.2018</h5>
                Massvaktsineerimise poolt ja vastu - Meditsiiniuudised
              </li>
            </Link>
            <a
              target="blank"
              href="https://arhiiv.saartehaal.ee/2018/03/28/massvaktsineerimist-ei-ole-tarvis/"
            >
              <li>
                <h5 className="articleDate">28.03.2018</h5>
                Antonina Järviste - Massvaktsineerimist ei ole tarvis - Saarte
                Hääl
              </li>
            </a>

            <Link to="/Infomaterjalid/Epidemioloogidelt/miks-vaktsineeritakse-imikuid-neile-ebavajaliku-B-hepatiidi-vaktsiiniga?">
              <li>
                <h5 className="articleDate">01.03.2018</h5>
                Antonina Järviste - Miks vaktsineeritakse imikuid neile
                ebavajaliku B-hepatiidi vaktsiiniga?
              </li>
            </Link>
            {/* <Link to="/Infomaterjalid/Epidemioloogidelt">
              <li>EPIDEMIOLOOGIDELT</li>
            </Link> */}
            {/* <Link to="/Infomaterjalid/Kaari-Saarmalt">
              <li>KAARI SAARMALT</li>
            </Link> */}
            {/* <Link to="/Infomaterjalid/Muud-huvitavat">
              <li>MUUD HUVITAVAT</li>
            </Link> */}
            {/* <Link to="/Infomaterjalid/Raamatud">
              <li>RAAMATUD</li>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Huvitavat;
