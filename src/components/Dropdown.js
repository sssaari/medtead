import { useState } from "react";
import "./dropdownstyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <ul
        onClick={handleClick}
        style={{ zIndex: 100000 }}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} style={{ zIndex: 100000 }}>
              <Link
                className={item.cName}
                to={item.path}
                style={{ zIndex: 100000 }}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
