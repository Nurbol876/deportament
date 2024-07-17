import React, {useContext, useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import {useTranslation} from "react-i18next";
import axios from "axios";
import Admin from "../../pages/AdminOfDep/Admin";
import {CustomContext} from "../../Context";

const Files = () => {

    const [file, setFile] = useState([])
    const [text, setText] = useState([])
    const {user} = useContext(CustomContext)

    useEffect(() => {
        axios("http://localhost:5555/files")
            .then((res) => setFile(res.data))
            .catch((err) => console.error(err))
    }, [])

    const {t} = useTranslation()

    const postDelete = (id, e) => {
        e.preventDefault()
        axios.delete(`http://localhost:5555/files/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => alert(err));
    }


    const addCard = (e) => {

        e.preventDefault()

        axios("http://localhost:4444/Files")
            .then((res) => setText(Object.entries(res.data)))
            .catch((err) => alert(err))

        const lastId = file.length > 0 ? file[file.length - 1].id : 0;

        const key = `subtitle${lastId}`

        const data = {
            [key]: e.target[1].value,
        };

        axios.patch("http://localhost:4444/Files", data)
            .then(() => alert("Кошулду"))
            .catch((err) => alert("error"))

        const newCard = {
            id: lastId + 1,
            img: (e.target[0].value === "") ? "" : e.target[0].files[0].name,
            subtitle: key,
            file: (e.target[2].value === "") ? "": e.target[2].files[0].name,
            btn: "btn4"
        };
        axios.post("http://localhost:5555/files", newCard)
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));
    }


    return (
        <section className="fourth">
            <Swiper spaceBetween={50}
                     slidesPerView={3}
                     autoplay={{ delay: 3000 }}
                     loop={true}
                     modules={[Pagination, Autoplay]}
                     pagination={{ clickable: true }}
                     className="mySwiper">
                {
                    file.map((i) => {
                        return (
                            <SwiperSlide key={i.id}>
                                <div className="fourth__cart">
                                    <div className="fourth__image">
                                        <img src={require(`./assets/${i.img}`)} alt="PDF" className="fourth__cart-img"/>
                                    </div>
                                    <h4 className="fourth__cart-title">
                                        {t(`Files.${i.subtitle}`)}
                                    </h4>
                                    <button className="btn">
                                        {i.file && (
                                            <a href={require(`./dowload/${i.file}`)} download="" className="fourth__link">
                                                {t(`Files.${i.btn}`)}
                                            </a>
                                        )}
                                    </button>

                                    {
                                        user && user.name === "Admin" && user.email === "nurbolsagynbekov876@gmail.com" && user.password === "KGdeportament" ? (
                                            <button style={{marginTop: "20px"}} onClick={e => postDelete(i.id, e)} className="btn">
                                                <p className="fourth__link">
                                                    өчүрүү
                                                </p>
                                            </button>
                                        ) : ""
                                    }
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                {
                    user && user.name === "Admin" && user.email === "nurbolsagynbekov876@gmail.com" && user.password === "KGdeportament" && (
                        <SwiperSlide>
                            <form onSubmit={addCard} className="fourth__cart">
                                <input accept="image/*" type="file" className="fourth__input"/>
                                <input type="text" className="fourth__cart-title"/>
                                <input type="file" className="fourth__input"/>
                                <button type="submit" className="btn">
                                    <p className="fourth__link">
                                        Койуу
                                    </p>
                                </button>
                            </form>
                        </SwiperSlide>
                    )
                }

            </Swiper>
            <div className="fourth__row">
                {
                    file.map((i) => {
                        return (
                            <div key={i.id} className="fourth__cart">
                                <div className="fourth__image">
                                    <img src={require(`./assets/${i.img}`)} alt="PDF" className="fourth__cart-img"/>
                                </div>
                                <h4 className="fourth__cart-title">
                                    {t(`Files.${i.subtitle}`)}
                                </h4>
                                <button className="btn">
                                    <a href={require(`./dowload/${i.file}`)} download="" className="fourth__link">
                                        {t(`Files.${i.btn}`)}
                                    </a>
                                </button>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default Files;