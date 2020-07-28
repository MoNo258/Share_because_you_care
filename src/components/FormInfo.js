import React from 'react';

const FormInfo = ({id, text}) => {
    return (
        <div className='form__formInfo' >
            {/*<section className='formInfo container-fluid' >*/}
            <section className='formInfo container-sm' >
                <div className='formInfo__row'>
                    <h6 className='formInfo__title'>
                        Ważne!
                    </h6>
                    <p className='formInfo__text' id={id}>
                        {text}
                    </p>
                </div>
            </section>
        </div>
    )
};


export default FormInfo;