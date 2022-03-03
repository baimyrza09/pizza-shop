import { connect } from "react-redux";
import Navigation from "./Navigation";
import { sortBy } from '../../redux';

export default connect(null, { sortBy })(Navigation);