import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../components/logo/Logo';
import Cart from '../../components/cart/Cart';
import Navigation from '../../components/navigation/container';
import PizzaCard from '../../components/pizza-card/container';
import Loader from '../../components/loader/Loader';
import './Main.scss';

const Main = ({ pizzas, loading }) => {
    const cart = useSelector(({ cart }) => cart);


    const pizzasList = pizzas && pizzas.map(({ ...pizza }) => (
        <PizzaCard
            key={pizza.id}
            {...pizza}
            pizzaQuantity={cart[pizza.title] && cart[pizza.title].length}
        />
    ));

    const isLoading = loading && Array(8).fill(0).map((item, index) => <Loader key={index} />);

    return (
        <section className="main">
            <header className="main__header">
                <Logo />
                <Cart />
            </header>
            <Navigation />
            <div className="main__content">
                <h5 className="main__content-title">Все пиццы</h5>
                <div className="main__content-products">
                    {loading ? isLoading : pizzasList}
                </div>
            </div>
        </section>
    );
};

export default Main;