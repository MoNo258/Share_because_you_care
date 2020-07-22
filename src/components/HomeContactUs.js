import React, {useState, useEffect} from 'react';
import separatorImg from "../assets/Decoration.svg";


const HomeContactUs = ({id}) => {


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='home__contact'>
            <section id={id} className='contact'>
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
                            <form className='contact-form form' onSubmit={handleSubmit}>
                                <div className='row form__row'>
                                    <div className='col-6 form__col'>
                                        <label htmlFor="name" className="form__label">Wpisz swoje imię</label>
                                        <input type="text" placeholder='Imię' id='name' name='name'
                                               className='form__text form__input'
                                               // value='name'
                                        />
                                    </div>
                                    <div className='col-6 form__col'>
                                        <label htmlFor="email" className="form__label">Wpisz swój email</label>
                                        <input type="email" placeholder='abc@xyz.com' id='email' name='email'
                                               className='form__email form__input'
                                               // value='email'
                                        />
                                    </div>
                                </div>
                                <div className='row form__row'>
                                    <div className='col-12 form__col'>
                                        <label htmlFor="mssg" className="form__label form__label--textarea">Wpisz swoją wiadomość</label>
                                        <input type="textarea" id='mssg' name='mssg' cols='30' rows='4'
                                               className='form__textarea form__input'
                                               placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                               
                                            // value='mssg'
                                        />
                                    </div>
                                </div>
                                <div className='row form__row'>
                                    <div className='col-12 form__col form__col--button'>
                                        <button className="form__button">Wyślij</button>
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