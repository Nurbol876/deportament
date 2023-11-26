import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/swiper-bundle.min.css';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import {useTranslation} from "react-i18next";

const Oad = () => {

    const {t} = useTranslation()

    return (
        <section className="OAD">
            <label>
                <select className="year__select">
                    <option value="2022" className="year__option">2022</option>
                </select>                    {/*<option value="2023" class="year__option">2023</option>*/}

            </label>
            <h1 className="title">{t("World.title")}</h1>
            <Swiper
                loop={true}
                pagination={{
                    type: 'fraction'
                }}
                navigation={true}
                autoplay={{
                    delay: 3000
                }}
                className="mySwiper"
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№1</p>
                            <h2 className="OAD__title">Зардалы о/а Баткенская область Баткенский район Кара-Бакский
                                а/о с.Зардалы
                            </h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">1170</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">90</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td">1000</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">80</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td">Яблоки(40 тн.) пшеница(15 тн.) абрикос(55 тн.) кукуруза(25
                                    тн.)
                                </td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td">Козы овцы корова</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">№50 24.10.20 Кара-Бакский айылный кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td">219 человек 45 семья М-110 Ж-109</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td">Трактор-2шт Портер-3шт</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td">Освещение,электричество, связь, дорога</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td">Есть 2 теплицы</td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№2</p>
                            <h2 className="OAD__title">Кайынды о/а Баткенская область Баткенский район, Дара а/о, с.
                                Кайынды</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">3021</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">3021</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td">1005</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">825</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td">Яблонный сад 100 га</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td">Овцы 517, корова 590, козы 396, лошади 10</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">№512 28.02.2023г. Даринского айылный кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td">62</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td">Дороги не асфальтированные</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td"></td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№3</p>
                            <h2 className="OAD__title">Бургонду а/а Жалал-Абадская область Ноокенский район
                                с.Курама</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">1625</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">1330</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td">105</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">190</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td">болгарский перец,томат,хлопок</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td">Крупный рогатый скот, овцы, лошадь</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">№4 19.09.2020г. Бургандинский айылный кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td">190-М 41-Ж</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td">Трактор МТЗ-80 ед Портер-2шт</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td">поливная вода</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td">Логистический центр заканчивается строительство, на базе
                                    которого будет сезонная лаборатория по произв. Энтомофагов
                                </td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№4</p>
                            <h2 className="OAD__title">Кызыл-Ункур о/а, Жалал-Абадская область, Базар-Коргонский
                                район, с. Кызыл-Ункур</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">1045</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">1045</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td">Лесное, дикоростущие хозяйства: Орех 405га, дикое яблоко
                                    380га, слива 260га
                                </td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">19.08.2021г. № 6 Токтом Кызыл-Ункур айылный кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td"></td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№5</p>
                            <h2 className="OAD__title">Зардалы о/а Баткенская область Баткенский район Кара-Бакский
                                а/о с.Зардалы</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">30120</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">120</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td">30000</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">120</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td">картофель, ячмень</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td">Яки 15000, Овцы 5000</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">№2 12.09.20 Чон-Алай айылдык кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td">20</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td">Трактор-150 ед</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td">доставка семян - транспортировка дорого</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td">Швейный цех-20работниками</td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№6</p>
                            <h2 className="OAD__title">Жошолу а/а Ошская область Алайский район</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">16877</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">401</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td">16476</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">401</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td">Картофель,овощи, абрикос, яблоневый сад</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td">Яки 3875, овцы 13110, Лошадь 2425</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">№38/1 26.06.20 Жошолу айылный кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td">110</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td">МТЗ 80 5ед. Мини трактор-4шт</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td">Склад для хранения семян,Для полива 24 га нужно построить
                                    водоканал
                                </td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td">Швейный цех-10 работниками</td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№7</p>
                            <h2 className="OAD__title">Бүлөлү а/а Ошская область Алайский район</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">11389</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">127</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td">11262</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">127</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td">Картофель, ячмень</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td">Яки 1090, овцы 13110, Лошадь 2425</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">№3/2 01.09.20 Булолу айылный кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td">30</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td">ЮТО-554 1ед</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td">Аппарат для переработки молока</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td">Цех переработки молока - 500л</td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№8</p>
                            <h2 className="OAD__title">Барпыкул а/а Талаская областы Кара-Бууринский район
                                с.Кызыл-Адыр</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">90</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">70</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">20</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td">3га яблонный сад, пшеница, фасоль, многолетнее растение</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td">рогатый скот - 10</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">№32 19.10.20 Кара-Бууринский айылный кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td">М -20 Ж-10</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td">Бусик-3ед, ГАЗ 53 1ед погрузчик-1ед камаз, трактор, комп
                                    комбайн
                                </td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td">Поливная вода,техника</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td">Мельница, кирпичный завод</td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№9</p>
                            <h2 className="OAD__title">Чоң-Таш а/а, Ыссык-Кульская область, Тупский район, Чон-Таш
                                а/а</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">3360</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">15</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td">1478</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">1131</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td">Черная смородина, чеснок</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td">-</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td"> 11.09.20 Чон-Таш айылный кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td">25</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td">Трактор ЮМЗ 1ед,Погрузчик КУН 10ед экскаватор МТЗ
                                    82, <br/> Т-25,опрыскиватель 1ед, комбайн-1ед, картофелуборочный,
                                    <br/> дождевальный аппарат 2 комп,косилка 1шт, грабли мех</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td">Продажа произведенной продукции</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td">Черную смородину продали проекту KOIKA органику</td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№10</p>
                            <h2 className="OAD__title">Калча а/а Нарынская область Нарынский район
                                с.Эмгек-Талаа</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">99</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">60</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td"> -</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">60</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td">Пшеница - 10 Ячмень -- 20 многолетнее трава - 62</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td">Корова - 69, Лощадь - 55 Овцы - 700</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">№2 03.11.20 Эмгек-Талаа айылный кеңеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td">163 человек</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td">Трактор-5ед, ДТ-75-1ед</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td">Продажа произведенной продукции</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td"></td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№11</p>
                            <h2 className="OAD__title">Кош-Коргон а/а Чуйская область Чуйский район с. Кош-Коргон
                                27.10.21. №16 Токтом</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">2751</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">10</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td">967</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">1558</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td">Яблонный сад 368 га сорт айдаркен</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td">Корова - 1000, Лощадь - 200, Овцы - 100</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">№16 27.10.20 Кош-Коргонский айылный кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td">1259 человек 200работники</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td">3 шт комбайн, 20 шт трактор</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td">Продажа произведенной продукции</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td">Комбикормовый мельница, 7 рабочих в швейном цехе</td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№12</p>
                            <h2 className="OAD__title">Чуйская область Московский район Ак-Суйский а/а</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">29444</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">50</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td">9000</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">9875</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">№192 17.03.21. Токтом Ак-Суу айылный кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td"></td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№13</p>
                            <h2 className="OAD__title">Жумгалский район Байзак а/о</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">32774,7</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">150</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td">2000</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">1050</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td">09.02.2021г. №45/2 Токтом Байзак айылный кенеш</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td"></td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <h2 className="OAD__title">Итого</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">133765,7</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Органика га</td>
                                <td className="OAD__td">6489</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пастбища га</td>
                                <td className="OAD__td">73293</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Пахотная земля га</td>
                                <td className="OAD__td">15437</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="2">Направление</td>
                                <td className="OAD__td">растениеводство</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Скотоводства</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">№ Постановление</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Количество работников</td>
                                <td className="OAD__td">2119</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Техника</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Проблемы</td>
                                <td className="OAD__td"></td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Дополнительная информация</td>
                                <td className="OAD__td"></td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
            </Swiper>
            <h2 className="title">{t("World.title2")}</h2>
            <Swiper
                    loop={true}
                    pagination={{
                                  type: 'fraction'
                              }}
                    navigation={true}
                    autoplay={{
                        delay: 3000
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper">
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№1</p>
                            <h2 className="OAD__title">Teplokluychenka орг. аймагы </h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">4812</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="10">растениеводство</td>
                                <td className="OAD__td">Картошка</td>
                                <td className="OAD__td">26909</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Огурец</td>
                                <td className="OAD__td">250</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Чеснок</td>
                                <td className="OAD__td">129</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Помидор</td>
                                <td className="OAD__td">250</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Кукуруза</td>
                                <td className="OAD__td">500</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Пшеница</td>
                                <td className="OAD__td">5430</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Ячмень</td>
                                <td className="OAD__td">1353</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Плодовый сад</td>
                                <td className="OAD__td">418</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Овощной</td>
                                <td className="OAD__td">321,5</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Яблоко</td>
                                <td className="OAD__td">150</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="5">Мал чарбасы</td>
                                <td className="OAD__td">Як</td>
                                <td className="OAD__td">2</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Овцы</td>
                                <td className="OAD__td">3</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Лошадь</td>
                                <td className="OAD__td">5</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Птицы</td>
                                <td className="OAD__td">1</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Яйца</td>
                                <td className="OAD__td">100000</td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№2</p>
                            <h2 className="OAD__title">Маман орг. аймагы</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">4233</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="4">растениеводство</td>
                                <td className="OAD__td">Картошка</td>
                                <td className="OAD__td">2880</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Чеснок</td>
                                <td className="OAD__td">500</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Пшеница</td>
                                <td className="OAD__td">449</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Ячмень</td>
                                <td className="OAD__td">386</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="3">Мал чарбасы</td>
                                <td className="OAD__td">Овцы</td>
                                <td className="OAD__td">1</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Лошадь</td>
                                <td className="OAD__td">1</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Яйца</td>
                                <td className="OAD__td">20000</td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk">№3</p>
                            <h2 className="OAD__title">Тосор орг. аймагы</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">1602</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="7">растениеводство</td>
                                <td className="OAD__td">Картошка</td>
                                <td className="OAD__td">2896</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Чеснок</td>
                                <td className="OAD__td">54,6</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Пшеница</td>
                                <td className="OAD__td">543,2</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Ячмень</td>
                                <td className="OAD__td">740</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Абрикос</td>
                                <td className="OAD__td">2000</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Плодовый сад</td>
                                <td className="OAD__td">2929</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Овощной</td>
                                <td className="OAD__td">272</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="3">Мал чарбасы</td>
                                <td className="OAD__td">Як</td>
                                <td className="OAD__td">1</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Овцы</td>
                                <td className="OAD__td">2</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Яйца</td>
                                <td className="OAD__td">35000</td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="OAD__cart">
                        <div className="OAD__info">
                            <p className="OAD__desk"></p>
                            <h2 className="OAD__title">Итого:</h2>
                        </div>
                        <table className="OAD__table">
                            <tr className="OAD__tr">
                                <td className="OAD__td" colSpan="2">Площадь земель га</td>
                                <td className="OAD__td">10647</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="11">растениеводство</td>
                                <td className="OAD__td">Картошка</td>
                                <td className="OAD__td">32685</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Огурец</td>
                                <td className="OAD__td">250</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Чеснок</td>
                                <td className="OAD__td">683,60</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Помидор</td>
                                <td className="OAD__td">250</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Кукуруза</td>
                                <td className="OAD__td">500</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Пшеница</td>
                                <td className="OAD__td">6522</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Ячмень</td>
                                <td className="OAD__td">2479</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Абрикос</td>
                                <td className="OAD__td">2000</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Плодовый сад</td>
                                <td className="OAD__td">3347</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Овощной</td>
                                <td className="OAD__td">593,5</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Яблоко</td>
                                <td className="OAD__td">226</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td" rowSpan="5">Мал чарбасы</td>
                                <td className="OAD__td">Як</td>
                                <td className="OAD__td">3</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Овцы</td>
                                <td className="OAD__td">6</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Лошадь</td>
                                <td className="OAD__td">6</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Птицы</td>
                                <td className="OAD__td">1</td>
                            </tr>
                            <tr className="OAD__tr">
                                <td className="OAD__td">Яйца</td>
                                <td className="OAD__td">155000</td>
                            </tr>
                        </table>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
);
};

export default Oad;