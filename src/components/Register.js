import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeSeparator from "./HomeSeparator";
import {Link} from "react-router-dom";

const Register = () => {

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className='register container-fluid'>
            <HomeHeader/>
            <div className='register__section'>
                <HomeSeparator id='register__separator' text='Załóż konto'/>
                <form className='contact-form form register-form'
                      onSubmit={handleSubmit}
                >
                    <div className='row form__row register-form__row register-form__row--input'>
                        <div className='col-12 form__col register-form__col'>
                            <label htmlFor="email" className="form__label register-form__label register-form__label--email">Email</label>
                            <input type="email" placeholder='' id='email' name='email'
                                   className='form__email register-form__email form__input register-form__input'
                                // value={email}
                                // onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row form__row register-form__row register-form__row--input'>
                        <div className='col-12 form__col register-form__col'>
                            <label htmlFor="password" className="form__label register-form__label register-form__label--psswrd">Hasło</label>
                            <input type="password" placeholder='' id='password' name='password'
                                   className='form__password register-form__password form__input register-form__input'
                                // value={password}
                                // onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row form__row register-form__row register-form__row--input'>
                        <div className='col-12 form__col register-form__col'>
                            <label htmlFor="passwordRepeat" className="form__label register-form__label register-form__label--psswrd">Powtórz hasło</label>
                            <input type="passwordRepeat" placeholder='' id='passwordRepeat' name='passwordRepeat'
                                   className='form__password register-form__password register-form__passwordRepeat form__input register-form__input'
                                // value={passwordRepeat}
                                // onChange={e => setPasswordRepeat(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row form__row register-form__row register-form__row--button'>
                        <div className='col-6 form__col register-form__col'>
                            <Link className='nav-link form__button register-form__button register-form__button--left' to='/logowanie'>Zaloguj się</Link>
                        </div>
                        <div className='col-6 form__col register-form__col'>
                            <button className="form__button register-form__button register-form__button--right">Załóż konto</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};


export default Register;