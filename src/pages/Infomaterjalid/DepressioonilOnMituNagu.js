import Navbar from "../../components/Navbar/Navbar";
import "./infomaterjalid.css";

function DepressioonilOnMituNagu() {
  return (
    <div>
      <Navbar />
      <div className="pageImgContainer">
        <img className="pageImg" src="../../pageImg.jpg" alt="" />
      </div>
      <div className="containerArticle">
        <div className="articleCard">
          <h1>Depressioonil on mitu nägu</h1>
          <h3>
            <em>Airi Värnik</em>
          </h3>
          <br />
          <a
            target="_blank"
            href="https://raamatud.postimees.ee/7439280/depressiooni-eest-ei-ole-keegi-kaitstud"
          >
            <em>
              Raamatu tutvustus - Depressiooni eest ei ole keegi kaitstud,
              Postimees 31.01.2022{" "}
            </em>
          </a>
          <br />
          <br />
          <img className="bookCover" src="../../airi_depressioon.jpeg" alt="" />
          <p id="depressioonText">
            Emeriitprofessor Airi Värnik on pikaajalise kogemusega kliiniline
            psühhiaater ja kahe doktorikraadiga teadlane.
            <br /> Tema vaade depressioonile ja selle ravile on avar. Ta avab
            mõisteid alates „deprekast“ kuni suitsiidiohtliku kliinilise
            depressioonini. Peavoolu seisukohtade kõrval on tähelepanu
            erinäolistel depressiooni vormidel, mille sümptomid lähtuvad
            elukaare eri lõikudest, inimese loomuse ja bioloogia eripärast ning
            keskkonna mõjuritest.
            <br />
            <br />
            Depressioon võib tabada igaüht, kuid on edukalt ravitav, kui inimene
            õpib tundma iseennast ja taltsutama oma depressiooni, rakendab
            enesehoiu erinevaid variante, laseb end abistada ja valib vajadusel
            terapeudi, kes on valmis paindlikuks koostööks. Ravi läbilõige
            ulatub tänapäevasest tõenduspõhisest ravist ja traditsioonilise
            meditsiini praktikatest kuni teraapiani psühhedeelikumidega. Siiski
            on paranemisprotsessis juhtiv roll inimesel endal, tema eneseusul.
            <br />
            <br />
            Raamatu tagakaanel soovitab neuroloogiaprofessor Toomas Toomsoo seda
            nõnda: “Vaimne tervis on tervena elatud elu ehk kõige olulisem osa.
            Et me ei langeks depressiooni, tuleb elada nii, nagu keegi sind ei
            vaataks. Traagiline on see, et inimesed, kes vajaksid depressiooni
            võitmiseks kõige rohkem abi, on uuringute järgi kõige vähem altid
            seda otsima ja paranemise suunas samme tegema.
            <br /> Raamat on kompleksselt kirjutatud ja pakub mõtteainet
            kõigile, kellel selle teema vastu huvi.
            <br /> Tunnustatud arstiteadlase ja psühhiaatri professor Airi
            Värniku kirjapandut saab usaldada. Teeb head meelt, et ta on sisse
            toonud ka uued teadmised, mis võivad tulevikus olla võtmeks
            depressiooniprobleemide lahendamisel – psühhobiootikumid.
            <br /> Piisavalt on juba andmeid, et seedetraktis elav mikrobioota
            on suuteline mõjutama aju. Ma väga usun, et see võib olla tulevik.“
          </p>
          <br />
          Telli raamat -{" "}
          <a
            target="_blank"
            href="https://raamat24.ee/toode/depressioonil-on-mitu-nagu/"
          >
            Raamat24
          </a>
          {",  "}
          <a
            target="_blank"
            href="https://www.apollo.ee/depressioonil-on-mitu-nagu.html"
          >
            Apollo
          </a>
          {",  "}
          <a
            target="_blank"
            href="https://rahvaraamat.ee/p/depressioonil-on-mitu-n%C3%A4gu/1632764/et?isbn=9789916646724"
          >
            Rahva Raamat
          </a>
        </div>
      </div>
    </div>
  );
}

export default DepressioonilOnMituNagu;
