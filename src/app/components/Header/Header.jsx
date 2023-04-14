import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
  const [menuActive, setMenuActive] = useState(0);

  const menu = {
    "/": "Главная",
    "/personal": "Личная характеристика",
    "/compatibility": "Совместимость с человеком",
  };
  const menuArr = Object.entries(menu);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("menuActive"));
    if (result) {
      setMenuActive(result);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("menuActive", JSON.stringify(menuActive));
  }, [menuActive]);

  const handleMenuActive = (index) => {
    setMenuActive(index);
  };

  return (
    <header className={style.header}>
      <ul className={style.menu_list}>
        {menuArr.map((item, index) => (
          <Link
            to={item[0]}
            className={` ${style.menu_link} ${
              menuActive === index ? style.active : ""
            }`}
            key={index}
          >
            <li
              className={` ${style.menu_item} ${
                menuActive === index ? style.active : ""
              }`}
              onClick={() => handleMenuActive(index)}
            >
              {item[1]}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
}

export default Header;
