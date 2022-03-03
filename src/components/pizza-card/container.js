import { connect } from "react-redux";
import PizzaCard from "./PizzaCard";
import { addPizzaToCart } from '../../redux';

export default connect(null, { addPizzaToCart })(PizzaCard);