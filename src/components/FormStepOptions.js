import React, {useEffect, useState} from 'react';
import iconArrowDown from '../assets/Icon-Arrow-Down.svg';
import iconArrowUp from '../assets/Icon-Arrow-Up.svg';

const FormStepOptions = ({step, options}) => {
    const [checkboxItemOne, setCheckboxItemOne] = useState(false);
    const [checkboxItemTwo, setCheckboxItemTwo] = useState(false);
    const [checkboxItemThree, setCheckboxItemThree] = useState(false);
    const [checkboxItemFour, setCheckboxItemFour] = useState(false);
    const [checkboxItemFive, setCheckboxItemFive] = useState(false);
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
    const [whenDetails, setWhenDetails] = useState({
        street: '',
        city: '',
        code: '',
        phone: '',
        date: '',
        time: '',
        notes: '',
    });


    const optionItems = () => {
        return (
            <form className='items__options'>
                <label className='items__label'>
                    <input type='checkbox' name='checkboxItem1' className='items__input'
                           checked={checkboxItemOne}
                           onChange={e => setCheckboxItemOne(e.target.checked)}
                    />
                    ubrania, które nadają się do ponownego użycia
                </label>
                <label className='items__label'>
                    <input type='checkbox' name='checkboxItem2' className='items__input'
                           checked={checkboxItemTwo}
                           onChange={e => setCheckboxItemTwo(e.target.checked)}
                    />
                    ubrania, do wyrzucenia
                </label>
                <label className='items__label'>
                    <input type='checkbox' name='checkboxItem3' className='items__input'
                           checked={checkboxItemThree}
                           onChange={e => setCheckboxItemThree(e.target.checked)}
                    />
                    zabawki
                </label>
                <label className='items__label'>
                    <input type='checkbox' name='checkboxItem4' className='items__input'
                           checked={checkboxItemFour}
                           onChange={e => setCheckboxItemFour(e.target.checked)}
                    />
                    książki
                </label>
                <label className='items__label'>
                    <input type='checkbox' name='checkboxItem5' className='items__input'
                           checked={checkboxItemFive}
                           onChange={e => setCheckboxItemFive(e.target.checked)}
                    />
                    Inne
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
                    <input type='checkbox' name='checkboxLoc1' className='location__input' id='checkboxLoc1'
                           checked={checkboxLocOne}
                           onChange={e => setCheckboxLocOne(e.target.checked)}
                    />
                    <label className='location__label' htmlFor='checkboxLoc1'>
                        dzieciom i samotnym matkom
                    </label>
                    <input type='checkbox' name='checkboxLoc2' className='location__input' id='checkboxLoc2'
                           checked={checkboxLocTwo}
                           onChange={e => setCheckboxLocTwo(e.target.checked)}
                    />
                    <label className='location__label' htmlFor='checkboxLoc2'>
                        osobom starszym
                    </label>
                    <input type='checkbox' name='checkboxLoc3' className='location__input' id='checkboxLoc3'
                           checked={checkboxLocThree}
                           onChange={e => setCheckboxLocThree(e.target.checked)}
                    />
                    <label className='location__label' htmlFor='checkboxLoc3'>
                        bezdomnym
                    </label>
                    <input type='checkbox' name='checkboxLoc4' className='location__input' id='checkboxLoc4'
                           checked={checkboxLocFour}
                           onChange={e => setCheckboxLocFour(e.target.checked)}
                    />
                    <label className='location__label' htmlFor='checkboxLoc4'>
                        niepełnosprawnym
                    </label>
                    <input type='checkbox' name='checkboxLoc5' className='location__input' id='checkboxLoc5'
                           checked={checkboxLocFive}
                           onChange={e => setCheckboxLocFive(e.target.checked)}
                    />
                    <label className='location__label' htmlFor='checkboxLoc5'>
                        zwierzętom
                    </label>

                    <label className='location__label--specific' htmlFor='locationSpecific'>
                        Wpisz nazwę konkretnej organizacji (opcjonalnie)
                    </label>
                    <input type='text' name='locationSpecific' className='location__input--specific'
                           id='locationSpecific'
                           value={locationSpecific}
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
                                   value={whenDetails.street} onChange={handleWhenDetailsChange} />
                        </div>

                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='city'>Miasto</label>
                            <input type='text' name='city' placeholder='' id='city' className='when__input'
                                   value={whenDetails.city} onChange={handleWhenDetailsChange} />
                        </div>

                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='code'>Kod pocztowy</label>
                            <input type='text' name='code' placeholder='' id='code' className='when__input'
                                   value={whenDetails.code} onChange={handleWhenDetailsChange} />
                        </div>

                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='phone'>Numer telefonu</label>
                            <input type='text' name='phone' placeholder='' id='phone' className='when__input'
                                   value={whenDetails.phone} onChange={handleWhenDetailsChange} />
                        </div>

                    </div>
                    <div className='col-6 when__col'>
                        <div className='when__col--date'>Termin odbioru:</div>
                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='date'>Data</label>
                            <input type='text' name='date' placeholder='' id='date' className='when__input'
                                   value={whenDetails.date} onChange={handleWhenDetailsChange} />
                        </div>

                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='time'>Godzina</label>
                            <input type='text' name='time' placeholder='' id='time' className='when__input'
                                   value={whenDetails.time} onChange={handleWhenDetailsChange} />
                        </div>

                        <div className='when__labelInput'>
                            <label className='when__label' htmlFor='notes'>Uwagi dla kuriera</label>
                            <input type='text' name='notes' placeholder='' id='notes' className='when__input'
                                   value={whenDetails.notes} onChange={handleWhenDetailsChange} />
                        </div>

                    </div>

                </div>
            </form>
        );
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
                                : null
                }
            </div>
        </>
    )
};


export default FormStepOptions;