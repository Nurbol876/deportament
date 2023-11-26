import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from './assets/logo.jpg';
import x from './assets/x.svg'
import menu from './assets/menu.svg'

const Header = () => {

    const {t, i18n} = useTranslation();

    const [clas, setClas] = useState(false)

    const changesLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__logo">
                        <Link to='/' className="logo">
                            {/*<img src={logo} alt="logo" className="logo__img"/>*/}
                            <h2 dangerouslySetInnerHTML={{__html: t("Header.title")}} className="logo__title"/>
                        </Link>
                    </div>
                    <ul className="header__translations">
                        <li onClick={() => changesLanguage('kg')} className={`header__translation ${
                            i18n.language === "kg" && "header__translation-active"
                        }`}>
                            KG
                        </li>
                        <li onClick={() => changesLanguage('ru')} className={`header__translation ${
                            i18n.language === "ru" && "header__translation-active"
                        }`}>
                            RU
                        </li>
                    </ul>
                </nav>
            </div>
            <img onClick={() => setClas(true)} src={menu} alt="menu" className="header__menu"/>
            <aside className={`header__aside ${clas ? 'header__aside-active': ''}`}>
                <img onClick={() => setClas(false)} src={x} alt="x" className="header__aside-x"/>
                    <ul className="header__list">
                        <li className="header__item">
                            <NavLink to='/depor' className="header__link">{t("Header.link1")}</NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink to='/organic' className="header__link">
                                {t("Header.link2")}
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink to='/makers' className="header__link">
                                {t("Header.link3")}
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink to='/world' className="header__link">
                                {t("Header.link4")}
                            </NavLink>
                        </li>
                    </ul>
            </aside>
        </header>
        );
};

export default Header;