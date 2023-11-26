import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import logo from './assets/logo.jpg';
import Contacts from "./Contacts";

const Navbar = () => {

    const [contact, setContact] = useState(false)

    const {t} = useTranslation();

    return (
        <nav className='navbar'>
            <Contacts active={contact}/>
            <ul className="navbar__list">
                <li>
                    <a href="#fifth" className="navbar__link">
                        {t("Navbar.link1")}
                    </a>
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
                    <img src={logo} alt=""/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;