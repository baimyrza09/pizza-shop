import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import CartBtn from './CartBtn';
import cartImg from '../../assets/cart.png';

const FullCart = ({ resetCart, removeCartItem, minusPizza, plusPizza }) => {
    const { cart, totalPizzas, totalPrice } = useSelector(state => state);
    const cartPizzas = Object.keys(cart).map(key => {
        return cart[key][0];
    });

    const handleCartReset = () => {
        resetCart();
    };

    return (
        <>
            <div className="cart-page__title">
                <div className="cart-page__title-cart">
                    <img src={cartImg} alt="cart" />
                    <div>Корзина</div>
                </div>
                <button
                    type="button"
                    className="cart-page__title-clear"
                    onClick={handleCartReset}
                >
                    <svg viewBox="0 0 20 20">
                        <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>Очистить корзину</div>
                </button>
            </div>
            <div className="cart-page__products">
                {cartPizzas.map(pizza => (
                    <CartItem
                        key={pizza.id}
                        totalCount={cart[pizza.title].length}
                        removeCartItem={removeCartItem}
                        minusPizza={minusPizza}
                        plusPizza={plusPizza}
                        {...pizza}
                    />
                ))}
            </div>
            <div className="cart-page__stats">
                <div className="cart-page__stats-totalQuantity">
                    <div>Всего пицц:</div>
                    <div className="amount">
                        {`${totalPizzas} шт.`}
                    </div>
                </div>
                <div className="cart-page__stats-totalPrice">
                    <div>Сумма заказа:</div>
                    <div className="price">
                        {`${totalPrice} Р`}
                    </div>
                </div>
            </div>
            <div className="cart-page__buttons">
                <CartBtn text="Вернуться назад" back />
                <CartBtn text="Оплатить сейчас" />
            </div>
        </>
    );
};

export default FullCart;