import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/main/container';
import CartPage from './pages/cart/container';
import './App.scss';

const App = () => {
    return (
        <section className="app">
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </section>
    );
};

export default App;