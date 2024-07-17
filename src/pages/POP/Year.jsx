import React, {useState, useEffect} from 'react';
import axios from "axios";

const Year = ({ year }) => {

    const[data, setData] = useState([])

    useEffect(() => {
        axios(`http://localhost:5555/Data${year}`)
            .then(({data}) => {
                setData(data.WorldCertifi)
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <table className="pop__table">
            <tr className="pop__tr">
                <td className="pop__td" colSpan="8">Общая информация <br/>
                    о производителях органической сельскохозяйственной продукции получившие международные
                    сертификаты
                </td>
            </tr>
            <tr className="pop__tr">
                <td className="pop__td">Наименование хозяйств, кооперативов</td>
                <td className="pop__td">Международный сертификат</td>
                <td className="pop__td">Количество участников</td>
                <td className="pop__td">Телефон</td>
                <td className="pop__td">Название продукта</td>
                <td className="pop__td">Общая Га</td>
                <td className="pop__td">Производство(в тоннах)</td>
                <td className="pop__td">Экспорт</td>
            </tr>
            {
                data.map((i) => (
                    <tr className="pop__tr">
                        <td className="pop__td">{i.koop} {i.owner}</td>
                        <td className="pop__td">{i.certificate}</td>
                        <td className="pop__td">{i.people}</td>
                        <td className="pop__td">{i.phone}</td>
                        <td className="pop__td">{i.products[0].map(i => i)}</td>
                        <td className="pop__td">{i.area}</td>
                        <td className="pop__td">{i.products[1].map(i => i)}</td>
                        <td className="pop__td">{i.port}</td>
                    </tr>
                ))
            }
        </table>

    );
};

export default Year;