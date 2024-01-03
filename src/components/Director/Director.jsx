import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import axios from "axios";
import word from "./files/резюме2-1.docx"

const Director = () => {

    const {t} = useTranslation()

    const [director, setDirector] = useState({})
    const [img, setImg] = useState('')


    useEffect(() => {
        axios("http://localhost:5555/director")
            .then((res) => {
                setDirector(res.data)
                setImg(res.data.img)
            })
    }, []);

    return (
        <section className="director">
            <div className="container">
                <div className="director__info-ceo">
                    <div className="director__info-wrapper">
                        <div>
                            {
                                img.length > 1 && (
                                    <img src={require(`./assets/${img}`)} alt="director" className="director__info-img"/>
                                )
                            }
                        </div>
                        <div className="director__info-content">
                                <h5 className="director__info-content_title">{director.name}</h5>
                                <p className="director__info-content_subtitle">{t("Director.title1")}</p>
                                <div className="director__info-content_bio">
                                    <a className="director__info-content_bio-text" href={word} download>{t("Director.title2")}</a>
                                </div>
                                <div className="director__info-content_phone">Телефон:<p></p>
                                    <div className="director__info-content_nums">
                                        <a className="director__info-content_num"
                                           href="tel:+996312457269">{director.number1}</a>
                                        <a className="director__info-content_num"
                                           href="tel:+996312457270">{director.number2}</a>
                                    </div>
                                    <p></p></div>
                                <div className="director__info-content_email">E-mail:<br/>
                                    <a className="director__info-content_num director__info-content_num-top"
                                       href="mailto:organic@agro.gov.kg">{director.email}</a>
                                </div>
                                <p></p></div>
                    </div>
                    <p></p></div>
            </div>
        </section>
        );
};

export default Director;