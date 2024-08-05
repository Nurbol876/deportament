import React, {useContext, useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import { useTranslation } from "react-i18next";
import x from './assets/x.svg'
import menu from './assets/menu.svg'
import arrow from "./assets/arrow.svg"
import {CustomContext} from "../../Context";
import Admin from "../../pages/AdminOfDep/Admin";

const Header = () => {

    const {user, LogOutUser, setStart} = useContext(CustomContext)

    const {t, i18n} = useTranslation();

    const [clas, setClas] = useState(false)
    const [list, setList] = useState(false)

    const navigate = useNavigate()

    const changesLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <h2 style={{position: "absolute", left: "50px", top: "20px"}} className="header__link">
                        {user && user.name}
                    </h2>
                    <div className="header__logo">
                        <Link to='/' className="logo">
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
                            <div className="header__thing">
                                <NavLink to='/organic' className="header__link">
                                    {t("Header.link2")}
                                </NavLink>
                                <img src={arrow} alt="triangle" onClick={() => setList(!list)} className={`header__triangle ${list ? 'header__triangle-active': ''}`}/>
                            </div>
                            <ul className={`header__areas ${list ?'header__areas-active': ''}`}>
                                <li>
                                    <NavLink onClick={setStart(1)} to="/organic/Chuy" className="header__link header__link-mini">
                                        Чуй
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={setStart(1)} to="/organic/Naryn" className="header__link header__link-mini">
                                        Нарын
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={setStart(1)} to="/organic/IssykKul" className="header__link header__link-mini">
                                        Ысык-Көл
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={setStart(1)} to="/organic/Talas" className="header__link header__link-mini">
                                        Талас
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={setStart(1)} to="/organic/Batken" className="header__link header__link-mini">
                                        Баткен
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={setStart(1)} to="/organic/DjalalAbad" className="header__link header__link-mini">
                                        Джалал-Абад
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={setStart(1)} to="/organic/Osh" className="header__link header__link-mini">
                                        Ош
                                    </NavLink>
                                </li>
                            </ul>
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
                        {
                            user && user.name === "Admin" && user.email === "nurbolsagynbekov876@gmail.com" && user.password === "KGdeportament" && (
                                <li className="header__item">
                                    <NavLink to='/admin' className="header__link">
                                        admin
                                    </NavLink>
                                </li>
                            )
                        }
                        <li className="header__item">
                            {
                                user && user.name.length ? (
                                    <button onClick={LogOutUser} className="header__btn">
                                        {t("Header.btn2")}
                                    </button>
                                ) : (
                                    <button onClick={() => navigate("/login")} className="header__btn">
                                        {t("Header.btn1")}
                                    </button>
                                )
                            }
                        </li>
                    </ul>
            </aside>
        </header>
        );
};

export default Header;