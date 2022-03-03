import { connect } from "react-redux";
import CartPage from './CartPage';
import { resetCart, removeCartItem, minusPizza, plusPizza } from '../../redux';

export default connect(null, { resetCart, removeCartItem, minusPizza, plusPizza })(CartPage)