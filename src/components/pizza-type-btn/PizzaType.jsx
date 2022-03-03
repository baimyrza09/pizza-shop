import React from 'react';
import { useSelector } from 'react-redux';
import './PizzaType.scss';

const PizzaType = ({ name, filterBy }) => {
    const filteringField = useSelector(state => state.filterBy);

    return (
        <button
            type="button"
            className={filteringField === name ? "pizza-type active" : "pizza-type"}
            onClick={() => filterBy(name)}
        >
            <div className="pizza-type__text">{name}</div>
        </button>
    );
};

export default PizzaType;