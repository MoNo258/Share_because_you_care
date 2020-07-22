import React, {useState, useEffect} from 'react';
import {Pagination as PaginationOld, PaginationItem, PaginationLink} from 'reactstrap';
import Pagination from "react-js-pagination";
import HomeOptionsListItem from "./HomeOptionsListItem";
import foundations from "../data/foundations";
import organizations from "../data/organizations";
import locals from "../data/locals";
// import {OptionsPagination} from "./OptionsPagination";

const HomeOptionsList = ({option}) => {
    const [activePage, setActivePage] = useState(1);
    const [activeOption, setActiveOption] = useState('funds');
    const [totalItems, setTotalItems] = useState(1);
    const [currentList, setCurrentList] = useState([]);
    const [displayList, setDisplayList] = useState(currentList);


    useEffect(() => {
        setActiveOption(option);
        setTotalItems((prev) => {
            let result;
            result = activeOption === 'funds' ? (foundations.length)
                : activeOption === 'orgs' ? (organizations.length)
                    : activeOption === 'locs' ? (locals.length) : (foundations.length);
            return result
        });
    });

    useEffect( () => {
        const newCurrentArray = (activeOption === 'funds' ? foundations
            :
            activeOption === 'orgs' ? organizations
                :
                activeOption === 'locs' ? locals
                    : null);
        setCurrentList(newCurrentArray);
        setActivePage(1);
    },[activeOption]);

    useEffect( () => {
        const newDisplayArray = (currentList.length < 3 ? currentList
            :
            activePage == 1 ? currentList.slice(0,3)
                :
                activePage ==2 ? currentList.slice(3,6)
                    : activePage == 3 ? currentList.slice(6,9) : null);
        setDisplayList(newDisplayArray)
    }, [activePage, currentList])


    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    };


    return (
        <div className='home__options-list'>
            <section className='options-list container'>

                {displayList.map( list => {
                    return (
                        <HomeOptionsListItem key={list.id}
                                             name={list.name}
                                             goal={list.goal}
                                             items={list.items}
                        />
                    )
                })}

                <div className='row list__row list__row--pagination'>
                    <Pagination className=' options__pagination-item options__pagination-link'
                        hideNavigation
                        hideFirstLastPages
                        activePage={activePage}
                        itemsCountPerPage={3}
                        totalItemsCount={totalItems}
                        onChange={handlePageChange}
                    />
                </div>
            </section>

        </div>
    )
};

export default HomeOptionsList;