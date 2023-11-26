import React from 'react';
import plant from './assets/plant.svg'
import peoples from './assets/peoples.jpeg'
import {useTranslation} from "react-i18next";

const First = () => {

    const {t} = useTranslation()

    return (
        <section className="first">
            <img src={plant} alt="plant" className="first__one wow swing"
                 data-wow-iteration="9999"/>
                <div className="container">
                    <h1 className="title wow fadeInDown">
                        {t("Home.First.title")}
                    </h1>
                    <h4 dangerouslySetInnerHTML={{__html: t("Home.First.subtitle")}} className="subtitle wow fadeInDown"/>
                    <img src={peoples} alt="peoples" className="first__img  wow fadeInDown"/>
                </div>
                <img src={plant} alt="plant" className="first__one first__one-right wow swing" data-wow-iteration="9999"/>
        </section>
    );
};

export default First;