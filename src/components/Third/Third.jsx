import React, {useState} from 'react';
import {useTranslation} from "react-i18next";

const Third = () => {

    const {t} = useTranslation()

    const [text, setText] = useState(false)
    return (
        <section className="third">
            <div className="container">
                <div className="third__content">
                    <h3 className="title wow fadeInDown">
                        {t("Home.Third.title")}
                    </h3>
                    <p dangerouslySetInnerHTML={{__html:t("Home.Third.subtitle1")}} className="subtitle"/>
                    <p dangerouslySetInnerHTML={{__html:text? t("Home.Third.subtitle2"): ''}} className="subtitle"/>
                    <button onClick={() => setText(!text)} className="third__btn">
                        {text? t("Home.Third.btn2") : t("Home.Third.btn1")}
                    </button>
                    <div className="third__item">
                        <button className="btn">
                            <a target="_blank" href="http://cbd.minjust.gov.kg/act/view/ru-ru/112544?cl=ru-ru" className="third__link">{t("Home.Third.btn3")}</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>

);
};

export default Third;