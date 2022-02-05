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
import Videod from "./pages/Infomaterjalid/videod";
import TeadusuuringuteLingid from "./pages/Infomaterjalid/teadusuuringuteLingid";
import KoroonastEmotsioonideta from "./pages/Infomaterjalid/koroonastEmotsioonideta";
import MassvaktsineerimisePooltJaVastu from "./pages/Infomaterjalid/massvaktsineerimisePooltJaVastu";
import Epidemioloogidelt from "./pages/Infomaterjalid/Epidemioloogidelt";
import MuudHuvitavat from "./pages/Infomaterjalid/MuudHuvitavat";
import T6mbetuulesArstikunst from "./pages/Infomaterjalid/t6mbetuulesArstikunst";
import JarvisteVastulause from "./pages/Infomaterjalid/jarvisteVastulause";

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
      </Routes>
    </div>
  );
}

export default App;
