import { TiArrowDownOutline } from "react-icons/ti";
import { rolePriority } from "../../Constants/Constants";
import "./NavBarDropDown.css"
import { Link } from "react-router-dom";

function NavBarDropDown({ dropDown, menuItem, profile }) {


  return (
    <>
      {dropDown.isOpen && dropDown.option === menuItem.id &&  (
        <ul className="nav-menu-options">
          {menuItem.subOptions
            ?.filter(
              (item) => rolePriority[profile?.Role] <= rolePriority[item?.Role]
            )
            .map((subOption, subOptionIndex) => {
              return (
                <li className="nav-menu-options-item" key={subOption.id}>
                  <Link className= "nav-menu-item-link" to={subOption.href}>{subOption.Name}</Link>
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
}

export default NavBarDropDown;
