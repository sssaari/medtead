import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import Poordumised from "./pages/Poordumised";
import Pressinurk from "./pages/Pressinurk";
import Infomaterjalid from "./pages/Infomaterjalid";
import Kontakt from "./pages/Kontakt";
import Pohikiri from "./pages/Pohikiri";
import Artikkel from "./pages/Artikkel";
import Who from "./pages/Infomaterjalid/WMA";
import Kodukaid from "./pages/Infomaterjalid/kodukaid";
import Huvitavat from "./pages/Infomaterjalid/huvitavatLugemist";
import Ravisoovitused from "./pages/Infomaterjalid/Ravisoovitused";
import Videod from "./pages/Infomaterjalid/videod";
import TeadusuuringuteLingid from "./pages/Infomaterjalid/teadusuuringuteLingid";
import KoroonastEmotsioonideta from "./pages/Infomaterjalid/koroonastEmotsioonideta";
import MassvaktsineerimisePooltJaVastu from "./pages/Infomaterjalid/massvaktsineerimisePooltJaVastu";
import Epidemioloogidelt from "./pages/Infomaterjalid/Epidemioloogidelt";
import MuudHuvitavat from "./pages/Infomaterjalid/MuudHuvitavat";
import Saarmalt from "./pages/Infomaterjalid/Saarmalt";
import Raamatud from "./pages/Infomaterjalid/Raamatud";
import DepressioonilOnMituNagu from "./pages/Infomaterjalid/DepressioonilOnMituNagu";
import T6mbetuulesArstikunst from "./pages/Infomaterjalid/t6mbetuulesArstikunst";
import JarvisteVastulause from "./pages/Infomaterjalid/jarvisteVastulause";
import MiksVaksImikuid from "./pages/Infomaterjalid/MiksVaksImikuid";
import Pressinurk1 from "./pages/PRESSINURK/Pressinurk1";
import Pressinurk2 from "./pages/PRESSINURK/Pressinurk2";
import Pressinurk3 from "./pages/PRESSINURK/Pressinurk3";
import Pressinurk4 from "./pages/PRESSINURK/Pressinurk4";
import Pressinurk5 from "./pages/PRESSINURK/Pressinurk5";
import Saarma2 from "./pages/Infomaterjalid/Saarma2";
import Saarma4 from "./pages/Infomaterjalid/Saarma4";

import Teaduslink1 from "./pages/Infomaterjalid/Teaduslink1";
import KuidasDisainida from "./pages/Infomaterjalid/KuidasDisainida";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Avaleht />} />
        <Route path="/Poordumised" exact element={<Poordumised />} />
        <Route
          path={"/Poordumised/Artikkel/:articleID"}
          element={<Artikkel />}
        />
        <Route path="/Pressinurk" exact element={<Pressinurk />} />
        <Route path="/Infomaterjalid" exact element={<Infomaterjalid />} />
        <Route path="/Kontakt" exact element={<Kontakt />} />
        <Route path="/Pohikiri" exact element={<Pohikiri />} />
        <Route
          path="/Infomaterjalid/wma-arstide-eetikakoodeks"
          exact
          element={<Who />}
        />
        <Route
          path="/Infomaterjalid/lingid-teadusuuringutele"
          exact
          element={<TeadusuuringuteLingid />}
        />
        <Route
          path="/Infomaterjalid/ravisoovitused"
          exact
          element={<Ravisoovitused />}
        />
        <Route path="/Infomaterjalid/videod" exact element={<Videod />} />
        <Route
          path="/Infomaterjalid/huvitavat-lugemist"
          exact
          element={<Huvitavat />}
        />
        <Route
          path="/Infomaterjalid/Muud-huvitavat"
          exact
          element={<MuudHuvitavat />}
        />
        <Route path="/Infomaterjalid/Raamatud" exact element={<Raamatud />} />
        <Route
          path="/Infomaterjalid/Raamatud/depressioonil-on-mitu-nagu-airi-varnik"
          exact
          element={<DepressioonilOnMituNagu />}
        />
        <Route
          path="/Infomaterjalid/erinevaid-kodulehekulgi"
          exact
          element={<Kodukaid />}
        />
        <Route
          path="/Infomaterjalid/Muud-huvitavat/koroonast-emotsioonideta"
          exact
          element={<KoroonastEmotsioonideta />}
        />
        <Route
          path="/Infomaterjalid/Muud-huvitavat/teaduse-ja-progressi-tombetuules-arstikunst"
          exact
          element={<T6mbetuulesArstikunst />}
        />
        {/* <Route
          path="/Infomaterjalid/Muud-huvitavat/kuidas-disainida-ohutut-vaktsiini"
          exact
          element={<KuidasDisainida />}
        /> */}
        <Route
          path="/Infomaterjalid/Kaari-Saarmalt"
          exact
          element={<Saarmalt />}
        />
        <Route
          path="/Infomaterjalid/Epidemioloogidelt"
          exact
          element={<Epidemioloogidelt />}
        />

        <Route
          path="/Infomaterjalid/Epidemioloogidelt/massvaktsineerimise-poolt-ja-vastu"
          exact
          element={<MassvaktsineerimisePooltJaVastu />}
        />
        <Route
          path="/Infomaterjalid/Epidemioloogidelt/antonina-jarviste-vastulause"
          exact
          element={<JarvisteVastulause />}
        />
        <Route
          path="/Infomaterjalid/Epidemioloogidelt/miks-vaktsineeritakse-imikuid-neile-ebavajaliku-B-hepatiidi-vaktsiiniga"
          exact
          element={<MiksVaksImikuid />}
        />
        <Route
          path="/Pressinurk/pressikonverents-eesti-teadlaste-ja-immunoloogidega-27-09-2021"
          exact
          element={<Pressinurk1 />}
        />
        <Route
          path="/Pressinurk/laste-vaktsineerimise-teemaline-arutelu-riigikogu-sotsiaalkomisjoni-istungil-16-11-2021"
          exact
          element={<Pressinurk2 />}
        />
        <Route
          path="/Pressinurk/covid-19-labipodenute-tunnustamine"
          exact
          element={<Pressinurk3 />}
        />
        <Route
          path="/Pressinurk/istung-riigikogus-laste-vaktsineerimise-teemal-08-02-2022"
          exact
          element={<Pressinurk4 />}
        />
        <Route
          path="/Pressinurk/tervete-laste-vaktsineerimine-covid-19-suhtes-ei-ole-soovitatav-08-02-2022"
          exact
          element={<Pressinurk5 />}
        />
        <Route
          path="/Infomaterjalid/Kaari-Saarmalt/labipodemine-vorreldes-vaktsineerimisega-annab-parema-kaitse-koroonaviiruse-vastu"
          exact
          element={<Saarma2 />}
        />

        <Route
          path="/Infomaterjalid/Kaari-Saarmalt/covid-19-labipodenuid-diskrimineeritakse-alusetult"
          exact
          element={<Saarma4 />}
        />
        <Route
          path="/Infomaterjalid/lingid-teadusuuringutele/innate-immune-suppression-by-SARS-CoV-2-mRNA-vaccinations:-the-role-of-G-quadruplexes,-exosomes-and-microRNAs-21.01.2022"
          exact
          element={<Teaduslink1 />}
        />
      </Routes>
    </div>
  );
}

export default App;
