import React from 'react';

const FormStepOptions = ({step, options}) => {

    const optionItems = () => {
        return (
            <form className='options__items'>
                items checkboxes (Zaznacz co chcesz oddać:)
            </form>
        )
    };

    const optionBags = () => {
        return (
            <form className='options__bags'>
                bags no dropdown list (Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:)
            </form>
        );
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