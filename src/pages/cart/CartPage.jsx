import React from 'react';
import Logo from '../../components/logo/Logo';
import { useSelector } from 'react-redux';
import FullCart from '../../components/cart/FullCart';
import EmpyCart from '../../components/cart/EmpyCart';
import './CartPage.scss';

const CartPage = ({ resetCart, removeCartItem, minusPizza, plusPizza }) => {
    const { totalPizzas } = useSelector(state => state);
    const cartContent = totalPizzas > 0 ? (
        <FullCart
            resetCart={resetCart}
            removeCartItem={removeCartItem}
            minusPizza={minusPizza}
            plusPizza={plusPizza}
        />
    ) : <EmpyCart />;

    return (
        <section className="cart-page">
            <Logo />
            <div className="cart-page__content">
                {cartContent}
            </div>
        </section>
    );
};

export default CartPage;