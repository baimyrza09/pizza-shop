import axios from 'axios';

const baseUrl = 'https://lit-waters-38927.herokuapp.com';

class PizzaApi {
    getAllPizzas = () => {
        return axios.get(`${baseUrl}/pizzas`);
    }

    filterBy = (field) => {
        if (field !== 'Все') {
            return axios.get(`${baseUrl}/pizzas?category=${field}`)
        } else {
            return axios.get(`${baseUrl}/pizzas`)
        }
    }

    sortBy = (field) => {
        console.log(field);
        switch (field) {
            case 'популярности':
                return axios.get(`${baseUrl}/pizzas?_sort=orders&_order=asc`);
            case 'цене':
                return axios.get(`${baseUrl}/pizzas?_sort=price&_order=asc`);
            case 'алфавиту':
                return axios.get(`${baseUrl}/pizzas?_sort=title&_order=asc`);
            default:
                return field;
        }
    }
}

export default PizzaApi;