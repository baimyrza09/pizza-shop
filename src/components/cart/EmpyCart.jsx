import React from 'react';
import { Link } from 'react-router-dom';

import CartBtn from './CartBtn';
import emoji from '../../assets/emoji.png';
import buyer from '../../assets/buyer.png';
import './EmptyCart.scss';

const EmpyCart = () => {
    return (
        <div className="empty-cart">
            <div className="empty-cart__title">
                <div>Корзина пустая</div>
                <img src={emoji} alt="emoji" />
            </div>
            <div className="empty-cart__subtitle">
                <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
                <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            </div>
            <div className="empty-cart__buyer">
                <img src={buyer} alt="buyer" />
            </div>
            <Link to="/" className="empty-cart__btn">
                <CartBtn text="Вернуться назад" dark />
            </Link>
        </div>
    );
};

export default EmpyCart;