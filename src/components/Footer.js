import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footerBtnList">
        <Link to="/Pohikiri" className="navbarBtn">
          PÕHIKIRI
        </Link>
      </div>
    </div>
  );
}

export default Footer;
