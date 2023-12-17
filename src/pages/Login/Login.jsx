import React, { useContext } from 'react';
import { CustomContext } from '../../Context';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Login = () => {
    const { t } = useTranslation();
    const { setGmailLogin, setPasswordLogin, logIn } = useContext(CustomContext);

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        setGmailLogin(email);
        setPasswordLogin(password);
        logIn();
    };

    return (
        <section className='login'>
            <div className='form'>
                <h2 className='title'>{t('Login.title')}</h2>
                <form onSubmit={handleLoginFormSubmit} action='#'>
                    <input type='email' placeholder='Enter your email' />
                    <input type='password' placeholder='Enter your password' />
                    <Link to='/forgot'>{t('Login.desk')}</Link>
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
