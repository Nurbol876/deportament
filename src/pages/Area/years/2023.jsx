import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useTranslation} from "react-i18next";
import {CustomContext} from "../../../Context";

const Years = ({year, place}) => {

    const {t} = useTranslation()
    const {start, setStart} = useContext(CustomContext)

    const[data, setData] = useState([])
    const[oblast, setOblast] = useState("")

    useEffect(() => {
        if(start){
            axios(`http://localhost:5555/Data${year}`)
                .then(({data}) => {
                    switch (place) {
                        case "Chuy":
                            setData(data.Chuy);
                            setOblast("Чүй");
                            break;
                        case "Naryn":
                            setData(data.Naryn);
                            setOblast("Нарын");
                            break;
                        case "Talas":
                            setData(data.Talas);
                            setOblast("Талас");
                            break;
                        case "DjalalAbad":
                            setData(data.JalalAbad);
                            setOblast("Джалал-Абад");
                            break;
                        case "IssykKul":
                            setData(data.IssykKul);
                            setOblast("Ысык-Көл");
                            break;
                        case "Batken":
                            setData(data.Batken);
                            setOblast("Баткен");
                            break;
                        default:
                            setData(data.Osh);
                            setOblast("Ош");
                    setStart(0)
                }})
                .catch((err) => console.log(err))
        }
    }, [year, place, start])

    console.log(data)

    return (
        <>
            <table className="pou__table">
                <thead>
                <tr className="pou__tr">
                    <td colSpan="9" className="pou__td pou__td-title">
                        {oblast} область
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
                </thead>
                <tbody>
                {data.map((i) => (
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
                </tbody>
            </table>
        </>
    );

};

export default Years;