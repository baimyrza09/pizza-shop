import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartImg from '../../assets/iconfinder_shopping-cart_2561279 1.svg';
import './Cart.scss';

const Cart = () => {
    const { totalPizzas, totalPrice } = useSelector(state => state);

    return (
        <Link to="/cart" className="cart">
            <div className="cart__price">
                {totalPrice}
                <span className="rub">Р</span>
            </div>
            <div className="cart__divider"></div>
            <div className="cart__quantity">
                <img src={cartImg} alt="cart" />
                <span>{totalPizzas}</span>
            </div>
        </Link>
    );
};

export default Cart;