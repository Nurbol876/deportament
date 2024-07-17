import React, {useEffect, useState} from 'react';
import axios from "axios";

const Admin = () => {

    const[russiaHeader, setRussiaHeader] = useState({})
    const[kyrgyzHeader, setKyrgyzHeader] = useState({})
    const[russiaNavbar, setRussiaNavbar] = useState({})
    const[kyrgyzNavbar, setKyrgyzNavbar] = useState({})
    const[russiaWorld, setRussiaWorld] = useState({})
    const[kyrgyzWorld, setKyrgyzWorld] = useState({})
    const[russiaFirst, setRussiaFirst] = useState({})
    const[kyrgyzFirst, setKyrgyzFirst] = useState({})
    const[russiaSecond, setRussiaSecond] = useState({})
    const[kyrgyzSecond, setKyrgyzSecond] = useState({})
    const[russiaThird, setRussiaThird] = useState({})
    const[kyrgyzThird, setKyrgyzThird] = useState({})
    const[russiaFiles, setRussiaFiles] = useState({})
    const[kyrgyzFiles, setKyrgyzFiles] = useState({})
    const[selectImage, setSelectImage] = useState({})
    const[director, setDirector] = useState({})

    useEffect(() => {
        axios("http://localhost:8888/Header")
            .then(({data}) => setRussiaHeader(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:4444/Header")
            .then(({data}) => setKyrgyzHeader(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:8888/Navbar")
            .then(({data}) => setRussiaNavbar(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:4444/Navbar")
            .then(({data}) => setKyrgyzNavbar(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:8888/World")
            .then(({data}) => setRussiaWorld(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:8888/World")
            .then(({data}) => setKyrgyzWorld(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:8888/First")
            .then(({data}) => setRussiaFirst(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:4444/First")
            .then(({data}) => setKyrgyzFirst(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:8888/Second")
            .then(({data}) => setRussiaSecond(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:4444/Second")
            .then(({data}) => setKyrgyzSecond(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:8888/Third")
            .then(({data}) => setRussiaThird(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:4444/Third")
            .then(({data}) => setKyrgyzThird(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:8888/Files")
            .then(({data}) => setRussiaFiles(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:4444/Files")
            .then(({data}) => setKyrgyzFiles(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:5555/images")
            .then(({data}) => setSelectImage(data))
            .catch((err) => alert(err))
    }, [])

    useEffect(() => {
        axios("http://localhost:5555/images")
            .then(({data}) => setDirector(data))
            .catch((err) => alert(err))
    }, [])

    const onSubmitHeaderRussian = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:8888/Header", {
            "title": (e.target[0].value === "") ? russiaHeader.title : e.target[0].value,
            "link1": (e.target[1].value === "") ? russiaHeader.link1 : e.target[1].value ,
            "link2": (e.target[2].value === "") ? russiaHeader.link2 : e.target[2].value,
            "link3": (e.target[3].value === "") ? russiaHeader.link3 : e.target[3].value,
            "link4": (e.target[4].value === "") ? russiaHeader.link4 : e.target[4].value ,
            "desk1": (e.target[5].value === "") ? russiaHeader.desk1 : e.target[5].value,
            "desk2": (e.target[6].value === "") ? russiaHeader.desk2 : e.target[6].value,
            "btn": (e.target[7].value === "") ? russiaHeader.btn : e.target[7].value
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitHeaderKyrgyz = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:4444/Header", {
            "title": (e.target[0].value === "") ? kyrgyzHeader.title : e.target[0].value,
            "link1": (e.target[1].value === "") ? kyrgyzHeader.link1 : e.target[1].value ,
            "link2": (e.target[2].value === "") ? kyrgyzHeader.link2 : e.target[2].value,
            "link3": (e.target[3].value === "") ? kyrgyzHeader.link3 : e.target[3].value,
            "link4": (e.target[4].value === "") ? kyrgyzHeader.link4 : e.target[4].value ,
            "desk1": (e.target[5].value === "") ? kyrgyzHeader.desk1 : e.target[5].value,
            "desk2": (e.target[6].value === "") ? kyrgyzHeader.desk2 : e.target[6].value,
            "btn": (e.target[7].value === "") ? kyrgyzHeader.btn : e.target[7].value
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitNavbarRussian = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:8888/Navbar", {
            "link1": (e.target[0].value === "") ? russiaNavbar.link1 : e.target[0].value ,
            "link2": (e.target[1].value === "") ? russiaNavbar.link2 : e.target[1].value,
            "link3": (e.target[2].value === "") ? russiaNavbar.link3 : e.target[2].value,
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitNavbarKyrgyz = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:4444/Navbar", {
            "link1": (e.target[0].value === "") ? kyrgyzNavbar.link1 : e.target[0].value ,
            "link2": (e.target[1].value === "") ? kyrgyzNavbar.link2 : e.target[1].value,
            "link3": (e.target[2].value === "") ? kyrgyzNavbar.link3 : e.target[2].value,
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitWorldRussian = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:8888/World", {
            "title": (e.target[0].value === "") ? russiaWorld.title : e.target[0].value ,
            "title2": (e.target[1].value === "") ? russiaWorld.title2 : e.target[1].value,
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitWorldKyrgyz = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:4444/World", {
            "title": (e.target[0].value === "") ? kyrgyzWorld.title : e.target[0].value ,
            "title2": (e.target[1].value === "") ? kyrgyzWorld.title2 : e.target[1].value,
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitFirstRussian = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:8888/First", {
            "title": (e.target[0].value === "") ? russiaFirst.title : e.target[0].value ,
            "subtitle": (e.target[1].value === "") ? russiaFirst.subtitle : e.target[1].value,
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitFirstKyrgyz = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:4444/First", {
            "title": (e.target[0].value === "") ? kyrgyzFirst.title : e.target[0].value ,
            "subtitle": (e.target[1].value === "") ? kyrgyzFirst.subtitle : e.target[1].value,
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitSecondRussian = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:8888/Second", {
            "title": (e.target[0].value === "") ? russiaSecond.title : e.target[0].value ,
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitSecondKyrgyz = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:4444/Second", {
            "title": (e.target[0].value === "") ? kyrgyzSecond.title : e.target[0].value ,
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitThirdRussian = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:8888/Third", {
            "title": (e.target[0].value === "") ? russiaThird.title : e.target[0].value ,
            "subtitle1": (e.target[1].value === "") ? russiaThird.subtitle1 : e.target[1].value ,
            "subtitle2": (e.target[2].value === "") ? russiaThird.subtitle2 : e.target[2].value ,
            "btn1": (e.target[3].value === "") ? russiaThird.btn1 : e.target[3].value ,
            "btn2": (e.target[4].value === "") ? russiaThird.btn2 : e.target[4].value ,
            "btn3": (e.target[2.5*2].value === "") ? russiaThird.btn3 : e.target[5].value
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitThirdKyrgyz = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:4444/Third", {
            "title": (e.target[0].value === "") ? kyrgyzThird.title : e.target[0].value ,
            "subtitle1": (e.target[1].value === "") ? kyrgyzThird.subtitle1 : e.target[1].value ,
            "subtitle2": (e.target[2].value === "") ? kyrgyzThird.subtitle2 : e.target[2].value ,
            "btn1": (e.target[3].value === "") ? kyrgyzThird.btn1 : e.target[3].value ,
            "btn2": (e.target[4].value === "") ? kyrgyzThird.btn2 : e.target[4].value ,
            "btn3": (e.target[2.5*2].value === "") ? kyrgyzThird.btn3 : e.target[5].value
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitFilesRussian = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:8888/Files", {
            "subtitle1": (e.target[0].value === "") ? russiaFiles.subtitle1 : e.target[0].value ,
            "subtitle2": (e.target[1].value === "") ? russiaFiles.subtitle2 : e.target[1].value ,
            "subtitle3": (e.target[2].value === "") ? russiaFiles.subtitle3 : e.target[2].value ,
            "subtitle4": (e.target[3].value === "") ? russiaFiles.subtitle4 : e.target[3].value ,
            "subtitle5": (e.target[4].value === "") ? russiaFiles.subtitle5 : e.target[4].value ,
            "btn1": (e.target[5].value === "") ? russiaFiles.btn1 : e.target[5].value ,
            "btn2": (e.target[6].value === "") ? russiaFiles.btn2 : e.target[6].value ,
            "btn3": (e.target[3.5*2].value === "") ? russiaFiles.btn3 : e.target[7].value
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitFilesKyrgyz = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:4444/Files", {
            "subtitle1": (e.target[0].value === "") ? kyrgyzFiles.subtitle1 : e.target[0].value ,
            "subtitle2": (e.target[1].value === "") ? kyrgyzFiles.subtitle2 : e.target[1].value ,
            "subtitle3": (e.target[2].value === "") ? kyrgyzFiles.subtitle3 : e.target[2].value ,
            "subtitle4": (e.target[3].value === "") ? kyrgyzFiles.subtitle4 : e.target[3].value ,
            "subtitle5": (e.target[4].value === "") ? kyrgyzFiles.subtitle5 : e.target[4].value ,
            "btn1": (e.target[5].value === "") ? kyrgyzFiles.btn1 : e.target[5].value ,
            "btn2": (e.target[6].value === "") ? kyrgyzFiles.btn2 : e.target[6].value ,
            "btn3": (e.target[3.5*2].value === "") ? kyrgyzFiles.btn3 : e.target[7].value
        })
            .then(res => console.log(res.data))
            .catch((err) => alert(err))
    }

    const onSubmitImg = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:5555/images", {
            "src1": (e.target[0].value === "") ? selectImage.src1 : e.target[0].files[0].name,
            "src2": (e.target[1].value === "") ? selectImage.src2 : e.target[1].files[0].name,
            "src3": (e.target[2].value === "") ? selectImage.src3 : e.target[2].files[0].name
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err))
    }

    const onSubmitDirector = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:5555/director", {
            "name": (e.target[0].value === "") ? director.name : e.target[0].value,
            "email": (e.target[1].value === "") ? director.name : e.target[1].value,
            "number1": (e.target[2].value === "") ? director.name : e.target[2].value,
            "number2": (e.target[3].value === "") ? director.name : e.target[3].value,
            "img": (e.target[4].value === "") ? director.img : e.target[4].files[0].name
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err))
    }

    return (
        <section className="admin">
            <div className="container">
                <div className="admin">
                    <h2 className="admin__title">
                        Орусча баш
                    </h2>
                    <form onSubmit={onSubmitHeaderRussian} className="admin__form">
                        <input placeholder="Сайттын аты" type="text"/>
                        <input placeholder="Органикалык Аймактар" type="text"/>
                        <input placeholder="Органикалык Пилоттук Чарбалар" type="text"/>
                        <input placeholder="Органикалык Жер семирткич Өндүрүүчүлөр" type="text"/>
                        <input placeholder="Эл Аралык Сертификаты бар Органикалык Продукция Өндүрүүчүлөр" type="text"/>
                        <input placeholder="Директор" type="text"/>
                        <input placeholder="Кошумча байланыш" type="text"/>
                        <input placeholder="Кирүү" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Кыргызча баш
                    </h2>
                    <form onSubmit={onSubmitHeaderKyrgyz} className="admin__form">
                        <input placeholder="Сайттын аты" type="text"/>
                        <input placeholder="Органикалык Аймактар" type="text"/>
                        <input placeholder="Органикалык Пилоттук Чарбалар" type="text"/>
                        <input placeholder="Органикалык Жер семирткич Өндүрүүчүлөр" type="text"/>
                        <input placeholder="Эл Аралык Сертификаты бар Органикалык Продукция Өндүрүүчүлөр" type="text"/>
                        <input placeholder="Директор" type="text"/>
                        <input placeholder="Кошумча байланыш" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Орусча өйдө
                    </h2>
                    <form onSubmit={onSubmitNavbarRussian} className="admin__form">
                        <input placeholder="Биздин даректер" type="text"/>
                        <input placeholder="М.С.Хынын сайты" type="text"/>
                        <input placeholder="Биздин телефон номерлер" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Кыргызча өйдө
                    </h2>
                    <form onSubmit={onSubmitNavbarKyrgyz} className="admin__form">
                        <input placeholder="Биздин даректер" type="text"/>
                        <input placeholder="М.С.Хынын сайты" type="text"/>
                        <input placeholder="Биздин телефон номерлер" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Орусча жер
                    </h2>
                    <form onSubmit={onSubmitWorldRussian} className="admin__form">
                        <input placeholder="Паспорт" type="text"/>
                        <input placeholder="Аймаки у которых производитель KOIKA" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Кыргызча жер
                    </h2>
                    <form onSubmit={onSubmitWorldKyrgyz} className="admin__form">
                        <input placeholder="Паспорт" type="text"/>
                        <input placeholder="Аймаки у которых производитель KOIKA" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Орусча биринчи
                    </h2>
                    <form onSubmit={onSubmitFirstRussian} className="admin__form">
                        <input placeholder="тема" type="text"/>
                        <input placeholder="эреже" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Кыргызча биринчи
                    </h2>
                    <form onSubmit={onSubmitFirstKyrgyz} className="admin__form">
                        <input placeholder="тема" type="text"/>
                        <input placeholder="эреже" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Орусча биринчи
                    </h2>
                    <form onSubmit={onSubmitSecondRussian} className="admin__form">
                        <input placeholder="түшүндүрүк" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Орусча экинчи
                    </h2>
                    <form onSubmit={onSubmitSecondRussian} className="admin__form">
                        <input placeholder="түшүндүрүк" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Кыргызча экинчи
                    </h2>
                    <form onSubmit={onSubmitSecondKyrgyz} className="admin__form">
                        <input placeholder="түшүндүрүк" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Орусча үчүнчү
                    </h2>
                    <form onSubmit={onSubmitThirdRussian} className="admin__form">
                        <input placeholder="тема" type="text"/>
                        <input placeholder="түшүндүрүк" type="text"/>
                        <input placeholder="Түшүндүрүк-эки" type="text"/>
                        <input placeholder="кнопка-1" type="text"/>
                        <input placeholder="кнопка-2" type="text"/>
                        <input placeholder="кнопка-3" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Кыргызча үчүнчү
                    </h2>
                    <form onSubmit={onSubmitThirdKyrgyz} className="admin__form">
                        <input placeholder="тема" type="text"/>
                        <input placeholder="түшүндүрүк" type="text"/>
                        <input placeholder="Түшүндүрүк-эки" type="text"/>
                        <input placeholder="кнопка-1" type="text"/>
                        <input placeholder="кнопка-2" type="text"/>
                        <input placeholder="кнопка-3" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Орусча файлдар
                    </h2>
                    <form onSubmit={onSubmitFilesRussian} className="admin__form">
                        <input placeholder="Бул презентацияны көрүү аркылуу биз жөнүндө көбүрөөк биле аласыз (кыргыз тилинде)." type="text"/>
                        <input placeholder="Бул таблицаны карап, биз жөнүндө көбүрөөк биле аласыз (кыргыз тилинде)." type="text"/>
                        <input placeholder="Биздин кызматкерлер" type="text"/>
                        <input placeholder="Департаменттин Жобосу" type="text"/>
                        <input placeholder="Органика Мыйзамы" type="text"/>
                        <input placeholder="ТАБЛИЦАНЫ ЖҮКТӨП АЛУУ" type="text"/>
                        <input placeholder="ДОКУМЕНТТИ ЖҮКТӨП АЛУУ" type="text"/>
                        <input placeholder="ПРЕЗЕНТАЦИЯНЫ ЖҮКТӨП АЛУУ" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                    <h2 className="admin__title">
                        Кыргызча файлдар
                    </h2>
                    <form onSubmit={onSubmitFilesKyrgyz} className="admin__form">
                        <input placeholder="Бул презентацияны көрүү аркылуу биз жөнүндө көбүрөөк биле аласыз (кыргыз тилинде)." type="text"/>
                        <input placeholder="Бул таблицаны карап, биз жөнүндө көбүрөөк биле аласыз (кыргыз тилинде)." type="text"/>
                        <input placeholder="Биздин кызматкерлер" type="text"/>
                        <input placeholder="Департаменттин Жобосу" type="text"/>
                        <input placeholder="Органика Мыйзамы" type="text"/>
                        <input placeholder="ТАБЛИЦАНЫ ЖҮКТӨП АЛУУ" type="text"/>
                        <input placeholder="ДОКУМЕНТТИ ЖҮКТӨП АЛУУ" type="text"/>
                        <input placeholder="ПРЕЗЕНТАЦИЯНЫ ЖҮКТӨП АЛУУ" type="text"/>
                        <button className="admin__btn">
                            Алмаштыруу
                        </button>
                    </form>
                </div>
                <div className="admin__images">
                    <h2 className="admin__title">
                        Сүрөттөр
                    </h2>
                    <form className="admin__form" onSubmit={onSubmitImg}>
                        <input accept="image/*" type="file"/>
                        <input accept="image/*" type="file"/>
                        <input accept="image/*" type="file"/>
                        <button className="admin__btn">
                            алмаштыруу
                        </button>
                    </form>
                </div>
                <h2 className="admin__title">
                    Директор
                </h2>
                <form onSubmit={onSubmitDirector} className="admin__form">
                    <input placeholder="аты-жөнү" type="text"/>
                    <input placeholder="электрондук почтасы" type="text"/>
                    <input placeholder="номери" type="text"/>
                    <input placeholder="номери-2" type="text"/>
                    <input accept="image/*" type="file"/>
                    <button className="admin__btn">
                        Алмаштыруу
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Admin;