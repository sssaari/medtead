import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

function Pohikiri() {
  return (
    <div>
      <Navbar />
      <div className="pageImgContainer">
        <img className="pageImg" src="pageImg.jpg" alt="" />
      </div>
      <div className="containerArticle">
        <div className="articleCard">
          <h1>PÕHIKIRI</h1>
          <h2>MTÜ ÜHINENUD MEEDIKUD JA TEADLASED </h2>
          <br />
          <p>
            MTÜ juhatuse liikmete arvuks määratud 3-5 liiget.
            <br /> Asutamisel valitud juhatusse Alar Aab, Meeme Mõttus, Riin
            Sildos.
            <br /> MTÜ aadress Saaremaa, Vanalõve küla, Leieri talu, 94318.
          </p>
          <br />
          <h3>MTÜ eesmärk:</h3>
          <br />
          <p>
            a) võimaldada avalikku vaba arutelu eelkõige tervist puudutavates,
            aga ka teistes ühiskonnas laia kõlapinda/tähtsust omavates
            küsimustes, sh pakkuda/otsida platvormi (avatud) diskussiooniks
            kodulehekülje, sotsiaalmeedia, avaliku meedia jne vahendusel.
            <br />
            b) aidata kaasa vaimse ja füüsilise tervise tähtsuse teadvustamisele
            ühiskonnas
            <br />
            c) aidata kaasa bioeetika (sh. maditsiinieetika) põhitõdede
            teadvustamisele/tutvustamisele ühiskonnas.
          </p>
          <br />
          <h3>MTÜ liikmelisuse tingimus:</h3>
          <br />
          <p>
            MTÜ liikmeks võivad saada lõpetatud arsti või keskastme
            meditsiinitöötaja haridusega ja teadustööga tegelevad kõrgharidusega
            isikud.
            <br />
            Põhikirja nõuetele mittevastavate liikmete vastuvõtmine on
            üldkoosoleku pädevuses.
            <br />
            MTÜ liikmetel on õigus kaasa rääkida ühingu tegevuse planeerimisel,
            seisukohtade kujundamisel ning osaleda ühingu tegevuste
            elluviimisel.
            <br />
            MTÜ liikmete kohustusteks on maksta liikmemaksu (selle esialgne
            suurus €30 aastas) ja osaleda üldkoosolekul.
            <br />
            Soovituslik on liikmetel aidata kaasa põhikirjaliste eesmärkide
            saavutamisele, säilitada oma tegevustes/mõttelaadis eetilisus,
            heatahtlikkus, kollegiaalsus, kogukondlikkus.
            <br />
            Liige ei peaks kahjustama ühingu tegevust.
          </p>
          <br />
          <h3>Üldkoosoleku kokkukutsumise tingimused ja kord:</h3>
          <br />
          <p>
            Üldkoosoleku kutsub kokku MTÜ juhatus vähemalt 1/10 liikmete ühisel
            nõudmisel.
            <br />
            Üldkoosolek kutsutakse kokku juhatuse poolt minimaalselt 7 päeva
            (soovituslikult 30 päeva) enne koosoleku toimumise päeva
            elektroonilise posti teel.
            <br />
            Üldkoosoleku otsus on vastu võetud, kui selle poolt hääletab
            vähemalt 50% + 1 üldkoosolekul osalevatest liikmetest.
            <br />
            MTÜ vara tegevuse lõpetamisel jaotatakse heategevuslikele
            organisatsioonidele vastavalt üldkoosoleku otsusele.
            <br />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pohikiri;
