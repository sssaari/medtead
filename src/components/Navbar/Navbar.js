import "./navbarstyle.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../Dropdown";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  function handleToggle() {
    setActive(!isActive);
  }

  return (
    <div>
      <div className="nav-container">
        <nav className="navbar">
          <Link to="/" id="navbar-logo">
            <img className="logoImg" src="heartLogo.png" alt="" />
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
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link to="/Infomaterjalid" className="nav-links">
                INFOMATERJALID <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
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
