import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

const HomeOptionsList = () => {

    return (
        <div className='home__options-list'>

            <section className='options-list container'>
                <div className='row list__row'>
                    <div className='col-6 list__col'>
                        <h4 className='list__title'>
                            Fundacja “Dbam o Zdrowie”
                        </h4>
                        <p className='list__text'>
                            Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                        </p>
                    </div>
                    <div className='col-6 list__col list__col--right'>
                        <p className='list__text list__text--right'>
                            ubrania, jedzenie, sprzęt AGD, meble, zabawki
                        </p>
                    </div>
                </div>
                <div className='row list__row'>
                    <div className='col-6 list__col'>
                        <h4 className='list__title'>
                            Fundacja “Dla dzieci”
                        </h4>
                        <p className='list__text'>
                            Cel i misja: Pomoc dzieciom z ubogich rodzin.
                        </p>
                    </div>
                    <div className='col-6 list__col list__col--right'>
                        <p className='list__text list__text--right'>
                            ubrania, meble, zabawki
                        </p>
                    </div>
                </div>
                <div className='row list__row'>
                    <div className='col-6 list__col'>
                        <h4 className='list__title'>
                            Fundacja “Bez domu”
                        </h4>
                        <p className='list__text'>
                            Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.
                        </p>
                    </div>
                    <div className='col-6 list__col list__col--right'>
                        <p className='list__text list__text--right'>
                            ubrania, jedzenie, ciepłe koce
                        </p>
                    </div>
                </div>

                <div className='row list__row'>
                    <div className='col-6 list__col'>
                        <h4 className='list__title'>
                            Fundacja “We care”
                        </h4>
                        <p className='list__text'>
                            Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                        </p>
                    </div>
                    <div className='col-6 list__col list__col--right'>
                        <p className='list__text list__text--right'>
                            ubrania, jedzenie, meble, zabawki
                        </p>
                    </div>
                </div>
                <div className='row list__row'>
                    <div className='col-6 list__col'>
                        <h4 className='list__title'>
                            Fundacja “For kids”
                        </h4>
                        <p className='list__text'>
                            Cel i misja: Pomoc dzieciom z ubogich rodzin.
                        </p>
                    </div>
                    <div className='col-6 list__col list__col--right'>
                        <p className='list__text list__text--right'>
                            ubrania, meble, zabawki
                        </p>
                    </div>
                </div>
                <div className='row list__row'>
                    <div className='col-6 list__col'>
                        <h4 className='list__title'>
                            Fundacja “Homeless”
                        </h4>
                        <p className='list__text'>
                            Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.
                        </p>
                    </div>
                    <div className='col-6 list__col list__col--right'>
                        <p className='list__text list__text--right'>
                            ubrania, jedzenie, ciepłe koce
                        </p>
                    </div>
                </div>


                <div className='row list__row'>
                    <div className='col-6 list__col'>
                        <h4 className='list__title'>
                            Fundacja “Na pomoc psom i kotom”
                        </h4>
                        <p className='list__text'>
                            Cel i misja: Pomoc psom i kotom.
                        </p>
                    </div>
                    <div className='col-6 list__col list__col--right'>
                        <p className='list__text list__text--right'>
                            akcesoria, karma, zabawki, koce
                        </p>
                    </div>
                </div>
                <div className='row list__row'>
                    <div className='col-6 list__col'>
                        <h4 className='list__title'>
                            Fundacja “Na pomoc koniom”
                        </h4>
                        <p className='list__text'>
                            Cel i misja: Pomoc koniom.
                        </p>
                    </div>
                    <div className='col-6 list__col list__col--right'>
                        <p className='list__text list__text--right'>
                            akcesoria, karma, siano, derki
                        </p>
                    </div>
                </div>
                <div className='row list__row'>
                    <div className='col-6 list__col'>
                        <h4 className='list__title'>
                            Fundacja “Na pomoc gryzoniom”
                        </h4>
                        <p className='list__text'>
                            Cel i misja: Pomoc dla gryzoni.
                        </p>
                    </div>
                    <div className='col-6 list__col list__col--right'>
                        <p className='list__text list__text--right'>
                            akcesoria, karma, sianko
                        </p>
                    </div>
                </div>

                <div className='row list__row list__row--pagination'>
                    <Pagination size="sm" aria-label="Options navigation" className='options__pagination'>
                        <PaginationItem active className='options__pagination-item'>
                            <PaginationLink href="#" className='options__pagination-link'>
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className='options__pagination-item'>
                            <PaginationLink href="#" className='options__pagination-link'>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className='options__pagination-item'>
                            <PaginationLink href="#" className='options__pagination-link'>
                                3
                            </PaginationLink>
                        </PaginationItem>
                    </Pagination>
                </div>
            </section>

        </div>
    )
};

export default HomeOptionsList;