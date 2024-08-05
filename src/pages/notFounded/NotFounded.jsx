import React from 'react';
import {useTranslation} from "react-i18next";

const NotFounded = () => {

    const {t} = useTranslation()

    return (
        <section className="notFound">
            <div className="container">
                <h2 className="notFound__title">
                    404
                </h2>
                <p className="notFound__subtitle">
                    {t("notFound.solver")}
                </p>
            </div>
        </section>
    );
};

export default NotFounded;