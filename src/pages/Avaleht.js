import { Link, Route, Routes } from "react-router-dom";
import NavbarHome from "../components/NavbarHome/NavbarHome";
import FooterHome from "../components/FooterHome";
import Navbar from "../components/Navbar/Navbar";

function Avaleht() {
  return (
    <div className="bgImg">
      <NavbarHome />
      <div className="homepageBigname">
        <div className="homepageBigtext">ÜHINENUD MEEDIKUD JA TEADLASED</div>
      </div>
      <section className="containerHome">
        <div className="cardHome">
          Meile, MTÜ Ühinenud Meedikud ja Teadlased liikmetele, on oluline ja
          südamelähedane hoida oma ameti eetilisi ja moraalseid väärtusi.
          <br />
          <br />
          Meile on tähtis rahva füüsiline ja vaimne tervis ning heaolu, mis
          suurelt osalt sõltub tervishoius toimuvast. Me peame oluliseks
          bioeetilisi ja moraalseid kokkuleppeid.
          <br />
          <br />
          Samuti leiame, et riik peab tagama põhiseaduslikud õigused kõigile,
          ilma igasuguste eranditeta.
          <br />
          <br />
          Ootame meiega ühinema meedikuid ja eri teadusvaldkondade esindajaid,
          kes soovivad toetada läbipaistvat, ausat, teaduspõhist ja eetilist
          meditsiini ning anda oma panuse selle teema arutelusse ja sellele
          tuginevasse poliitikasse.
          <br />
          <br />
          Meie MTÜ eesmärk on koostada ja avaldada väljapeetud vormis avalikke
          kirju ning pöördumisi, teha teabenõudeid ja rahvaalgatusi ning
          korraldada seminare, konverentse ja pressikonverentse.
          <br />
          <br />
          MTÜ-siseselt on liikmelisus avalik.
          <br />
          <br />
          MTÜ Ühinenud Meedikud ja Teadlased on äriregistris kandega nr.
          80605668
          <br />
        </div>
      </section>

      <FooterHome />
    </div>
  );
}

export default Avaleht;
