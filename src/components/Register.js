import React, {useEffect, useState} from 'react';
import HomeHeader from "./HomeHeader";
import HomeSeparator from "./HomeSeparator";
import {Link} from "react-router-dom";
import {register} from "../firebase/auth";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [errorPasswordRepeat, setErrorPasswordRepeat] = useState(null);
    const [errorRegister, setErrorRegister] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setErrorRegister('');
        try {
            await register(email, password);
        } catch (err) {
            setErrorRegister(err.message);
        }
    }

    useEffect(() => {
        // regular expression used based on standard RFC 2822 but shorter version
        if (email.length > 0 && !email.match(`[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?`)) {
            setErrorEmail('Podany email jest nieprawidłowy!')
        } else {
            setErrorEmail(null)
        }

        if (password.length > 0 && password.length < 6) {
            setErrorPassword('Podane hasło jest za krótkie!')
        } else {
            setErrorPassword(null)
        }

        if (passwordRepeat.length > 0 && password !== passwordRepeat) {
            setErrorPasswordRepeat('Podane hasło nie jest takie samo jak wyżej!')
        } else {
            setErrorPasswordRepeat(null)
        }

    }, [email, password, passwordRepeat]);

    return (
        <div className='register container-fluid'>
            <HomeHeader param='others'/>
            <div className='register__section'>
                <HomeSeparator id='register__separator' text='Załóż konto'/>
                {errorRegister
                    ? <p className='error-info login-error-info'>
                        {errorRegister}
                    </p>
                    :
                    null
                }
                <form className='contact-form form register-form'
                      onSubmit={handleSubmit}
                >
                    <div className='row form__row register-form__row register-form__row--input'>
                        <div className='col-12 form__col register-form__col'>
                            <label htmlFor="email"
                                   className="form__label register-form__label register-form__label--email">Email</label>
                            <input type="email" placeholder='' id='email' name='email'
                                   className='form__email register-form__email form__input register-form__input'
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}
                            />
                            {errorEmail
                                ?
                                <p className='error-info register-error-info'>
                                    {errorEmail}
                                </p>
                                :
                                <div className='empty-div--error register-empty-div--error'></div>
                            }
                        </div>
                    </div>
                    <div className='row form__row register-form__row register-form__row--input'>
                        <div className='col-12 form__col register-form__col'>
                            <label htmlFor="password"
                                   className="form__label register-form__label register-form__label--psswrd">Hasło</label>
                            <input type="password" placeholder='' id='password' name='password'
                                   className='form__password register-form__password form__input register-form__input'
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}
                            />
                            {errorPassword
                                ?
                                <p className='error-info register-error-info'>
                                    {errorPassword}
                                </p>
                                :
                                <div className='empty-div--error register-empty-div--error'></div>
                            }
                        </div>
                    </div>
                    <div className='row form__row register-form__row register-form__row--input'>
                        <div className='col-12 form__col register-form__col'>
                            <label htmlFor="passwordRepeat"
                                   className="form__label register-form__label register-form__label--psswrd">Powtórz
                                hasło</label>
                            <input type="password" placeholder='' id='passwordRepeat' name='passwordRepeat'
                                   className='form__password register-form__password register-form__passwordRepeat form__input register-form__input'
                                   value={passwordRepeat}
                                   onChange={e => setPasswordRepeat(e.target.value)}
                            />
                            {errorPasswordRepeat
                                ?
                                <p className='error-info register-error-info'>
                                    {errorPasswordRepeat}
                                </p>
                                :
                                <div className='empty-div--error register-empty-div--error'></div>
                            }
                        </div>
                    </div>
                    <div className='row form__row register-form__row register-form__row--button'>
                        <div className='col-6 form__col register-form__col register-form__col--buttons'>
                            <Link className='nav-link form__button register-form__button register-form__button--left'
                                  to='/logowanie'>Zaloguj się</Link>
                        </div>
                        <div className='col-6 form__col register-form__col register-form__col--buttons'>

                            {(errorEmail || errorPassword || errorPasswordRepeat || email === '' || password === '' || passwordRepeat === '')
                                ?
                                <button className="form__button register-form__button register-form__button--right"
                                        disabled={true}>
                                    Załóż konto
                                </button>
                                :
                                <button
                                    className="form__button register-form__button register-form__button--right">
                                    Załóż konto
                                </button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};


export default Register;