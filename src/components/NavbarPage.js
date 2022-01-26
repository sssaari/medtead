import { Link } from "react-router-dom";

function NavbarPage() {
  return (
    <div className="navbarPage">
      <div className="navbarBtnListPage">
        <div className="navName">ÜHINENUD MEEDIKUD JA TEADLASED</div>
        <Link to="/" className="navbarBtn">
          AVALEHT
        </Link>
        <Link to="/Poordumised" className="navbarBtn">
          PÖÖRDUMISED
        </Link>
        <Link to="/Pressinurk" className="navbarBtn">
          PRESSINURK
        </Link>
        <Link to="/Infomaterjalid" className="navbarBtn">
          INFOMATERJALID
        </Link>
        <Link to="/Kontakt" className="navbarBtn">
          KONTAKT
        </Link>
      </div>
    </div>
  );
}

export default NavbarPage;
