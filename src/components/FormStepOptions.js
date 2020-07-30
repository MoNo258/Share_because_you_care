import React, {useEffect, useState} from 'react';
import iconArrowDown from '../assets/Icon-Arrow-Down.svg';
import iconArrowUp from '../assets/Icon-Arrow-Up.svg';
import iconShirt from '../assets/Icon-1.svg';
import iconCircleArrows from '../assets/Icon-4.svg';

const FormStepOptions = ({step, options}) => {
    const [checkboxItemOne, setCheckboxItemOne] = useState(false);
    const [checkboxItemTwo, setCheckboxItemTwo] = useState(false);
    const [checkboxItemThree, setCheckboxItemThree] = useState(false);
    const [checkboxItemFour, setCheckboxItemFour] = useState(false);
    const [checkboxItemFive, setCheckboxItemFive] = useState(false);
    const [checkboxItemsObject, setCheckboxItemsObject] = useState({
        checkboxItemOne: {
            name: 'checkboxItemOne',
            value: 'ubrania, które nadają się do ponownego użycia',
            state: checkboxItemOne
        },
        checkboxItemTwo: {
            name: 'checkboxItemTwo',
            value: 'rzeczy dla zwierząt',
            state: checkboxItemTwo
        },
        checkboxItemThree: {
            name: 'checkboxItemThree',
            value: 'zabawki',
            state: checkboxItemThree
        },
        checkboxItemFour: {
            name: 'checkboxItemFour',
            value: 'książki',
            state: checkboxItemFour
        },
        checkboxItemFive: {
            name: 'checkboxItemFive',
            value: 'inne',
            state: checkboxItemFive
        }
    });
    const bags = [1, 2, 3, 4, 5];
    const [selectedBag, setSelectedBag] = useState('--- wybierz ---');
    const cities = ['Poznań', 'Warszawa', 'Wrocław', 'Kraków', 'Katowice'];
    const [selectedCity, setSelectedCity] = useState('--- wybierz ---');
    const [checkboxLocOne, setCheckboxLocOne] = useState(false);
    const [checkboxLocTwo, setCheckboxLocTwo] = useState(false);
    const [checkboxLocThree, setCheckboxLocThree] = useState(false);
    const [checkboxLocFour, setCheckboxLocFour] = useState(false);
    const [checkboxLocFive, setCheckboxLocFive] = useState(false);
    const [locationSpecific, setLocationSpecific] = useState('');
    const [checkboxLocObject, setCheckboxLocObject] = useState({
        checkboxLocOne: {
            name: 'checkboxLocOne',
            value: 'dzieciom i samotnym matkom',
            state: checkboxLocOne
        },
        checkboxLocTwo: {
            name: 'checkboxLocTwo',
            value: 'osobom starszym',
            state: checkboxLocTwo
        },
        checkboxLocThree: {
            name: 'checkboxLocThree',
            value: 'bezdomnym',
            state: checkboxLocThree
        },
        checkboxLocFour: {
            name: 'checkboxLocFour',
            value: 'niepełnosprawnym',
            state: checkboxLocFour
        },
        checkboxLocFive: {
            name: 'checkboxLocFive',
            value: 'zwierzętom',
            state: checkboxLocFive
        },
        locationSpecific: {
            name: 'locationSpecific',
            value: '',
            state: locationSpecific
        }
    });
    const [whenDetails, setWhenDetails] = useState({
        street: '',
        city: '',
        code: '',
        phone: '',
        date: '',
        time: '',
        notes: '',
    });

    useEffect(() => {
        setCheckboxItemsObject(prev => ({
                ...prev,
            checkboxItemOne: {...prev.checkboxItemOne ,state:checkboxItemOne},
            checkboxItemTwo: {...prev.checkboxItemTwo ,state:checkboxItemTwo},
            checkboxItemThree: {...prev.checkboxItemThree ,state:checkboxItemThree},
            checkboxItemFour: {...prev.checkboxItemFour ,state:checkboxItemFour},
            checkboxItemFive: {...prev.checkboxItemFive ,state:checkboxItemFive},
              })
        )
    }, [checkboxItemOne, checkboxItemTwo, checkboxItemThree, checkboxItemFour, checkboxItemFive]);

    useEffect(() => {
        setCheckboxLocObject(prev => ({
                ...prev,
            checkboxLocOne: {...prev.checkboxLocOne ,state:checkboxLocOne},
            checkboxLocTwo: {...prev.checkboxLocTwo ,state:checkboxLocTwo},
            checkboxLocThree: {...prev.checkboxLocThree ,state:checkboxLocThree},
            checkboxLocFour: {...prev.checkboxLocFour ,state:checkboxLocFour},
            checkboxLocFive: {...prev.checkboxLocFive ,state:checkboxLocFive},
            locationSpecific: {...prev.locationSpecific ,state:locationSpecific},
            })
        )
    }, [checkboxLocOne, checkboxLocTwo, checkboxLocThree, checkboxLocFour, checkboxLocFive,locationSpecific ]);

    const optionItems = () => {
        return (
            <form className='items__options'>
                <label className='items__label'>
                    <input type='checkbox' name={checkboxItemsObject.checkboxItemOne.name} className='items__input'
                           checked={checkboxItemsObject.checkboxItemOne.state}
                           onChange={e => setCheckboxItemOne(e.target.checked)}
                    />
                    {checkboxItemsObject.checkboxItemOne.value}
                </label>
                <label className='items__label'>
                    <input type='checkbox' name={checkboxItemsObject.checkboxItemTwo.name} className='items__input'
                           checked={checkboxItemsObject.checkboxItemTwo.state}
                           onChange={e => setCheckboxItemTwo(e.target.checked)}
                    />
                    {checkboxItemsObject.checkboxItemTwo.value}
                </label>
                <label className='items__label'>
                    <input type='checkbox' name={checkboxItemsObject.checkboxItemThree.name} className='items__input'
                           checked={checkboxItemsObject.checkboxItemThree.state}
                           onChange={e => setCheckboxItemThree(e.target.checked)}
                    />
                    {checkboxItemsObject.checkboxItemThree.value}
                </label>
                <label className='items__label'>
                    <input type='checkbox' name={checkboxItemsObject.checkboxItemFour.name} className='items__input'
                           checked={checkboxItemsObject.checkboxItemFour.state}
                           onChange={e => setCheckboxItemFour(e.target.checked)}
                    />
                    {checkboxItemsObject.checkboxItemFour.value}
                </label>
                <label className='items__label'>
                    <input type='checkbox' name={checkboxItemsObject.checkboxItemFive.name} className='items__input'
                           checked={checkboxItemsObject.checkboxItemFive.state}
                           onChange={e => setCheckboxItemFive(e.target.checked)}
                    />
                    {checkboxItemsObject.checkboxItemFive.value}
                </label>
            </form>
        )
    };

    const styleSelect = {
        background: `url(${iconArrowDown})`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto'
    };

    const optionBags = () => {
        return (
            <form className='options__bags'>
                <label className='bags__label'>
                    <span className='bags__span'>Liczba 60l worków:</span>
                    <select className='bags__select' style={styleSelect}
                            value={selectedBag} onChange={e => setSelectedBag(e.target.value)}
                    >
                        <option className='bags__option' disabled>--- wybierz ---</option>
                        {bags.map((bag, id) => {
                                return <option key={id} value={bag} className='bags__option'>{bag}</option>
                            }
                        )}
                    </select>
                </label>
            </form>
        )
    };

    const optionLocation = () => {
        return (
            <>
                <form className='options__location--first'>
                    <label className='location__label--select'>
                        <span className='location__span'></span>
                        <select className='location__select' style={styleSelect}
                                value={selectedCity} onChange={e => setSelectedCity(e.target.value)}
                        >
                            <option className='location__option' disabled>--- wybierz ---</option>
                            {cities.map((city, id) => {
                                    return <option key={id} value={city} className='location__option'>{city}</option>
                                }
                            )}
                        </select>
                    </label>
                </form>

                <form className='options__location--second'>
                    <input type='checkbox' className='location__input'
                           name={checkboxLocObject.checkboxLocOne.name} id={checkboxLocObject.checkboxLocOne.name}
                           checked={checkboxLocObject.checkboxLocOne.state}
                           onChange={e => setCheckboxLocOne(e.target.checked)}
                    />
                    <label className='location__label' htmlFor={checkboxLocObject.checkboxLocOne.name}>
                        {checkboxLocObject.checkboxLocOne.value}
                    </label>

                    <input type='checkbox' className='location__input'
                           name={checkboxLocObject.checkboxLocTwo.name} id={checkboxLocObject.checkboxLocTwo.name}
                           checked={checkboxLocObject.checkboxLocTwo.state}
                           onChange={e => setCheckboxLocTwo(e.target.checked)}
                    />
                    <label className='location__label' htmlFor={checkboxLocObject.checkboxLocTwo.name}>
                        {checkboxLocObject.checkboxLocTwo.value}
                    </label>

                    <input type='checkbox' className='location__input'
                           name={checkboxLocObject.checkboxLocThree.name} id={checkboxLocObject.checkboxLocThree.name}
                           checked={checkboxLocObject.checkboxLocThree.state}
                           onChange={e => setCheckboxLocThree(e.target.checked)}
                    />
                    <label className='location__label' htmlFor={checkboxLocObject.checkboxLocThree.name}>
                        {checkboxLocObject.checkboxLocThree.value}
                    </label>

                    <input type='checkbox' className='location__input'
                           name={checkboxLocObject.checkboxLocFour.name} id={checkboxLocObject.checkboxLocFour.name}
                           checked={checkboxLocObject.checkboxLocFour.state}
                           onChange={e => setCheckboxLocFour(e.target.checked)}
                    />
                    <label className='location__label' htmlFor={checkboxLocObject.checkboxLocFour.name}>
                        {checkboxLocObject.checkboxLocFour.value}
                    </label>

                    <input type='checkbox' className='location__input'
                           name={checkboxLocObject.checkboxLocFive.name} id={checkboxLocObject.checkboxLocFive.name}
                           checked={checkboxLocObject.checkboxLocFive.state}
                           onChange={e => setCheckboxLocFive(e.target.checked)}
                    />
                    <label className='location__label' htmlFor={checkboxLocObject.checkboxLocFive.name}>
                        {checkboxLocObject.checkboxLocFive.value}
                    </label>
                    <label className='location__label--specific' htmlFor={checkboxLocObject.locationSpecific.name}>
                        Wpisz nazwę konkretnej organizacji (opcjonalnie)
                    </label>
                    <input type='text' className='location__input--specific'
                           name={checkboxLocObject.locationSpecific.name} id={checkboxLocObject.locationSpecific.name}
                           value={checkboxLocObject.locationSpecific.state}
                           onChange={e => setLocationSpecific(e.target.value)}
                    />
                </form>

            </>
        );
    };


    const handleWhenDetailsChange = (e) => {
        const {name, value} = e.target;
        setWhenDetails(prev => ({
                ...prev,
                [name]: value
            })
        )
    };

    const optionWhen = () => {
        return (
            <form className='options__when'>
                <div className='row when__row'>
                    <div className='col-6 when__col'>
                        <div className='when__col--address'>Adres odbioru:</div>
                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='street'>Ulica</label>
                            <input type='text' name='street' placeholder='' id='street' className='when__input'
                                   value={whenDetails.street} onChange={handleWhenDetailsChange}/>
                        </div>
                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='city'>Miasto</label>
                            <input type='text' name='city' placeholder='' id='city' className='when__input'
                                   value={whenDetails.city} onChange={handleWhenDetailsChange}/>
                        </div>
                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='code'>Kod pocztowy</label>
                            <input type='text' name='code' placeholder='' id='code' className='when__input'
                                   value={whenDetails.code} onChange={handleWhenDetailsChange}/>
                        </div>
                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='phone'>Numer telefonu</label>
                            <input type='text' name='phone' placeholder='' id='phone' className='when__input'
                                   value={whenDetails.phone} onChange={handleWhenDetailsChange}/>
                        </div>
                    </div>
                    <div className='col-6 when__col'>
                        <div className='when__col--date'>Termin odbioru:</div>
                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='date'>Data</label>
                            <input type='text' name='date' placeholder='' id='date' className='when__input'
                                   value={whenDetails.date} onChange={handleWhenDetailsChange}/>
                        </div>
                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='time'>Godzina</label>
                            <input type='text' name='time' placeholder='' id='time' className='when__input'
                                   value={whenDetails.time} onChange={handleWhenDetailsChange}/>
                        </div>
                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='notes'>Uwagi dla kuriera</label>
                            <input type='text' name='notes' placeholder='' id='notes' className='when__input'
                                   value={whenDetails.notes} onChange={handleWhenDetailsChange}/>
                        </div>
                    </div>
                </div>
            </form>
        );
    };


    const optionSummary = () => {
        return (
            <>
                <div className='options__summary'>
                    <div className='row summary__row'>
                        <div className='col-12 summary__col'>
                            <h3 className='summary__title'>
                                Podsumowanie Twojej darowizny
                            </h3>
                            <h5 className='summary__subtitle'>
                                Oddajesz:
                            </h5>
                            <ul className='summary__list'>
                                <li className='summary__item'>
                                    <img src={iconShirt} alt="icon-shirt" className='item__image'/>
                                    <p className='item__text'>
                                        {selectedBag === '1'
                                            ? `${selectedBag} worek`
                                            : selectedBag === '5'
                                                ? `${selectedBag} worków`
                                                : `${selectedBag} worki`}

                                        {checkboxItemOne.value}
                                    </p>
                                </li>
                                <li className='summary__item'>
                                    <img src={iconCircleArrows} alt="icon-shirt" className='item__arrows_as_circle'/>
                                    <p className='item__text'>
                                        dla lokalizacji: {selectedCity}
                                    </p>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

            </>
        )

    };


    const optionThanks = () => {
        return (
            <>
                thanks

            </>
        )

    };

    return (
        <>
            <div className='step__options' id={step}>
                {options === 'items'
                    ? optionItems()
                    : options === 'bags'
                        ? optionBags()
                        : options === 'location'
                            ? optionLocation()
                            : options === 'when'
                                ? optionWhen()
                                : options === 'summary'
                                    ? optionSummary()
                                    : options === 'thanks'
                                        ? optionThanks()
                                        : null
                }
            </div>
        </>
    )
};


export default FormStepOptions;