import Navbar from "../../../components/Navbar/Navbar";
import "../infomaterjalid.css";

function ImmunityFix() {
  return (
    <div>
      <Navbar />
      <div className="pageImgContainer">
        <img className="pageImg" src="../../pageImg.jpg" alt="" />
      </div>
      <div className="containerArticle">
        <div className="articleCard">
          <h1>The Immunity Fix</h1>
          <h3>
            <em>Dr. James DiNicolantonio, Siim Land</em>
          </h3>
          <br />
          <img className="bookCover" src="../../immunityfix.jpeg" alt="" />
          <p className="bookText">
            “The Immunity Fix” on põhjalik raamat selle kohta, kuidas toimib
            immuunsüsteem, kuidas mõjutavad erinevad viirused ja infektsioonid
            meie tervist ja pakub strateegiaid immuunsüsteemi tugevdamiseks.
            Raamat sisaldab teaduslikku informatsiooni kõige olulisemate
            tegurite kohta, mis hoiab tervist nii viiruspuhangu ajal kui ka muul
            ajal. <br /> <br /> Esitatakse praktilisi näpunäiteid ja võtteid,
            mis parandavad stressitaluvust, taastumiskiirust, ainevahetust,
            südame-veresoonkonna funktsiooni ja elukvaliteeti. <br /> <br />
            <strong>Teemad:</strong>
            <br />
            <br />* Varasemate pandeemiate õppetunnid <br />
            * Immuunsüsteemi alused ja immuunsuse vananemine <br />
            * Immuunsus ja vähk: mis on seos? <br />
            * Magneesiumipuudus ja immuunpuudulikkused <br />
            * Kuidas üliaktiivne immuunsüsteem põhjustab kroonilisi põletikke ja
            autoimmuunhaigusi <br />
            * COVID-19 ja üliaktiivne immuunsüsteem <br />
            * Insuliiniresistentsus ja immuunsus <br />
            * Omega 6/3 suhte tasakaalustamine üliaktiivse immuunsüsteemi
            rahustamiseks <br />
            * Kuum ja külm immuunsüsteemi tugevdamises <br />
            * Toitumise roll immuunsüsteemi tugevdamises <br />* Toitainete ja
            nutratseutide* <em>(nutraceuticals)</em> mõju immuunsuse
            tugevdamisele <br />
            * Vahelduv paastumine, autofaagia ja immuunsuse vananemine <br />
            * Treening ja immuunsus <br />
            * Uni, ööpäevased rütmid ja immuunsüsteem <br /> <br />
            “Immunity Fix” vaatleb võimalikult objektiivselt erinevate
            sekkumiste plusse ja miinuseid ning pakub välja teadusuuringute
            poolt toetatud protokolle, mida järgida. See raamat õpetab teile,
            kuidas tugevdada oma immuunsüsteemi, mida teha, kui te tõesti
            haigestute ning kuidas parandada oma üldist tervist ja elujõudu.{" "}
            <br /> <br />
            Südame-veresoonkonna uurijana ning farmaatsiadoktorina on dr James
            J. DiNicolantonio aastaid toitumist uurinud. Ta on rahvusvaheliselt
            tuntud teadlane ning tervise ja toitumise ekspert, palju panustanud
            tervisepoliitikasse ja meditsiinikirjandusse. Tema sulest on ilmunud
            järgmised raamatud: “The Salt Fix”, “Superfuel” ja “The Longevity
            Solution”. <br /> <br /> Kaasautor Siim Land on tunnustatud
            biohäkker Eestist. Vaatamata oma noorele eale peetakse teda
            biohäkkimise ja tervise optimeerimise kogukonna üheks tipptegijaks.
            Siim Land on ka “Metabolic Autofagia” ja “Stronger by Stress” autor.
          </p>
          <br />
          Telli raamat -{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.amazon.com/Immunity-Fix-Strengthen-Infections-Healthier/dp/B08M1QXXF6?fbclid=IwAR1R4DxcuKj7lUNZBGWBAWsnQbLdTcD9DipWyM788D4Tg1nNqKY0nnEDmWo"
          >
            Amazon
          </a>
          <br />
          <div className="bookLine"></div>
          <p className="underTheLineText">
            * Sõnale vastet eesti keeles ei leidnud. Sõna “nutraceutical” lõi
            1989 a. Dr Stephen DeFelice ühendades “nutrition” ja
            “pharmaceutical”. Mõistet kasutatakse laialdselt turunduses, täpset
            definitsiooni anda raske. (Lugejate poolt teretulnud pakkumised
            eestikeelseks sõnaks!)
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://pubmed.ncbi.nlm.nih.gov/26991455/"
            >
              Pubmed -"Defining 'nutraceuticals': neither nutritious nor
              pharmaceutical"
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImmunityFix;
