import NavbarHome from "../components/NavbarHome/NavbarHome";
import FooterHome from "../components/FooterHome";
import { useState } from "react";

function Avaleht() {
  const [language, renewLanguage] = useState("EST");
  function openingText() {
    return [
      {
        lang: "RUS",
        fullText: (
          <p>
            Нам, НКО Объединённые Медики и Учёные, важно и близко сердцу хранить
            этические и моральные ценности нашей профессии. Нам важны физическое
            и душевное здоровье и благосостояние народа, которые во многом
            зависят от происходящего в здравохранении.
            <br />
            <br />
            Мы считаем важными биоэтические и моральные договорённости/нормы.
            Также  считаем, что государство  обязано гарантировать
            конституционные права всем, без каких-либо исключений.
            <br />
            <br />
            Ожидаем объединяться с нами медиков и представителей разных областей
            науки, которые желают поддержать прозрачную, честную, этичную,
             основанную на доказательствах медицину, а также сделать свой вклад
            в обсуждение данной тематики и в основанную на ней политику. Целью
            нашей НКО является составлять и публиковать в выдержанной форме
            публичные письма и обращения, делать запросы информации,
            организовывать  народные инициативы, семинары, конференции,
            пресс-конференции.
            <br />
            <br />
            Внутри НКО членство публично.
            <br />
            На домашней странице для членов организации есть отдельный раздел
            (вход защищён паролем), в форуме которого можно обсуждать темы
            медицины и биоэтики.
            <br />
            <br />
            НКО Объединённые Медики и Учёные внесён в регистр под номером
            80605668
            <br />
            <br />
            Приложение: Устав НКО.
            <br />
            <br />
          </p>
        ),
      },
      {
        lang: "EST",
        fullText: (
          <p>
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
          </p>
        ),
      },
    ];
  }

  return (
    <div className="bgImg">
      <NavbarHome />
      <div className="homepageBigname">
        <div className="homepageBigtext">ÜHINENUD MEEDIKUD JA TEADLASED</div>
      </div>

      <section className="containerHome">
        <div className="langButtons">
          <button className="langBut" onClick={() => renewLanguage("EST")}>
            EST
          </button>
          <button className="langBut" onClick={() => renewLanguage("RUS")}>
            RUS
          </button>
          <button className="langBut" onClick={() => renewLanguage("ENG")}>
            ENG
          </button>
        </div>
        {openingText().map((element) => {
          if (element.lang === language) {
            return <div className="cardHome">{element.fullText}</div>;
          } else {
            return null;
          }
        })}
      </section>

      <FooterHome />
    </div>
  );
}

export default Avaleht;
