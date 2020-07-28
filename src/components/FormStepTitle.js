import React from 'react';

const FormStepTitle = ({step, number, title}) => {
    return (
        <>
            <div className='step__number' id={step}>
                {number}
            </div>
            <div className='step__title' id={step}>
                {title}
            </div>
        </>
    )
};


export default FormStepTitle;