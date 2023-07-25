import React, { useState } from "react";
import "./NavBar.css";
import { NavBarData } from "../../Constants/NavBar.data";
import { useSelector } from "react-redux";
import { rolePriority } from "../../Constants/Contants";

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
      <nav className="nav-container">
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
                  <a href={menuItem.href}>{menuItem.Name}</a>
                  {dropDown.isOpen && dropDown.option === menuItem.id && (
                    <ul className="nav-menu-options">
                      {menuItem.subOptions
                        ?.filter(
                          (item) =>
                            rolePriority[profile?.Role] <=
                            rolePriority[item?.Role]
                        )
                        .map((subOption, subOptionIndex) => {
                          return (
                            <li
                              className="nav-menu-options-item"
                              key={subOption.id}
                            >
                              <a href={subOption.href}>{subOption.Name}</a>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </li>
              );
            }
            return (
              <li
                key={menuItem.id}
                className="nav-menu-item"
                hidden={menuItem.current}
              >
                <a href={menuItem.href}>{menuItem.Name}</a>
              </li>
            );
          })}
      </nav>
    </>
  );
}
