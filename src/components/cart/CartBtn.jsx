import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartBtn.scss';

const CartBtn = ({ back, text }) => {
    const { cart, totalPizzas, totalPrice } = useSelector(state => state);

    const onClickOrder = () => {
        console.log({ cart, totalPrice, totalPizzas });
    };

    return (
        <Link
            className={back ? "button button--dark" : "button"}
            to="/"
            onClick={!back && onClickOrder}
        >
            {back && (
                <div className="back">&lt;</div>
            )}
            <div>{text}</div>
        </Link>
    );
};

export default CartBtn;