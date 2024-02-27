import { Link } from "react-router-dom";
import style from "./Header.module.scss";

import React from "react";
import {
  ABOUT_US,
  HOME,
  PORTFOLIO,
  PRICE_LIST,
} from "../../constants/routerLinks";

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.menuList}>
          <li className={style.menuItem}>
            <Link to={PRICE_LIST}>Прайс лист</Link>
          </li>
          <li className={style.menuItem}>
            <Link to={PORTFOLIO}>Портфолио</Link>
          </li>
          <li className={style.menuItem}>
            <Link to={ABOUT_US}>О нас</Link>
          </li>
        </ul>
      </nav>

      <Link to={HOME}>
        <img
          src='/img/icons/webWizard.svg'
          className={style.webWizard}
          alt='webWizard'
        />
      </Link>

      <ul className={style.socialList}>
        <li className={style.socialItem}>
          <img
            src='/img/icons/inst.svg'
            className={style.socialIcon}
            alt='instagramm icon'
          />
        </li>
        <li className={style.socialItem}>
          <img
            src='/img/icons/vk.svg'
            className={style.socialIcon}
            alt='vk icon'
          />
        </li>
        <li className={style.socialItem}>
          <img
            src='/img/icons/whatsApp.svg'
            className={style.socialIcon}
            alt='whatsApp icon'
          />
        </li>
        <li className={style.socialItem}>
          <img
            src='/img/icons/tg.svg'
            className={style.socialIcon}
            alt='tg icon'
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
