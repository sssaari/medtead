import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isActive, setActive] = useState(false);

  function handleToggle() {
    setActive(!isActive);
  }

  return (
    <div>
      <div className="nav-container">
        <nav className="navbar">
          <Link to="/" id="navbar-logo">
            ÜMT
          </Link>
          <div
            id="mobile-menu"
            className={`menu-toggle ${isActive ? "is-active" : null}`}
            onClick={handleToggle}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`nav-menu ${isActive ? "active" : null}`}
            onClick={handleToggle}
          >
            <li>
              <Link to="/Poordumised" className="nav-links">
                PÖÖRDUMISED
              </Link>
            </li>
            <li>
              <Link to="/Pressinurk" className="nav-links">
                PRESSINURK
              </Link>
            </li>
            <li>
              <Link to="/Infomaterjalid" className="nav-links">
                INFOMATERJALID
              </Link>
            </li>
            <li>
              <Link to="/Kontakt" className="nav-links">
                KONTAKT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
