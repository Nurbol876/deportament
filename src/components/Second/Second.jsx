import React, {useContext} from 'react';
import compost from './assets/compost.svg'
import list from './assets/list.svg'
import {useTranslation} from "react-i18next";
import {CustomContext} from "../../Context";

const Second = () => {

    const {t} = useTranslation()

    const {img} = useContext(CustomContext)


    return (
        <section className="second">
            <img src={list} alt="list" className="second__list"/>
                <img src={compost} alt="compost" className="second__icon wow wobble"
                     data-wow-iteration="9999"/>
                    <div className="container">
                        <div className="second__content">
                            <h2 dangerouslySetInnerHTML={{__html: t("Second.title")}} className="title wow fadeInLeftBig"/>
                            {
                                (typeof img.src3 === "undefined") ? "" :
                                    <img src={require(`./assets/${img.src3}`)} className="second__img" alt="second__img"/>

                            }
                        </div>
                    </div>
        </section>

);
};

export default Second;