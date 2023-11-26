import React from 'react';
import {useTranslation} from "react-i18next";

const Pop = () => {

    return (
        <section className="pop">
            <label>
                <select className="year__select">
                    <option value="2022" className="year__option">2022</option>
                {/*<option value="2023" class="year__option">2023</option>*/}
                </select>
            </label>
            <table className="pop__table">
                <tr className="pop__tr">
                    <td className="pop__td" colSpan="7">Общая информация <br/>
                        о производителях органической сельскохозяйственной продукции получившие международные
                        сертификаты
                    </td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Наименование хозяйств, кооперативов</td>
                    <td className="pop__td">Международный сертификат</td>
                    <td className="pop__td">Количество участников</td>
                    <td className="pop__td">Название продукта</td>
                    <td className="pop__td">Общая Га</td>
                    <td className="pop__td">Производство(в тоннах)</td>
                    <td className="pop__td">Экспорт</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Сельскохозяйственный Товарно-Сервисный Кооператив "Аксы-Био" <br/> и группа
                        фермеров (которые объединены в кооператив "Бозбу Ата")</td>
                    <td className="pop__td">Экспорт Контроль Юнион, Нидерланды Германия, EgeSun Morgenland; <br/> Сан
                        Планет Россия; Сан Планет Органик (КР)</td>
                    <td className="pop__td">1054</td>
                    <td className="pop__td">Слива</td>
                    <td className="pop__td">1582</td>
                    <td className="pop__td">8000</td>
                    <td className="pop__td">5000</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td" rowSpan="2">Переработчик ОсОО "Фермерс Органик Гарден"</td>
                    <td className="pop__td" rowSpan="2">Экспорт Эко Серт Турция Турция, Молдова</td>
                    <td className="pop__td" rowSpan="2">1200</td>
                    <td className="pop__td">Орех</td>
                    <td className="pop__td">1400</td>
                    <td className="pop__td">5000</td>
                    <td className="pop__td">5000</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Плодовый сад</td>
                    <td className="pop__td">1600</td>
                    <td className="pop__td">7000</td>
                    <td className="pop__td">7000</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Переработчик "ИП Байоглиев"</td>
                    <td className="pop__td">Экспорт г.Измир Турция Испанская компания AGRUKAPERS.A.S</td>
                    <td className="pop__td">1000</td>
                    <td className="pop__td">Орех</td>
                    <td className="pop__td">1000</td>
                    <td className="pop__td">4000</td>
                    <td className="pop__td">4000</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Сельско-хозяйственный товарно-сервисный <br/> кооператив "Био Фермер</td>
                    <td className="pop__td">ИМО Турция хлопок (Германия) Рейнхарт, местный рынок</td>
                    <td className="pop__td">995</td>
                    <td className="pop__td">-</td>
                    <td className="pop__td">-</td>
                    <td className="pop__td">-</td>
                    <td className="pop__td">-</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Сельскохозяйственный кооператив "Алыш-Дан"</td>
                    <td className="pop__td">ИМО, Турция местный рынок</td>
                    <td className="pop__td">500</td>
                    <td className="pop__td">-</td>
                    <td className="pop__td">-</td>
                    <td className="pop__td">-</td>
                    <td className="pop__td">-</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Сельско-хозяйственный товарно-сервисный кооператив "Иссык-Куль Органика"
                    </td>
                    <td className="pop__td">Экспор тИМО (Турция 2015-2018) Германия без сертификата</td>
                    <td className="pop__td">223</td>
                    <td className="pop__td">Лекар. травы</td>
                    <td className="pop__td">150</td>
                    <td className="pop__td">58</td>
                    <td className="pop__td">58</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">“Сан Планет Органик”</td>
                    <td className="pop__td">Экспорт Турция</td>
                    <td className="pop__td">400</td>
                    <td className="pop__td">Хлопок</td>
                    <td className="pop__td">300</td>
                    <td className="pop__td">200</td>
                    <td className="pop__td">200</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Ассоциация лесопользователей и землепользователей Кыргызстан</td>
                    <td className="pop__td">Сертификат EU Organic , FSC (лесная сертификация )</td>
                    <td className="pop__td">200</td>
                    <td className="pop__td">Переработка дикой продукции</td>
                    <td className="pop__td">50</td>
                    <td className="pop__td">42</td>
                    <td className="pop__td">42</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Кооператив «Ишкер KG»</td>
                    <td className="pop__td">Сертификат EU Organic</td>
                    <td className="pop__td">200</td>
                    <td className="pop__td">Переработка дикой продукции</td>
                    <td className="pop__td">51</td>
                    <td className="pop__td">50</td>
                    <td className="pop__td">50</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Кооператив "Берен"</td>
                    <td className="pop__td">Сертификат EU Organic</td>
                    <td className="pop__td">430</td>
                    <td className="pop__td">Фасоль</td>
                    <td className="pop__td">200</td>
                    <td className="pop__td">150</td>
                    <td className="pop__td">150</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td" rowSpan="7">Итого</td>
                    <td className="pop__td" rowSpan="7">-</td>
                    <td className="pop__td" rowSpan="7">6202</td>
                    <td className="pop__td">Слива</td>
                    <td className="pop__td">1582</td>
                    <td className="pop__td">8000</td>
                    <td className="pop__td">5000</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Орех</td>
                    <td className="pop__td">2400</td>
                    <td className="pop__td">9000</td>
                    <td className="pop__td">9000</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Плодовый сад</td>
                    <td className="pop__td">1600</td>
                    <td className="pop__td">7000</td>
                    <td className="pop__td">7000</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Лекар. травы</td>
                    <td className="pop__td">150</td>
                    <td className="pop__td">150</td>
                    <td className="pop__td">58</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Хлопок</td>
                    <td className="pop__td">300</td>
                    <td className="pop__td">200</td>
                    <td className="pop__td">200</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Переработка дикой продукции</td>
                    <td className="pop__td">101</td>
                    <td className="pop__td">92</td>
                    <td className="pop__td">92</td>
                </tr>
                <tr className="pop__tr">
                    <td className="pop__td">Фасоль</td>
                    <td className="pop__td">200</td>
                    <td className="pop__td">150</td>
                    <td className="pop__td">150</td>
                </tr>
            </table>
        </section>
);
};

export default Pop;