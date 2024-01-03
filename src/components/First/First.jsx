import React, {useContext} from 'react';
import plant from './assets/plant.svg'
import {useTranslation} from "react-i18next";
import {CustomContext} from "../../Context";

const First = () => {

    const {t} = useTranslation()
    const {img} = useContext(CustomContext)


    return (
        <section className="first">
            <img src={plant} alt="plant" className="first__one wow swing"
                 data-wow-iteration="9999"/>
                <div className="container">
                    <h1 className="title wow fadeInDown">
                        {t("First.title")}
                    </h1>
                    <h4 dangerouslySetInnerHTML={{__html: t("First.subtitle")}} className="subtitle wow fadeInDown"/>
                    <div>
                        {
                            (typeof img.src2 === "undefined") ? "" :
                                    <img src={require(`./assets/${img.src2}`)} className="first__img" alt="first__img"/>
                        }
                    </div>
                </div>
                <img src={plant} alt="plant" className="first__one first__one-right wow swing" data-wow-iteration="9999"/>
        </section>
    );
};

export default First;