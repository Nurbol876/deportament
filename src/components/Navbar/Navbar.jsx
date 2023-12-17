import React, {useState, useContext} from 'react';
import {useTranslation} from "react-i18next";
import logo from './assets/logo.jpg';
import Contacts from "./Contacts";
import {Link} from "react-router-dom";
import {CustomContext} from "../../Context";

const Navbar = () => {

    const{ images } = useContext(CustomContext)

    const [contact, setContact] = useState(false)

    const {t} = useTranslation();

    return (
        <nav className='navbar'>
            <Contacts active={contact}/>
            <ul className="navbar__list">
                <li>
                    <Link to="/map" className="navbar__link">
                        {t("Navbar.link1")}
                    </Link>
                </li>
                <li>
                    <a target="_blank" href="https://agro.gov.kg/ru/main/" className="navbar__link">
                        {t("Navbar.link2")}
                    </a>
                </li>
                <li>
                    <p onClick={() => setContact(!contact)} className="navbar__link">
                        {t("Navbar.link3")}
                    </p>
                </li>
            </ul>
            <div className="navbar__logo">
                <div>
                    <img src={t("images.logo")} alt=""/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;