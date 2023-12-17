import React from 'react';
import director from'./assets/director.jpg'
import {useTranslation} from "react-i18next";

const Director = () => {

    const {t} = useTranslation()

    return (
        <section className="director">
            <div className="container">
                <div className="director__info-ceo">
                    <div className="director__info-wrapper">
                        <img src={director} alt="director" className="director__info-img"/>
                            <div className="director__info-content">
                                <h5 className="director__info-content_title">Турсуналиев Сагынбек Сатыбекович</h5>
                                <p className="director__info-content_subtitle">{t("Director.title1")}</p>
                                <div className="director__info-content_bio">
                                    <a className="director__info-content_bio-text" href="#">{t("Director.title2")}</a>
                                </div>
                                <div className="director__info-content_phone">Телефон:<p></p>
                                    <div className="director__info-content_nums">
                                        <a className="director__info-content_num"
                                           href="tel:+996312457269">+996(312)-45-72-69</a>
                                        <a className="director__info-content_num"
                                           href="tel:+996312457270">+996(312)-45-72-70</a>
                                    </div>
                                    <p></p></div>
                                <div className="director__info-content_email">E-mail:<br/>
                                    <a className="director__info-content_num director__info-content_num-top"
                                       href="mailto:organic@agro.gov.kg">organic@agro.gov.kg</a>
                                </div>
                                <p></p></div>
                    </div>
                    <p></p></div>
            </div>
        </section>
        );
};

export default Director;