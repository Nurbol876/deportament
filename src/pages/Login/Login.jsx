import React, { useContext } from 'react';
import { CustomContext } from '../../Context';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Login = () => {
    const { t } = useTranslation();
    const {  setNameLogin, setPasswordLogin, logIn } = useContext(CustomContext);

    const handleLoginChange = (e) => {
        const name = e.target.value;
        setNameLogin(name);
    }
    const handlePasswordChange = (e) => {
         const password = e.target.value;
         setPasswordLogin(password);
    }
    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        logIn();
    };

    return (
        <section className='login'>
            <div className='form'>
                <h2 className='title'>{t('Login.title')}</h2>
                <form onSubmit={handleLoginFormSubmit} action='#'>
                    <input onChange={handleLoginChange} type='text' placeholder='Логин' />
                    <input onChange={handlePasswordChange} type='password' placeholder='Пароль' />
                    <button type='submit' className='button'>
                        Login
                    </button>
                </form>
                <div className='signup'>
                    <p className='signup'>
                        <Link to='/reg'>{t('Login.subtitle')}</Link>
                        <br />
                        <Link to='/'>{t('Reg.subtitle3')}</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
