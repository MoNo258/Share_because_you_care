import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeSeparator from "./HomeSeparator";
import {Link} from "react-router-dom";

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className='login container-fluid'>
            <HomeHeader/>
            <div className='login__section'>
                <HomeSeparator id='login__separator' text='Zaloguj się'/>
                <form className='contact-form form login-form'
                      onSubmit={handleSubmit}
                >
                    <div className='row form__row login-form__row login-form__row--input'>
                        <div className='col-12 form__col login-form__col'>
                            <label htmlFor="email" className="form__label login-form__label login-form__label--email">Email</label>
                            <input type="email" placeholder='' id='email' name='email'
                                   className='form__email login-form__email form__input login-form__input'
                                // value={email}
                                // onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row form__row login-form__row login-form__row--input'>
                        <div className='col-12 form__col login-form__col'>
                            <label htmlFor="password" className="form__label login-form__label login-form__label--psswrd">Hasło</label>
                            <input type="password" placeholder='' id='password' name='password'
                                   className='form__password login-form__password form__input login-form__input'
                                // value={password}
                                // onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row form__row login-form__row login-form__row--button'>
                        <div className='col-6 form__col login-form__col'>
                            <Link className='nav-link form__button login-form__button login-form__button--left' to='/rejestracja'>Załóż konto</Link>
                        </div>
                        <div className='col-6 form__col login-form__col'>
                            <button className="form__button login-form__button login-form__button--right">Zaloguj się</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
};

export default Login;