import React, { Component } from 'react'
import Main from './Main';
import { connect } from 'react-redux';
import { getAllPizzas } from '../../redux';

class Container extends Component {
    componentDidMount() {
        if (!this.props.pizzas) {
            this.props.getAllPizzas();
        }
    }

    render() {
        return (
            <Main {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    pizzas: state.pizzas,
    loading: state.loading
});

export default connect(mapStateToProps, { getAllPizzas })(Container);
