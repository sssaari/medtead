import NavbarHome from "../components/NavbarHome/NavbarHome";
import FooterHome from "../components/FooterHome";
import { useState } from "react";

function Avaleht() {
  const [language, renewLanguage] = useState("EST");
  function openingText() {
    return [
      {
        lang: "ENG",
        fullText: (
          <p>
            UNITED MEDICS AND SCIENTISTS
            <br />
            <br />
            The statute of NPO United Medics and Scientists is to uphold the
            ethical and moral values of our professions.
            <br />
            <br />
            The physical and mental health and wellbeing of the people is
            important to us and hugely reliant on the healthcare system. We
            value bioethical and moral agreements.
            <br />
            We also find that the state must ensure without any exceptions that
            the constitutional rights of the citizens are guaranteed.
            <br />
            <br />
            We invite medics and representatives of different fields of science
            who wish to support a transparent, truthful, scientific and ethical
            medicine to join us and provide their input into the discussion of
            these matters and the policies arising from them.
            <br />
            <br />
            The aim of our NPO is to author and publish balanced public letters
            and addresses, submit data requests to government offices, launch
            people's initiatives, hold seminars, conferences and press
            conferences.
            <br />
            <br />
            Membership is public within the NPO.
            <br />
            <br />
            NPO United Medics and Scientists has been entered into Estonian
            Business Register under the number 80605668.
            <br />
          </p>
        ),
      },
      {
        lang: "RUS",
        fullText: (
          <p>
            Для нас, членов НКО Объединённые Медики и Учёные, очень важно и
            близко сердцу хранить этические и моральные ценности нашей
            профессии. Нам важны физическое и душевное здоровье и благосостояние
            народа, которые во многом зависят от происходящего в
            здравоохранении. Мы уважаем биоэтические и моральные
            договорённости/нормы и считаем необходимым их исполнение. Считаем
            также, что государство обязано гарантировать конституционные права
            всем гражданам без каких-либо исключений.
            <br />
            <br />
            Мы приглашаем медиков и представителей разных областей науки
            присоединиться к нам, чтобы вместе поддержать и отстоять
            доказательную медицину, в основании которой стоит этика и
            прозрачность деятельности, и внести свой вклад в обсуждение данной
            тематики. Содержанием деятельности НКО является составление и в
            сдержанной форме публикация писем и обращений, запросы информации,
            организация народных инициатив, семинаров, конференций и
            пресс-конференций.
            <br />
            <br />
            Внутри организации членство открыто.
            <br />
            <br />
            На домашней странице для членов организации будeт отдельный раздел
            (вход защищён паролем), в форуме которого можно обсуждать темы
            медицины и биоэтики.
            <br />
            НКО Объединённые Медики и Учёные внесён в регистр под номером
            80605668 Приложение: Устав НКО.
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
            return (
              <div className="cardHome">
                {element.fullText}
                <br />
                <br />
              </div>
            );
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
