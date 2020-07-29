import React, {useState} from 'react';
import iconArrowDown from '../assets/Icon-Arrow-Down.svg';
import iconArrowUp from '../assets/Icon-Arrow-Up.svg';

const FormStepOptions = ({step, options}) => {
    const bags = [1,2,3,4,5];
    // const [bags, setBags] = useState([1, 2, 3, 4, 5]);
    const [selectedBag, setSelectedBag] = useState('--- wybierz ---');



    const optionItems = () => {
        return (
            <form className='options__items'>
                <label className='label__items'>
                    <input type='checkbox' name='checkbox2' className='input__items'
                        // checked='false'
                        // onChange={}
                    />
                    ubrania, które nadają się do ponownego użycia
                </label>

                <label className='label__items'>
                    <input type='checkbox' name='checkbox2' className='input__items'
                        // checked='false'
                        // onChange={}
                    />
                    ubrania, do wyrzucenia
                </label>

                <label className='label__items'>
                    <input type='checkbox' name='checkbox3' className='input__items'
                        // checked='false'
                        // onChange={}
                    />
                    zabawki
                </label>
                <label className='label__items'>
                    <input type='checkbox' name='checkbox4' className='input__items'
                        // checked='false'
                        // onChange={}
                    />
                    książki
                </label>
                <label className='label__items'>
                    <input type='checkbox' name='checkbox5' className='input__items'
                        // checked='false'
                        // onChange={}
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
                            return <option key={id} value={bag} className='bags__option' >{bag}</option> }
                        )}
                    </select>
                </label>
            </form>
        )
    };

    const optionLocation = () => {
        return (
            <form className='options__location'>
                location (Lokalizacja:)
            </form>
        );
    };

    const optionWhen = () => {
        return (
            <form className='options__when'>
                when (Podaj adres oraz termin odbioru rzecz przez kuriera)
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