import React from 'react';
import {useTranslation} from "react-i18next";

const Fifth = () => {

    const {t} = useTranslation()


    return (
        <section id="fifth" className="fifth">
            <div className="container wow bounceInUp">
                <h5 className="title">
                    {t("Fifth.title")}
                </h5>
                <div className="fifth__maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1504.804503107765!2d74.60349500792779!3d42.87429416203299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7db5d769e59%3A0x78401ee4c5d9cf2d!2z0JDQs9GA0L7Qv9GA0L7QvCwg0YPQuy4g0KDQsNC30LfQsNC60L7QstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1685714122133!5m2!1sru!2skg" width="500" height="420" style={{border:0}} allowFullScreen ="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1229.2745940827742!2d74.46656208888841!3d42.87866535057047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ecf627c542ba9%3A0x214e5af75975abeb!2z0JrRi9GA0LPRi9C30LDQs9GA0L7QsdC40L7RhtC10L3RgtGA!5e0!3m2!1sru!2skg!4v1685714720892!5m2!1sru!2skg" width="500" height="420" style={{border:0}} allowFullScreen ="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </div>
        </section>
);
};

export default Fifth;