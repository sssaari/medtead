import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarBtnListPage">
        <div className="brand">ÜHINENUD MEEDIKUD JA TEADLASED</div>
        <Link to="/" className="link">
          AVALEHT
        </Link>
        <Link to="/Poordumised" className="link">
          PÖÖRDUMISED
        </Link>
        <Link to="/Pressinurk" className="link">
          PRESSINURK
        </Link>
        <Link to="/Infomaterjalid" className="link">
          INFOMATERJALID
        </Link>
        <Link to="/Kontakt" className="link">
          KONTAKT
        </Link>
        <a href="#" class="toggle" id="navHamburger">
          <i class="fas fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
// navbar = navbar
// link = navbarLink
// brand 0 brand
//
