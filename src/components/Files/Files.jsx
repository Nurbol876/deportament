import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, loop } from 'swiper/modules';
import pdf from './assets/pdf.svg'
import second from './assets/pptx.svg'
import xlsx from './assets/xlsx.svg'
import word from './assets/word.svg'
import file from './dowload/Департаменттин Жобосу.docx'
import file_second from './dowload/Органика Мыйзамы.docx'
import pptx from "./dowload/pptx.pptx"
import xlsxFile from "./dowload/xlsx.xlsx"
import xlsxFile__second from "./dowload/xlsx2.xlsx"
import personal from "./dowload/personal.docx"
import pdfFile from "./dowload/fourth__pdf.pdf"
import {useTranslation} from "react-i18next";

const Files = () => {

    const {t} = useTranslation()

    return (
        <section className="fourth">
            <Swiper spaceBetween={50}
                     slidesPerView={3}
                     Autoplay={{ delay: 3000 }}
                     loop={true}
                     modules={[Pagination, Autoplay]}
                     pagination={{ clickable: true }}
                     className="mySwiper">
                <SwiperSlide>
                    <div className="fourth__cart">
                        <div className="fourth__image">
                            <img src={pdf} alt="PDF" className="fourth__cart-img"/>
                        </div>
                        <h4 className="fourth__cart-title">
                            {t("Home.Files.subtitle1")}
                        </h4>
                        <button className="btn">
                            <a href={pdfFile} download="" className="fourth__link">
                                {t("Home.Files.btn3")}
                            </a>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fourth__cart">
                        <div className="fourth__image">
                            <img src={second} alt="pptx" className="fourth__cart-img"/>
                        </div>
                        <h4 className="fourth__cart-title">
                            {t("Home.Files.subtitle1")}
                        </h4>
                        <button className="btn">
                            <a href={pptx} download="" className="fourth__link">
                                {t("Home.Files.btn3")}
                            </a>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fourth__cart">
                        <div className="fourth__image">
                            <img src={xlsx} alt="xlsx" className="fourth__cart-img"/>
                        </div>
                        <h4 className="fourth__cart-title">
                            {t("Home.Files.subtitle2")}
                        </h4>
                        <button className="btn">
                            <a href={xlsxFile} download="" className="fourth__link">
                                {t("Home.Files.btn1")}
                            </a>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fourth__cart">
                        <div className="fourth__image">
                            <img src={xlsx} alt="pptx" className="fourth__cart-img"/>
                        </div>
                        <h4 className="fourth__cart-title">
                            {t("Home.Files.subtitle2")}
                        </h4>
                        <button className="btn">
                            <a href={xlsxFile__second} download="" className="fourth__link">
                                {t("Home.Files.btn1")}
                            </a>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fourth__cart">
                        <div className="fourth__image">
                            <img src={word} alt="word" className="fourth__cart-img"/>
                        </div>
                        <h4 className="fourth__cart-title">
                            {t("Home.Files.subtitle3")}
                        </h4>
                        <button className="btn">
                            <a href={personal} download="" className="fourth__link">
                                {t("Home.Files.btn2")}
                            </a>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fourth__cart">
                        <div className="fourth__image">
                            <img src={word} alt="word" className="fourth__cart-img"/>
                        </div>
                        <h4 className="fourth__cart-title">
                            {t("Home.Files.subtitle4")}
                        </h4>
                        <button className="btn">
                            <a href={file} download=""
                               className="fourth__link">
                                {t("Home.Files.btn2")}
                            </a>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fourth__cart">
                        <div className="fourth__image">
                            <img src={word} alt="pptx" className="fourth__cart-img"/>
                        </div>
                        <h4 className="fourth__cart-title">
                            {t("Home.Files.subtitle5")}
                        </h4>
                        <button className="btn">
                            <a href={file_second} download="" className="fourth__link">
                                {t("Home.Files.btn2")}
                            </a>
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="fourth__row">
                <div className="fourth__cart">
                    <div className="fourth__image">
                        <img src={pdf} alt="PDF" className="fourth__cart-img"/>
                    </div>
                    <h4 className="fourth__cart-title">
                        {t("Home.Files.subtitle1")}
                    </h4>
                    <button className="btn">
                        <a href="./dowload/fourth__pdf.pdf" download="" className="fourth__link">
                            {t("Home.Files.btn3")}
                        </a>
                    </button>
                </div>
                <div className="fourth__cart">
                    <div className="fourth__image">
                        <img src={second} alt="pptx" className="fourth__cart-img"/>
                    </div>
                    <h4 className="fourth__cart-title">
                        {t("Home.Files.subtitle1")}
                    </h4>
                    <button className="btn">
                        <a href={pptx} className="fourth__link">
                            {t("Home.Files.btn3")}
                        </a>
                    </button>
                </div>
                <div className="fourth__cart">
                    <div className="fourth__image">
                        <img src={xlsx} alt="xlsx" className="fourth__cart-img"/>
                    </div>
                    <h4 className="fourth__cart-title">
                        {t("Home.Files.subtitle2")}
                    </h4>
                    <button className="btn">
                        <a href={xlsxFile} download="" className="fourth__link">
                            {t("Home.Files.btn1")}
                        </a>
                    </button>
                </div>
                <div className="fourth__cart">
                    <div className="fourth__image">
                        <img src={xlsx} alt="pptx" className="fourth__cart-img"/>
                    </div>
                    <h4 className="fourth__cart-title">
                        {t("Home.Files.subtitle2")}
                    </h4>
                    <button className="btn">
                        <a href={xlsxFile__second} download="" className="fourth__link">
                            {t("Home.Files.btn1")}
                        </a>
                    </button>
                </div>
                <div className="fourth__cart">
                    <div className="fourth__image">
                        <img src={word} alt="pptx" className="fourth__cart-img"/>
                    </div>
                    <h4 className="fourth__cart-title">
                        {t("Home.Files.subtitle3")}
                    </h4>
                    <button className="btn">
                        <a href={personal} download="" className="fourth__link">
                            {t("Home.Files.btn2")}
                        </a>
                    </button>
                </div>
            </div>
        </section>
);
};

export default Files;