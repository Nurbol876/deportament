import React, {useContext}from 'react';
import {CustomContext} from "../../Context";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register,
        handleSubmit,
        formState: { errors },
        reset } = useForm();

    const {reqisterUser} = useContext(CustomContext)

    const { t } = useTranslation();

    return (
        <section className='reg'>
            <div className='form'>
                <h2 className='title'>{t('Reg.title')}</h2>
                <form onSubmit={handleSubmit(reqisterUser)} action='#'>
                    <input {...register('email')} type='text' placeholder='Enter your email' />
                    <input {...register('name')} type='text' placeholder='Enter your name' />
                    <input {...register('password')} type='password' placeholder='Create a password' />
                    <input type='password' placeholder='Confirm your password' />
                    <button type='submit' className='button'>
                        Signup
                    </button>
                </form>
                <div className='signup'>
                    <p className='signup'>
                        <Link to='/login'>{t('Reg.subtitle1')}</Link> <br />
                        <Link to='/'>{t('Reg.subtitle3')}</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Register;
