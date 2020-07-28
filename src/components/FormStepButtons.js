import React from 'react';

const FormStepButtons = ({stepIndex, possibleSteps, disabledPrev, disabledNext, setCallbackPrev, setCallbackNext}) => {

    const handleClickPrev = (e) => {
        e.preventDefault();
        const index = stepIndex - 1;
        const disabledPrevious = (index === 0);
        setCallbackPrev(index, disabledPrevious)
    };

    const handleClickNext = (e) => {
        e.preventDefault();
        const index = stepIndex + 1;
        const disabledNextOne = index === (possibleSteps.length - 1);
        setCallbackNext(index, disabledNextOne)
    };

    return (
        <div className='step__prevNext'>
            <button
                className='step__prev'
                onClick={e => handleClickPrev(e)}
                disabled={disabledPrev}
            >
                Wstecz
            </button>
            <button
                className='step__next'
                onClick={e => handleClickNext(e)}
                disabled={disabledNext}
            >
                {stepIndex === 4 ? 'Podsumowanie' : 'Dalej'}
            </button>
        </div>
    );
};

export default FormStepButtons;