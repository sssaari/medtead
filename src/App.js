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
import SeinastSeina from "./pages/Infomaterjalid/seinastSeina";
import TeadusuuringuteLingid from "./pages/Infomaterjalid/teadusuuringuteLingid";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Avaleht />} />
        <Route path="/Poordumised" exact element={<Poordumised />} />
        <Route path={"/Artikkel/:articleID"} element={<Artikkel />} />
        <Route path="/Pressinurk" exact element={<Pressinurk />} />
        <Route path="/Infomaterjalid" exact element={<Infomaterjalid />} />
        <Route path="/Kontakt" exact element={<Kontakt />} />
        <Route path="/Pohikiri" exact element={<Pohikiri />} />
        <Route path="/wma-arstide-eetikakoodeks" exact element={<Who />} />
        <Route
          path="/lingid-teadusuuringutele"
          exact
          element={<TeadusuuringuteLingid />}
        />
        <Route path="/seinast-seina" exact element={<SeinastSeina />} />
        <Route path="/videod" exact element={<Videod />} />
        <Route path="/huvitavat-lugemist" exact element={<Huvitavat />} />
        <Route path="/erinevaid-kodulehekulgi" exact element={<Kodukaid />} />
      </Routes>
    </div>
  );
}

export default App;
