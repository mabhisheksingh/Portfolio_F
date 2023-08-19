import React, { useState } from "react";
import "./NavBar.css";
import { NavBarData } from "../../Constants/NavBar.data";
import { useSelector } from "react-redux";
import { rolePriority } from "../../Constants/Constants";
import NavBarDropDown from "./NavBarDropDown";
import {TiArrowDownOutline,TiArrowDownThick} from "react-icons/ti"
import { NavLink } from "react-router-dom";

export default function NavBar() {
  //* Use to get data from redux store
  const profile = useSelector((state) => state.profile);

  const [dropDown, setDropDown] = useState({
    option: "id",
    isOpen: false,
  });

  const isDropDownOpen = (e, id) => {
    let eventName = e._reactName;
    // console.log(e._reactName);
    if (eventName === "onMouseEnter") {
      setDropDown({
        option: id,
        isOpen: true,
      });
    } else {
      setDropDown({
        option: id,
        isOpen: false,
      });
    }
    
  };

  return (
    <>
      <nav className="nav-container navbar-bg-color">
        {NavBarData &&
          NavBarData.filter(
            (item) => rolePriority[profile?.Role] <= rolePriority[item?.Role]
          ).map((menuItem, index) => {
            if (menuItem.hasSubOptions) {
              return (
                <li
                  key={menuItem.id}
                  className="nav-menu-item"
                  hidden={menuItem.current}
                  onMouseEnter={(e) => isDropDownOpen(e, menuItem.id)}
                  onMouseLeave={() => setDropDown(menuItem.id)}
                >
                  <span title={menuItem.Description} className= "nav-menu-item-link" >{menuItem.Name }
                  {dropDown.isOpen && menuItem.id === dropDown.option ? <TiArrowDownThick color="black" /> 
                  : <TiArrowDownOutline color="black" /> }
                  </span>
                  {dropDown.isOpen && <NavBarDropDown dropDown={dropDown} menuItem={menuItem} profile={profile} />}
                </li>
              );
            }
            return (
              <li
                key={menuItem.id}
                className="nav-menu-item"
                hidden={menuItem.current}
              >
                <NavLink title={menuItem.Description} className= "nav-menu-item-link" to={menuItem.href} >{menuItem.Name}</NavLink>
              </li>
            );
          })}
      </nav>
    </>
  );
}
