import { DataContext } from "Components/Context/DataContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./navbar.scss";

export const NavBar = () => {
  const navigation = useContext(DataContext).navigation;
  const btnName = useContext(DataContext).btn;
  const [showdropdown, setshowdropdown] = useState(false);
  return (
    <>
      <ul className="navbar">
        {navigation.map((el) => {
          if (el.name === "Pages") {
            return (
              <li
                className="itemlink"
                key={el.key}
                onMouseEnter={() => setshowdropdown(true)}
                onMouseLeave={() => setshowdropdown(false)}
              >
                <Link className="transf" to={"#"}>
                  {el.name}
                </Link>
                {showdropdown && <Dropdown />}
              </li>
            );
          }
          return (
            <li className="itemlink" key={el.key}>
              <Link className="transf" to={el.link}>
                {el.name}
              </Link>
            </li>
          );
        })}
        <li>
          <button>{btnName}</button>
        </li>
      </ul>
     
    </>
  );
};
