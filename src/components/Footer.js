import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footerBtnList">
        <Link to="/Pohikiri" className="footerBtn">
          PÕHIKIRI
        </Link>
      </div>
    </div>
  );
}

export default Footer;
