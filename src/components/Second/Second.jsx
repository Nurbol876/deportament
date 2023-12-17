import React from 'react';
import compost from './assets/compost.svg'
import list from './assets/list.svg'
import plant from './assets/plant.jpg'
import {useTranslation} from "react-i18next";

const Second = () => {

    const {t} = useTranslation()
    return (
        <section className="second">
            <img src={list} alt="list" className="second__list"/>
                <img src={compost} alt="compost" className="second__icon wow wobble"
                     data-wow-iteration="9999"/>
                    <div className="container">
                        <div className="second__content">
                            <h2 dangerouslySetInnerHTML={{__html: t("Second.title")}} className="title wow fadeInLeftBig"/>
                            <img src={plant} alt="plant"
                                 className="second__img wow fadeInRightBig"/>
                        </div>
                    </div>
        </section>

);
};

export default Second;