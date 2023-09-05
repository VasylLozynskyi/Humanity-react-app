import { DataContext } from "Components/Context/DataContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./dropdown.scss"

function Dropdown () {
  const submenu = useContext(DataContext).submenu;
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="dropdowncolor">
    <div className={dropdown ? "submenu clicked" : "submenu"} onClick={() => setDropdown(!dropdown)}>
      {submenu.map(el => {
        return(
          <Link className="item" key={el.key} to={el.link} onClick={() => setDropdown(false)}>{el.name}</Link>
        )})}
    </div>
    </div>
  )
};
export default Dropdown;