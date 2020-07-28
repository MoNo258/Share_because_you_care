import React from 'react';

const FormInfo = () => {
    return (
        <div className='home__formInfo' >
            {/*<section className='formInfo container-fluid' >*/}
            <section className='formInfo container-sm' >
                <div className='formInfo__row'>
                    <h6 className='formInfo__title'>
                        Ważne!
                    </h6>
                    <p className='formInfo__text'>
                        Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
                    </p>
                </div>
            </section>
        </div>
    )
};


export default FormInfo;