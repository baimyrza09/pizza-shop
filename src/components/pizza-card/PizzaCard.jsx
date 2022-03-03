import React, { useState } from 'react';
import './PizzaCard.scss';

const PizzaBtn = ({ name, className, setActiveType, setActiveSize, selected }) => {
    const handleClick = () => {
        if (className === 'pizza__form-item') {
            setActiveType(name);
        } else {
            setActiveSize(name);
        }
    };

    return (
        <button
            type="button"
            className={selected ? className + ' active' : className}
            onClick={handleClick}
        >
            <p>{name}</p>
        </button>
    );
};

const PizzaCard = ({ img, title, price, addPizzaToCart, id, pizzaQuantity }) => {
    const types = ['тонкое', 'традиционное'];
    const sizes = ['26 см.', '30 см.', '40 см.'];

    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);

    const onAddPizza = () => {
        const newPizza = {
            img,
            title,
            price,
            type: activeType,
            size: activeSize,
            id
        };
        addPizzaToCart(newPizza);
    };

    return (
        <div className="pizza">
            <img className="pizza__img" src={img} alt="product" />
            <div className="pizza__title">{title}</div>
            <div className="pizza__options">
                <div className="pizza__form">
                    {types.map(type => (
                        <PizzaBtn
                            key={type}
                            name={type}
                            className="pizza__form-item"
                            setActiveType={setActiveType}
                            activeType={activeType}
                            selected={activeType === type}
                        />
                    ))}
                </div>
                <div className="pizza__size">
                    {sizes.map(size => (
                        <PizzaBtn
                            key={size}
                            name={size}
                            className="pizza__size-item"
                            setActiveSize={setActiveSize}
                            activeSize={activeSize}
                            selected={activeSize === size}
                        />
                    ))}
                </div>
            </div>
            <div className="pizza__actions">
                <div className="pizza__actions-price">
                    от
                    <span>{price}</span>
                    Р
                </div>
                <button
                    type="button"
                    className="pizza__actions-addToCart"
                    onClick={onAddPizza}
                >
                    <div className="pizza__actions-addToCart-plus">+</div>
                    <div className="pizza__actions-addToCart-text">Добавить</div>
                    {pizzaQuantity > 0 && (
                        <div className="pizza__actions-addToCart-num">
                            <span>{pizzaQuantity}</span>
                        </div>
                    )}
                </button>
            </div>
        </div >
    );
};

export default PizzaCard;