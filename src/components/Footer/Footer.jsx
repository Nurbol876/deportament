import React from 'react';
import {Link, NavLink} from "react-router-dom";
import facebook from './assets/facebook.svg'
import insta from "./assets/insta.svg"
import tel from "./assets/tel.svg"
import logo from "./assets/logo.jpg"
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation();

    return (
        <footer className="footer wow bounceInUp">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__info">
                        <Link to='/' className="logo">
                            <img src={logo} alt="logo" className="logo__img"/>
                            <h2 dangerouslySetInnerHTML={{__html: t("Header.title")}} className="logo__title"/>
                        </Link>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <img src={insta} alt="instagram" className="footer__icon"/>
                                    <a target="_blank" href="https://instagram.com/departament_organiki?igshid=MzRlODBiNWFlZA=="
                                       className="footer__link">instagram</a>
                            </li>
                            <li className="footer__item">
                                <img src={facebook} alt="facebook" className="footer__icon"/>
                                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100042371914027&mibextid=ZbWKwL"
                                       className="footer__link">facebook</a>
                            </li>
                            <li className="footer__item">
                                <img src={tel} alt="tel" className="footer__icon"/>
                                    <a href="tel:+996772377386" className="footer__link">+996 772 377 386</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="footer__list-two">
                        <li className="footer__item">
                            <NavLink to='/depor' className="footer__link-two">{t("Header.link1")}</NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to='/organic' className="footer__link">
                                {t("Header.link2")}
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to='/makers' className="footer__link">
                                {t("Header.link3")}
                            </NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to='/world' className="footer__link">
                                {t("Header.link4")}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

);
};

export default Footer;