import React, {useState, useEffect} from 'react';
import HomeHeader from "./HomeHeader";
import HomeSeparator from "./HomeSeparator";
import {Link} from "react-router-dom";
import {login} from "../firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [errorLogin, setErrorLogin] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setErrorLogin('');
        try {
            await login(email, password);
        } catch (err) {
            setErrorLogin(err.message);
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

    }, [email, password]);

    return (
        <div className='login container-fluid'>
            <HomeHeader param='others'/>
            <div className='login__section'>
                <HomeSeparator id='login__separator' text='Zaloguj się'/>
                {errorLogin
                    ? <p className='error-info login-error-info'>
                        {errorLogin}
                    </p>
                    :
                    null
                }
                <form className='contact-form form login-form'
                      onSubmit={handleSubmit}
                >
                    <div className='row form__row login-form__row login-form__row--input'>
                        <div className='col-12 form__col login-form__col'>
                            <label htmlFor="email"
                                   className="form__label login-form__label login-form__label--email">Email</label>
                            <input type="email" placeholder='' id='email' name='email'
                                   className='form__email login-form__email form__input login-form__input'
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}
                            />
                            {errorEmail
                                ?
                                <p className='error-info login-error-info'>
                                    {errorEmail}
                                </p>
                                :
                                <div className='empty-div--error login-empty-div--error'></div>
                            }
                        </div>
                    </div>
                    <div className='row form__row login-form__row login-form__row--input'>
                        <div className='col-12 form__col login-form__col'>
                            <label htmlFor="password"
                                   className="form__label login-form__label login-form__label--psswrd">Hasło</label>
                            <input type="password" placeholder='' id='password' name='password'
                                   className='form__password login-form__password form__input login-form__input'
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}
                            />
                            {errorPassword
                                ?
                                <p className='error-info login-error-info'>
                                    {errorPassword}
                                </p>
                                :
                                <div className='empty-div--error login-empty-div--error'></div>
                            }
                        </div>
                    </div>
                    <div className='row form__row login-form__row login-form__row--button'>
                        <div className='col-6 form__col login-form__col'>
                            <Link className='nav-link form__button login-form__button login-form__button--left'
                                  to='/rejestracja'>Załóż konto</Link>
                        </div>
                        <div className='col-6 form__col login-form__col'>
                            {(errorEmail || errorPassword || email === '' || password === '')
                                ?
                                <button className="form__button login-form__button login-form__button--right"
                                        disabled={true}>
                                    Zaloguj się
                                </button>
                                :
                                <button className="form__button login-form__button login-form__button--right">
                                    Zaloguj się
                                </button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;