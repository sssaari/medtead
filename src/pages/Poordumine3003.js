import Navbar from "../components/Navbar/Navbar";

import classes from "./Poordumine.module.css";
import pdfArticle from "../static/Pöördumine iga Riigikogu liikme poole NETS 300322.pdf";

function Poordumine3003() {
  return (
    <div>
      <div>
        <div className="containerArticle">
          <div className="articleCardIM pdfArticle">
            <h1 className={classes.title}>
              AVALIK PÖÖRDUMINE KÕIKIDELE RIIGIKOGU LIIKMETELE
            </h1>
            <div id={classes.kaaskiriContainer}>
              <br />
              <h3>
                <em>30.03.2022</em>
                <br />
              </h3>
              <p>
                Riigikogus (RK) läheb 06.04.2022 esimesele lugemisele
                Nakkushaiguste Ennetuse ja Tõrje Seaduse (NETSi) muutmise
                eelnõu, milles on mitmeid puuduseid. Juba 2003.a. seaduses oli
                palju vajakajäämisi, millele ka asjatundjad tähelepanu juhtisid,
                kuid paljusid asjaolusid ei võetud tookord arvesse. Praegune
                nakkushaiguste-alane olukord on muutunud oluliselt ja vana
                puuduliku seaduse lappimine tundub halb variant.
                <br />
                <br /> Vajame uut NETSi, sest see seadus saab mõjutama meid
                kõiki oluliselt lähiaastatel. Saatsime 30.03.2022 kõikidele RK
                liikmetele isiklikult (lisaks RK sotsiaalkomisjonile) oma muret
                väljendava pöördumise, palvega seaduse muudatustest loobuda ja
                keskenduda uue NETSi väljatöötamisele, selleks professionaalse
                töörühma loomisele, milles kindlasti peaks(id) olulist rolli
                mängima epidemioloog(id). Epidemioloogia on eriala, mida on
                senises covid-kriisi käsitluses ja Teadusnõukojas eiratud.
                Võimalik, et epidemioloog(id) tuleks kaasata (lähi)välismaalt,
                kuna Eestis on see eriala klassikalisel kujul hääbumas.
                <br />
                <br />
                NETS-i parandusettepanekute eelnõu loomise käigus toimunud
                aruandluse info leiab siit:{" "}
                <a
                  id={classes.netsLink}
                  target="_blank"
                  href="https://www.riigikogu.ee/tegevus/eelnoud/eelnou/78e753ef-87d0-4146-8415-a3e686151652/Nakkushaiguste%20ennetamise%20ja%20t%C3%B5rje%20seaduse%20muutmise%20ning%20sellega%20seonduvalt%20teiste%20seaduste%20muutmise%20seadus"
                >
                  www.riigikogu.ee.{" "}
                </a>
                <br />
                <br />
              </p>
            </div>
            <a
              href={pdfArticle}
              target="_blank"
              rel="noreferrer"
              className="pdfArticleLink"
            >
              Ava PDF
            </a>
            <img
              src="../../pdfarticles/Pöördumine30032022/Pöördumine iga Riigikogu liikme poole NETS 300322-1.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Pöördumine30032022/Pöördumine iga Riigikogu liikme poole NETS 300322-2.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Pöördumine30032022/Pöördumine iga Riigikogu liikme poole NETS 300322-3.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Pöördumine30032022/Pöördumine iga Riigikogu liikme poole NETS 300322-4.jpg"
              alt=""
              className="pdfImage"
            ></img>
            <img
              src="../../pdfarticles/Pöördumine30032022/Pöördumine iga Riigikogu liikme poole NETS 300322-5.jpg"
              alt=""
              className="pdfImage"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poordumine3003;
