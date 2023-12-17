import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import logo from "./components/Header/assets/logo.jpg"
import firstImg from "./components/First/assets/peoples.jpeg"
import secondImg from "./components/Second/assets/plant.jpg"
import director from "./components/Director/assets/director.jpg"

export const CustomContext = createContext()

export const Context = (props) => {

    const images = {
        logo: "C://Users/Win10/Desktop/react-direc/logos2/src/componentsNavbar/assets/logo.jpg",
        firstImg: "./assets/peoples.jpeg",
        secondImg: "./assets/plant.jpg",
        director: "./assets/director.jpg"
}

    const navigate = useNavigate()

    const [user, setUser] = useState({
       name:''
    })

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    const reqisterUser = (data) => {
        axios.post('http://localhost:5555/users', { ...data })
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data))
                setUser(res.data)
                navigate('/')
            })
            .catch((error) => alert('Простите но такой аккаунт уже существует или сервер не работает'));
    };
    const [gmailLogin, setGmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState(0)



    const logIn = () => {
        axios.get('http://localhost:5555/users')
            .then(({ data }) => {
                const filteredUsers = data.filter(i => i.email === gmailLogin);
                if (filteredUsers.length === 0) {
                    alert('Не правильный адрес почты');
                } else {
                    const loggedInUser = filteredUsers[0]; // Предполагаем, что вы хотите получить первого найденного пользователя
                   if(loggedInUser.password === passwordLogin) {
                       localStorage.setItem('user', JSON.stringify(loggedInUser));
                       setUser(loggedInUser);
                       navigate('/');
                   } else{
                       alert("Не правильный пароль")
                   }
                }
            })
            .catch(error => {
                console.error(error);
            });
    };



    const LogOutUser = () => {
        localStorage.removeItem('user')
        setUser({
            name: '',
        })
    }

    const value = {
        user,
        setUser,
        setGmailLogin,
        setPasswordLogin,
        reqisterUser,
        LogOutUser,
        logIn,
        images
    }


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}