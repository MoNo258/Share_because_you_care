import React, {useEffect, useState} from 'react';
import backgroundForm from '../assets/Background-Form.jpg'
import FormInfo from "./FormInfo";
import FormStepTitle from "./FormStepTitle";
import FormStepOptions from "./FormStepOptions";

const FormStepBasic = () => {
    const possibleSteps = ['stepOne', 'stepTwo', 'stepThree', 'stepFour', 'summary', 'thanks'];
    const [step, setStep] = useState(possibleSteps[0]);
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');
    const [title, setTitle] = useState('');
    const [options, setOptions] = useState('');
    const [stepIndex, setStepIndex] = useState(0);
    const [disabledPrev, setDisabledPrev] = useState(true);
    const [disabledNext, setDisabledNext] = useState(false);

    const handleClickPrev = (e) => {
        e.preventDefault();
        const index = stepIndex - 1;
        const disabledPrevious = (index === 0);
        setStepIndex(index);
        setStep(possibleSteps[index]);
        setDisabledPrev(disabledPrevious);
        setDisabledNext(false);
    };

    const handleClickNext = (e) => {
        e.preventDefault();
        const index = stepIndex + 1;
        const disabledNextOne = index === (possibleSteps.length - 1);
        setStepIndex(index);
        setStep(possibleSteps[index]);
        setDisabledPrev(false);
        setDisabledNext(disabledNextOne);
    };

    useEffect(() => {
        switch (step) {
            case 'stepOne':
                setText('Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.');
                setNumber('Krok 1/4');
                setTitle('Zaznacz co chcesz oddać:');
                setOptions('items');
                break;
            case 'stepTwo':
                setText('Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.');
                setNumber('Krok 2/4');
                setTitle('Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:');
                setOptions('bags');
                break;
            case 'stepThree':
                setText('Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.');
                setNumber('Krok 3/4');
                setTitle('Lokalizacja:');
                setOptions('location');
                break;
            case 'stepFour':
                setText('Podaj adres oraz termin odbioru rzeczy.');
                setNumber('Krok 4/4');
                setTitle('Podaj adres oraz termin odbioru rzecz przez kuriera');
                setOptions('when');
                break;
            default:
                setText('Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.');
                setNumber('Krok 1/4');
                setTitle('Zaznacz co chcesz oddać:');
                setOptions('items');
        }
    }, [step]);

    const formStyle = {
        background: `url(${backgroundForm})`,
        backgroundPosition: 'right'
    };

    return (
        <>
            {step === 'stepOne' || step === 'stepTwo' || step === 'stepThree' || step === 'stepFour'
                ?
                <>
                    <FormInfo
                        id={step}
                        text={text}
                    />

                    <div className='form__formStep ' style={formStyle}>
                        <section className='formStep container-sm'>
                            <div className='row formStep__row container-sm'>
                                <div className='col-sm-12 col-6 formStep__col'>

                                    <FormStepTitle
                                        id={step}
                                        number={number}
                                        title={title}
                                    />

                                    <FormStepOptions
                                        id={step}
                                        options={options}
                                    />

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
                                            Dalej
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </>
                :
                step === 'summary'
                    ?
                    <>
                        <div className='form__formStep ' style={formStyle}>
                            <section className='formStep container-sm'>
                                <div className='row formStep__row container-sm'>
                                    <div className='col-sm-12 col-6 formStep__col'>

                                        summary

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
                                                Potwierdzam
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </div>
                    </>
                    :
                    step === 'thanks'
                        ?
                        <>
                            <div className='form__formStep ' style={formStyle}>
                                <section className='formStep container-sm'>
                                    <div className='row formStep__row container-sm'>
                                        <div className='col-sm-12 col-6 formStep__col'>

                                            thanks


                                        </div>
                                    </div>
                                </section>
                            </div>
                        </>
                        : null
            }
        </>
    )
};

export default FormStepBasic;