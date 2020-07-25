import React from 'react';

const HomeOptionsListItem = ({name, goal, items}) => {

    return (
        <div className='row list__row'>
            <div className='col-6 list__col'>
                <h4 className='list__title'>
                    {name}
                </h4>
                <p className='list__text'>
                    {goal}
                </p>
            </div>
            <div className='col-6 list__col list__col--right'>
                <p className='list__text list__text--right'>
                    {items}
                </p>
            </div>
        </div>
    )
};

export default HomeOptionsListItem;