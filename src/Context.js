import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CustomContext = createContext()

export const Context = (props) => {

    const[start, setStart] = useState(true)

    const navigate = useNavigate()

    const [user, setUser] = useState({
       name:''
    })

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    const reqisterUser = (data) => {

        const { email } = data

        axios.get(`http://localhost:5555/users?email=${email}`)
            .then(({data}) => {
                if(data.length > 0) {
                    alert("Простите но такой аккаунт существует")
                } else {
                    axios.post('http://localhost:5555/users', { ...data })
                        .then((res) => {
                            localStorage.setItem('user', JSON.stringify(res.data))
                            setUser(res.data)
                            navigate('/')
                        })
                        .catch((error) => alert('Простите но такой аккаунт уже существует или сервер не работает'));
                }
            })
            .catch((err) => alert(err))
    };
    const [nameLogin, setNameLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState(0)



    const logIn = () => {
        axios.get('http://localhost:5555/users')
            .then(({ data }) => {
                const filteredUsers = data.filter(i => i.name === nameLogin);
                if (filteredUsers.length === 0) {
                    alert('Не правильное имя');
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
                alert(error);
            });
    };



    const LogOutUser = () => {
        localStorage.removeItem('user')
        setUser({
            name: '',
        })
    }
    const [img, setImg] = useState({})

    useEffect(() => {
        axios("http://localhost:5555/images")
            .then((res) => setImg(res.data))
            .catch((err) => console.error(err))
    }, [])

    const value = {
        user,
        setUser,
        setNameLogin,
        setPasswordLogin,
        img,
        start,
        setStart,
        reqisterUser,
        LogOutUser,
        logIn
    }


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}