import React from 'react';
import {useTranslation} from "react-i18next";

const Contacts = ({active}) => {

    const {t} = useTranslation()
    return (
        <aside className={`header__contacts ${active? 'header__contacts-active': ''}`}>
            <ul className="header__aside-list">
                <li className="header__contact">
                    <a href="tel:+996312661240" className="header__aside-link">
                        +996(708)-32-08-20
                    </a>
                    <p className="header__desk">
                        {t("Header.desk1")}
                    </p>
                </li>
                <li className="header__contact">
                    <a href="tel:+996312661229" className="header__aside-link">
                        +996(772)-37-73-86
                    </a>
                    <p className="header__desk">
                        {t("Header.desk2")}
                    </p>
                </li>
            </ul>
        </aside>
    );
};

export default Contacts;