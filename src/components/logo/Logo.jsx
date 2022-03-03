import React from 'react';
import './Logo.scss';
import logo from '../../assets/image 1.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className="logo">
            <div className="logo__img">
                <img src={logo} alt="logo" />
            </div>
            <div className="logo__content">
                <div className="logo__content-title">REACT PIZZA</div>
                <div className="logo__content-subtitle">самая вкусная пицца во вселенной</div>
            </div>
        </Link>
    );
};

export default Logo;