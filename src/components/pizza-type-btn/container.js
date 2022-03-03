import { connect } from "react-redux";
import PizzaType from "./PizzaType";
import { filterBy } from '../../redux';

export default connect(null, { filterBy })(PizzaType);