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
            <table className="pou__table">
                <tr className="pou__tr">
                    <td colSpan="9" className="pou__td pou__td-title">
                        Информация по пилотным хозяйствам ДОСХ 2023г.
                    </td>
                </tr>
                <tr className="pou__tr">
                    <td className="pou__td">№ свидет-ва</td>
                    <td className="pou__td">Ф.И.О фермера и районы</td>
                    <td className="pou__td">Наименование хозяйства</td>
                    <td className="pou__td">Номер телефона</td>
                    <td className="pou__td">Число человек</td>
                    <td className="pou__td">Площадь земли ГА</td>
                    <td className="pou__td">Экспорт</td>
                    <td className="pou__td">Продукция</td>
                    <td className="pou__td">Производство</td>
                </tr>
                <tr className="pou__tr">
                    <td colSpan="9" className="pou__td">
                        Баткен область
                    </td>
                </tr>
                {batken.map((i) => (
                    <React.Fragment key={i.number}>
                        <tr className="pou__tr">
                            <td className="pou__td">{i.number}</td>
                            <td className="pou__td">{i.name}</td>
                            <td className="pou__td">{i.place}</td>
                            <td className="pou__td">{i.phone ? `+996${i.phone}` : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.people ? i.people : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.products[0]}</td>
                            <td className="pou__td">{i.products[1]}</td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[2].map((a, index) => (
                                        <tr key={index}>
                                            <td colSpan={1} className="opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[3].map((a, index) => (
                                        <tr key={index}>
                                            <td className=" opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
                <tr className="pou__tr">
                    <td colSpan="9" className="pou__td">
                        Ысык-Көл область
                    </td>
                </tr>
                {issykKul.map((i) => (
                    <React.Fragment key={i.number}>
                        <tr className="pou__tr">
                            <td className="pou__td">{i.number}</td>
                            <td className="pou__td">{i.name}</td>
                            <td className="pou__td">{i.place}</td>
                            <td className="pou__td">{i.phone ? `+996${i.phone}` : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.people ? i.people : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.products[0]}</td>
                            <td className="pou__td">{i.products[1]}</td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[2].map((a, index) => (
                                        <tr key={index}>
                                            <td colSpan={1} className="opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[3].map((a, index) => (
                                        <tr key={index}>
                                            <td className=" opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
                <tr className="pou__tr">
                    <td colSpan="9" className="pou__td">
                        Джалал-Абад область
                    </td>
                </tr>
                {djalal.map((i) => (
                    <React.Fragment key={i.number}>
                        <tr className="pou__tr">
                            <td className="pou__td">{i.number}</td>
                            <td className="pou__td">{i.name}</td>
                            <td className="pou__td">{i.place}</td>
                            <td className="pou__td">{i.phone ? `+996${i.phone}` : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.people ? i.people : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.products[0]}</td>
                            <td className="pou__td">{i.products[1]}</td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[2].map((a, index) => (
                                        <tr key={index}>
                                            <td colSpan={1} className="opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[3].map((a, index) => (
                                        <tr key={index}>
                                            <td className=" opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
                <tr className="pou__tr">
                    <td colSpan="9" className="pou__td">
                        Ош область
                    </td>
                </tr>
                {osh.map((i) => (
                    <React.Fragment key={i.number}>
                        <tr className="pou__tr">
                            <td className="pou__td">{i.number}</td>
                            <td className="pou__td">{i.name}</td>
                            <td className="pou__td">{i.place}</td>
                            <td className="pou__td">{i.phone ? `+996${i.phone}` : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.people ? i.people : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.products[0]}</td>
                            <td className="pou__td">{i.products[1]}</td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[2].map((a, index) => (
                                        <tr key={index}>
                                            <td colSpan={1} className="opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[3].map((a, index) => (
                                        <tr key={index}>
                                            <td className=" opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
                <tr className="pou__tr">
                    <td colSpan="9" className="pou__td">
                        Чуй область
                    </td>
                </tr>
                {chuy.map((i) => (
                    <React.Fragment key={i.number}>
                        <tr className="pou__tr">
                            <td className="pou__td">{i.number}</td>
                            <td className="pou__td">{i.name}</td>
                            <td className="pou__td">{i.place}</td>
                            <td className="pou__td">{i.phone ? `+996${i.phone}` : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.people ? i.people : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.products[0]}</td>
                            <td className="pou__td">{i.products[1]}</td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[2].map((a, index) => (
                                        <tr key={index}>
                                            <td colSpan={1} className="opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[3].map((a, index) => (
                                        <tr key={index}>
                                            <td className=" opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
                <tr className="pou__tr">
                    <td colSpan="9" className="pou__td">
                        Талас область
                    </td>
                </tr>
                {talas.map((i) => (
                    <React.Fragment key={i.number}>
                        <tr className="pou__tr">
                            <td className="pou__td">{i.number}</td>
                            <td className="pou__td">{i.name}</td>
                            <td className="pou__td">{i.place}</td>
                            <td className="pou__td">{i.phone ? `+996${i.phone}` : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.people ? i.people : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.products[0]}</td>
                            <td className="pou__td">{i.products[1]}</td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[2].map((a, index) => (
                                        <tr key={index}>
                                            <td colSpan={1} className="opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[3].map((a, index) => (
                                        <tr key={index}>
                                            <td className=" opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
                <tr className="pou__tr">
                    <td colSpan="9" className="pou__td">
                        Нарын область
                    </td>
                </tr>
                {naryn.map((i) => (
                    <React.Fragment key={i.number}>
                        <tr className="pou__tr">
                            <td className="pou__td">{i.number}</td>
                            <td className="pou__td">{i.name}</td>
                            <td className="pou__td">{i.place}</td>
                            <td className="pou__td">{i.phone ? `+996${i.phone}` : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.people ? i.people : t("Opdx.answer")}</td>
                            <td className="pou__td">{i.products[0]}</td>
                            <td className="pou__td">{i.products[1]}</td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[2].map((a, index) => (
                                        <tr key={index}>
                                            <td colSpan={1} className="opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                            <td className="pou__td">
                                <table className="nested-table">
                                    <tbody>
                                    {i.products[3].map((a, index) => (
                                        <tr key={index}>
                                            <td className=" opdx__products pou__td">{a}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
            </table>
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