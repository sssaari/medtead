import { Link } from "react-router-dom";

function FooterHome() {
  return (
    <div className="footerHome">
      <div className="footerBtnList">
        <Link to="/Pohikiri" className="footerBtn">
          PÕHIKIRI
        </Link>
      </div>
    </div>
  );
}

export default FooterHome;