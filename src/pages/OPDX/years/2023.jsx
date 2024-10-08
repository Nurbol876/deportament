import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import arrow from "../../../components/Header/assets/arrow.svg";

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
        </>
    );
};

export default Year2023;