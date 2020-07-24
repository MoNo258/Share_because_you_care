import React, {useEffect, useState} from 'react';
import separatorImg from "../assets/Decoration.svg";

const HomeContactUs = ({id}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mssg, setMssg] = useState('');
    const [fullMessage, setFullMessage] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errorName, setErrorName] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorMssg, setErrorMssg] = useState(null);
    const [statusSuccess, setStatusSuccess] = useState(null);
    const [statusError, setStatusError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendForm();
        // setTimeout( () => {
        //     setStatusSuccess(null);
        //     setStatusError(null);
        // },7000);
        // setName('');
        // setEmail('');
        // setMssg('');
        // setFullMessage({
        //     name: '',
        //     email: '',
        //     message: ''
        // });
    };

    const sendForm = () => {
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(fullMessage)
        })
            .then( resp => resp.json())
            .then( data =>  {
                if (data.status === 'success') {
                    setStatusSuccess(true)
                } else if (data.status === 'error') {
                    setStatusError(`Błedny parametr: ${data.errors[0].param}.`);
                    throw new Error('error')
                }
            })
            .then ( () => {
                setName('');
                setEmail('');
                setMssg('');
                setFullMessage({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .then( () => {
                setTimeout( () => {
                    setStatusSuccess(null);
                    setStatusError(null);
                },7000);
            })
            .catch( error => console.log(error));
    };

    useEffect( () => {
        if (name.length > 0 && !name.match("^[a-zA-Z]+$")) {
            setErrorName('Podane imię jest nieprawidłowe!')
        } else {setErrorName(null)}

        // regular expression used based on standard RFC 2822 but shorter version
        if ( email.length > 0 && !email.match(`[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?`) ) {
            setErrorEmail('Podany email jest nieprawidłowy!')
        } else {setErrorEmail(null)}

        if (mssg.length > 0 && mssg.length < 120 ) {
            setErrorMssg('Wiadomość musi mieć co najmniej 120 znaków!')
        } else {setErrorMssg(null)}

        setFullMessage({
            name: name,
            email: email,
            message: mssg
        });

    }, [name, email, mssg]);

    return (
        <div className='home__contact '>
            <section id={id} className='contact container-fluid'>
                <div className='row contact__row'>
                    <div className='col-lg-8 col-12 contact__col'></div>
                    <div className='col-lg-4 col-12 contact__col'>
                        <div className='contact__right'>
                            <h3 className='right__title'>
                                Skontaktuj się z nami
                            </h3>
                            <div className='right__separator'>
                                <img src={separatorImg} alt="separator" className='right__image'/>
                            </div>
                            { statusSuccess
                                ?
                                <div className='success-message'>
                                    <p>
                                        Wiadomość została wysłana!
                                    </p>
                                    <p>
                                        Wkrótce się skontaktujemy.
                                    </p>
                                </div>
                                :
                                statusError
                                ?
                                    <div className='error-message'>
                                        <p>
                                            Błąd wysłania formularza!
                                        </p>
                                        <p>
                                            {statusError}
                                        </p>
                                    </div>
                                    :
                                <div className='empty-div--success'></div>
                            }
                            <form className='contact-form form' onSubmit={handleSubmit}>
                                <div className='row form__row'>
                                    <div className='col-6 form__col'>
                                        <label htmlFor="name" className="form__label">Wpisz swoje imię</label>
                                        <input type="text" placeholder='Imię' id='name' name='name'
                                               className='form__text form__input'
                                               value={name}
                                               onChange={e => setName(e.target.value)}
                                        />
                                        { errorName
                                            ?
                                            <p className='error-info'>
                                                {errorName}
                                            </p>
                                            :
                                            <div className='empty-div--error'></div>
                                        }
                                    </div>
                                    <div className='col-6 form__col'>
                                        <label htmlFor="email" className="form__label">Wpisz swój email</label>
                                        <input type="email" placeholder='abc@xyz.com' id='email' name='email'
                                               className='form__email form__input'
                                               value={email}
                                               onChange={e => setEmail(e.target.value)}
                                        />
                                        { errorEmail
                                            ?
                                            <p className='error-info'>
                                                {errorEmail}
                                            </p>
                                            :
                                            <div className='empty-div--error'></div>
                                        }
                                    </div>
                                </div>
                                <div className='row form__row'>
                                    <div className='col-12 form__col'>
                                        <label htmlFor="mssg" className="form__label form__label--textarea">Wpisz swoją wiadomość</label>
                                        <input type="textarea" id='mssg' name='mssg' cols='30' rows='4'
                                               className='form__textarea form__input'
                                               placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                               value={mssg}
                                               onChange={e => setMssg(e.target.value)}
                                        />
                                        { errorMssg
                                            ?
                                            <p className='error-info'>
                                                {errorMssg}
                                            </p>
                                            :
                                            <div className='empty-div--error'></div>
                                        }
                                    </div>
                                </div>
                                <div className='row form__row'>
                                    <div className='col-12 form__col form__col--button'>
                                        { (errorName || errorEmail || errorMssg || name==='' || email==='' || mssg==='' )
                                        ?
                                            <button className="form__button" disabled={true}>Wyślij</button>
                                        :
                                            <button className="form__button">Wyślij</button>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default HomeContactUs;