import React, {useState, useEffect} from 'react';
import Pagination from "react-js-pagination";
import HomeOptionsListItem from "./HomeOptionsListItem";
import foundations from "../data/foundations";
import organizations from "../data/organizations";
import locals from "../data/locals";

const HomeOptionsList = ({option}) => {
    const [activePage, setActivePage] = useState(1);
    const [activeOption, setActiveOption] = useState('funds');
    const [totalItems, setTotalItems] = useState(1);
    const [currentList, setCurrentList] = useState([]);
    const [displayList, setDisplayList] = useState(currentList);

    const itemsPerPage = 3;

    useEffect(() => {
        setActiveOption(option);
        setTotalItems((prev) => {
            let result;
            result = activeOption === 'funds' ? (foundations.length)
                : activeOption === 'orgs' ? (organizations.length)
                    : activeOption === 'locs' ? (locals.length) : (foundations.length);
            return result
        });
    },[option, activeOption]);

    useEffect(() => {
        const newCurrentArray = (activeOption === 'funds' ? foundations
            :
            activeOption === 'orgs' ? organizations
                :
                activeOption === 'locs' ? locals
                    : null);
        setCurrentList(newCurrentArray);
        setActivePage(1);
    }, [activeOption]);

    // useEffect( () => {
    //     let newDisplayArray;
    //     for(let i =1; i<= totalItems/itemsPerPage; i++ ){
    //         (currentList.length <= itemsPerPage ? newDisplayArray.concat(currentList)
    //             :
    //             newDisplayArray.concat(currentList.slice( ((itemsPerPage*i) - itemsPerPage), itemsPerPage*i)) )
    //     }
    //     setDisplayList(newDisplayArray)
    // }, [activePage, currentList,itemsPerPage,totalItems]);

    useEffect(() => {
        const newDisplayArray = (currentList.length <= itemsPerPage ? currentList
            :
            activePage === 1 ? currentList.slice(0, itemsPerPage)
                :
                activePage === 2 ? currentList.slice(itemsPerPage, itemsPerPage * 2)
                    :
                    activePage === 3 ? currentList.slice(itemsPerPage * 2, itemsPerPage * 3) : null);
        setDisplayList(newDisplayArray)
    }, [activePage, currentList, itemsPerPage]);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    };


    return (
        <div className='home__options-list'>
            <section className='options-list container'>
                {displayList.map(list => {
                    return (
                        <HomeOptionsListItem key={list.id}
                                             name={list.name}
                                             goal={list.goal}
                                             items={list.items}
                        />
                    )
                })}

                <div className='row list__row--pagination'>
                    {totalItems / itemsPerPage !== 1 ?
                        <Pagination className=' options__pagination-item options__pagination-link'
                                    hideNavigation
                                    hideFirstLastPages
                                    activePage={activePage}
                                    itemsCountPerPage={itemsPerPage}
                                    totalItemsCount={totalItems}
                                    onChange={handlePageChange}
                        />
                        :
                        <div className=' options__pagination-item'></div>
                    }
                </div>
            </section>
        </div>
    )
};

export default HomeOptionsList;