import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="brand">ÜHINENUD MEEDIKUD JA TEADLASED</div>
      <div className="navbarList">
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
        <div className="right">
          <a href="#" className="toggle" id="navHamburger">
            <i className="fas fa-bars"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
// navbar = navbar
// link = navbarLink
// brand 0 brand
//
