import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import {useTranslation} from "react-i18next";

const Year2023 = ({ year }) => {

    const {t} = useTranslation()

    const[data, setData] = useState([])
    const[batken, setBatken] = useState([])
    const[issykKul, setIssykKul] = useState([])
    const[djalal, setDjalal] = useState([])
    const[osh, setOsh] = useState([])
    const[chuy, setChuy] = useState([])
    const[talas, setTalas] = useState([])
    const[naryn, setNaryn] = useState([])

    useEffect(() => {
        axios(`http://localhost:5555/Data${year}`)
            .then(({data}) => {
                setData(data)
                setBatken(data.Batken)
                setIssykKul(data.IssykKul)
                setDjalal(data.JalalAbad)
                setOsh(data.Osh)
                setChuy(data.Chuy)
                setTalas(data.Talas)
                setNaryn(data.Naryn)
            })
            .catch((err) => console.log(err))
    }, [])

       return (
        <>
            <h1 className="title">
                Информация по пилотным хозяйствам ДОСХ 2023г.
            </h1>
            <div>
                <Swiper
                    pagination={{
                        type: 'fraction'
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000
                    }}
                    className="mySwiper twentythree"
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    <div className="twentythree__text">
                        <h2 className="opdx__title">Баткенская область</h2>
                    </div>
                    {
                        batken.map((i) => (
                            <SwiperSlide>
                                <div className="swiper-slide">
                                        <div className="opdx__cart">
                                            <div className="opdx__people">
                                                <img src="" alt="people" className="opdx__people-img"/>
                                                <div className="opdx__info">
                                                    <p className="opdx__desk">{i.number}</p>
                                                    <h3 className="opdx__info-title">{i.name}</h3>
                                                </div>
                                            </div>
                                            <table className="opdx__table">
                                                <tr className="opdx__tr">
                                                    <td className="opdx__td" colSpan="4">
                                                        Наименование хозяйства: "{i.place}";
                                                    </td>
                                                    <td className="opdx__td" colSpan="1">
                                                        Работники: {i.people};
                                                    </td>
                                                </tr>
                                                <tr className="opdx__tr">
                                                    <td className="opdx__td" colSpan="1">
                                                        Общ га: {i.products[0]};
                                                    </td>
                                                    <td className="opdx__td" colSpan="2">
                                                        экспорт: {i.products[1]};
                                                    </td>
                                                    <td className="opdx__td" colSpan="2">
                                                        {t("Opdx.phone")}: {i.phone ? `+996${i.phone}`: t("Opdx.answer")}
                                                    </td>
                                                </tr>

                                                <tr className="opdx__tr" >
                                                    <td className="opdx__td" colSpan="2">
                                                        Продукт
                                                    </td>
                                                    <td className="opdx__td" colSpan="3">
                                                        Количество Животных\Производство(в тоннах/штук)
                                                    </td>
                                                </tr>

                                                    {i.products[2].map((a, index) => (
                                                        <tr className="opdx__tr" key={index}>
                                                            <td className="opdx__td" colSpan="2">
                                                                {a}
                                                            </td>
                                                            <td className="opdx__td" colSpan="3">
                                                                {i.products[4][index]}
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </table>
                                        </div>
                                    </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Swiper
                    pagination={{
                        type: 'fraction'
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000
                    }}
                    className="mySwiper twentythree"
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    <div className="twentythree__text">
                        <h2 className="opdx__title">Иссык-Кул область</h2>
                    </div>
                    {
                        issykKul.map((i) => (
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="opdx__cart">
                                        <div className="opdx__people">
                                            <img src="" alt="people" className="opdx__people-img"/>
                                            <div className="opdx__info">
                                                <p className="opdx__desk">{i.number}</p>
                                                <h3 className="opdx__info-title">{i.name}</h3>
                                            </div>
                                        </div>
                                        <table className="opdx__table">
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="4">
                                                    Наименование хозяйства: "{i.place}";
                                                </td>
                                                <td className="opdx__td" colSpan="1">
                                                    Работники: {i.people};
                                                </td>
                                            </tr>
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="1">
                                                    Общ га: {i.products[0]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    экспорт: {i.products[1]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    {t("Opdx.phone")}: {i.phone ? `+996${i.phone}`: t("Opdx.answer")}
                                                </td>
                                            </tr>

                                            <tr className="opdx__tr" >
                                                <td className="opdx__td" colSpan="2">
                                                    Продукт
                                                </td>
                                                <td className="opdx__td" colSpan="3">
                                                    Количество Животных\Производство(в тоннах/штук)
                                                </td>
                                            </tr>

                                            {i.products[2].map((a, index) => (
                                                <tr className="opdx__tr" key={index}>
                                                    <td className="opdx__td" colSpan="2">
                                                        {a}
                                                    </td>
                                                    <td className="opdx__td" colSpan="3">
                                                        {i.products[4][index]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Swiper
                    pagination={{
                        type: 'fraction'
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000
                    }}
                    className="mySwiper twentythree"
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    <div className="twentythree__text">
                        <h2 className="opdx__title">Джалал-Абад область</h2>
                    </div>
                    {
                        djalal.map((i) => (
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="opdx__cart">
                                        <div className="opdx__people">
                                            <img src="" alt="people" className="opdx__people-img"/>
                                            <div className="opdx__info">
                                                <p className="opdx__desk">{i.number}</p>
                                                <h3 className="opdx__info-title">{i.name}</h3>
                                            </div>
                                        </div>
                                        <table className="opdx__table">
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="4">
                                                    Наименование хозяйства: "{i.place}";
                                                </td>
                                                <td className="opdx__td" colSpan="1">
                                                    Работники: {i.people};
                                                </td>
                                            </tr>
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="1">
                                                    Общ га: {i.products[0]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    экспорт: {i.products[1]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    {t("Opdx.phone")}: {i.phone ? `+996${i.phone}`: t("Opdx.answer")}
                                                </td>
                                            </tr>

                                            <tr className="opdx__tr" >
                                                <td className="opdx__td" colSpan="2">
                                                    Продукт
                                                </td>
                                                <td className="opdx__td" colSpan="3">
                                                    Количество Животных\Производство(в тоннах/штук)
                                                </td>
                                            </tr>

                                            {i.products[2].map((a, index) => (
                                                <tr className="opdx__tr" key={index}>
                                                    <td className="opdx__td" colSpan="2">
                                                        {a}
                                                    </td>
                                                    <td className="opdx__td" colSpan="3">
                                                        {i.products[4][index]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Swiper
                    pagination={{
                        type: 'fraction'
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000
                    }}
                    className="mySwiper twentythree"
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    <div className="twentythree__text">
                        <h2 className="opdx__title">Ош область</h2>
                    </div>
                    {
                        osh.map((i) => (
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="opdx__cart">
                                        <div className="opdx__people">
                                            <img src="" alt="people" className="opdx__people-img"/>
                                            <div className="opdx__info">
                                                <p className="opdx__desk">{i.number}</p>
                                                <h3 className="opdx__info-title">{i.name}</h3>
                                            </div>
                                        </div>
                                        <table className="opdx__table">
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="4">
                                                    Наименование хозяйства: "{i.place}";
                                                </td>
                                                <td className="opdx__td" colSpan="1">
                                                    Работники: {i.people};
                                                </td>
                                            </tr>
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="1">
                                                    Общ га: {i.products[0]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    экспорт: {i.products[1]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    {t("Opdx.phone")}: {i.phone ? `+996${i.phone}`: t("Opdx.answer")}
                                                </td>
                                            </tr>

                                            <tr className="opdx__tr" >
                                                <td className="opdx__td" colSpan="2">
                                                    Продукт
                                                </td>
                                                <td className="opdx__td" colSpan="3">
                                                    Количество Животных\Производство(в тоннах/штук)
                                                </td>
                                            </tr>

                                            {i.products[2].map((a, index) => (
                                                <tr className="opdx__tr" key={index}>
                                                    <td className="opdx__td" colSpan="2">
                                                        {a}
                                                    </td>
                                                    <td className="opdx__td" colSpan="3">
                                                        {i.products[4][index]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Swiper
                    pagination={{
                        type: 'fraction'
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000
                    }}
                    className="mySwiper twentythree"
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    <div className="twentythree__text">
                        <h2 className="opdx__title">Чүй область</h2>
                    </div>
                    {
                        chuy.map((i) => (
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="opdx__cart">
                                        <div className="opdx__people">
                                            <img src="" alt="people" className="opdx__people-img"/>
                                            <div className="opdx__info">
                                                <p className="opdx__desk">{i.number}</p>
                                                <h3 className="opdx__info-title">{i.name}</h3>
                                            </div>
                                        </div>
                                        <table className="opdx__table">
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="4">
                                                    Наименование хозяйства: "{i.place}";
                                                </td>
                                                <td className="opdx__td" colSpan="1">
                                                    Работники: {i.people};
                                                </td>
                                            </tr>
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="1">
                                                    Общ га: {i.products[0]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    экспорт: {i.products[1]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    {t("Opdx.phone")}: {i.phone ? `+996${i.phone}`: t("Opdx.answer")}
                                                </td>
                                            </tr>

                                            <tr className="opdx__tr" >
                                                <td className="opdx__td" colSpan="2">
                                                    Продукт
                                                </td>
                                                <td className="opdx__td" colSpan="3">
                                                    Количество Животных\Производство(в тоннах/штук)
                                                </td>
                                            </tr>

                                            {i.products[2].map((a, index) => (
                                                <tr className="opdx__tr" key={index}>
                                                    <td className="opdx__td" colSpan="2">
                                                        {a}
                                                    </td>
                                                    <td className="opdx__td" colSpan="3">
                                                        {i.products[4][index]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Swiper
                    pagination={{
                        type: 'fraction'
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000
                    }}
                    className="mySwiper twentythree"
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    <div className="twentythree__text">
                        <h2 className="opdx__title">Талас область</h2>
                    </div>
                    {
                        talas.map((i) => (
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="opdx__cart">
                                        <div className="opdx__people">
                                            <img src="" alt="people" className="opdx__people-img"/>
                                            <div className="opdx__info">
                                                <p className="opdx__desk">{i.number}</p>
                                                <h3 className="opdx__info-title">{i.name}</h3>
                                            </div>
                                        </div>
                                        <table className="opdx__table">
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="4">
                                                    Наименование хозяйства: "{i.place}";
                                                </td>
                                                <td className="opdx__td" colSpan="1">
                                                    Работники: {i.people};
                                                </td>
                                            </tr>
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="1">
                                                    Общ га: {i.products[0]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    экспорт: {i.products[1]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    {t("Opdx.phone")}: {i.phone ? `+996${i.phone}`: t("Opdx.answer")}
                                                </td>
                                            </tr>

                                            <tr className="opdx__tr" >
                                                <td className="opdx__td" colSpan="2">
                                                    Продукт
                                                </td>
                                                <td className="opdx__td" colSpan="3">
                                                    Количество Животных\Производство(в тоннах/штук)
                                                </td>
                                            </tr>

                                            {i.products[2].map((a, index) => (
                                                <tr className="opdx__tr" key={index}>
                                                    <td className="opdx__td" colSpan="2">
                                                        {a}
                                                    </td>
                                                    <td className="opdx__td" colSpan="3">
                                                        {i.products[4][index]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Swiper
                    pagination={{
                        type: 'fraction'
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000
                    }}
                    className="mySwiper twentythree"
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    <div className="twentythree__text">
                        <h2 className="opdx__title">Нарын область</h2>
                    </div>
                    {
                        naryn.map((i, index) => (
                            <SwiperSlide key={index}>
                                <div className="swiper-slide">
                                    <div className="opdx__cart">
                                        <div className="opdx__people">
                                            <img src="" alt="people" className="opdx__people-img"/>
                                            <div className="opdx__info">
                                                <p className="opdx__desk">{i.number}</p>
                                                <h3 className="opdx__info-title">{i.name}</h3>
                                            </div>
                                        </div>
                                        <table className="opdx__table">
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="4">
                                                    Наименование хозяйства: "{i.place}";
                                                </td>
                                                <td className="opdx__td" colSpan="1">
                                                    Работники: {i.people };
                                                </td>
                                            </tr>
                                            <tr className="opdx__tr">
                                                <td className="opdx__td" colSpan="1">
                                                    Общ га: {i.products[0]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    экспорт: {i.products[1]};
                                                </td>
                                                <td className="opdx__td" colSpan="2">
                                                    {t("Opdx.phone")}: {i.phone ? `+996${i.phone}`: t("Opdx.answer")}
                                                </td>
                                            </tr>

                                            <tr className="opdx__tr" >
                                                <td className="opdx__td" colSpan="2">
                                                    Продукт
                                                </td>
                                                <td className="opdx__td" colSpan="3">
                                                    Количество Животных\Производство(в тоннах/штук)
                                                </td>
                                            </tr>

                                            {i.products[2].map((a, index) => (
                                                <tr className="opdx__tr" key={index}>
                                                    <td className="opdx__td" colSpan="2">
                                                        {a}
                                                    </td>
                                                    <td className="opdx__td" colSpan="3">
                                                        {i.products[3][index]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
};

export default Year2023;