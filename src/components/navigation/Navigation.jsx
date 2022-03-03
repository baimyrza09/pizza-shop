import React from 'react';
import { Header, Dropdown } from 'semantic-ui-react';
import PizzaType from '../pizza-type-btn/container';

const Navigation = ({ sortBy }) => {
    const options = [
        {
            key: 'популярности',
            text: 'популярности',
            value: 'популярности',
            content: 'популярности',
        },
        {
            key: 'цене',
            text: 'цене',
            value: 'цене',
            content: 'цене',
        },
        {
            key: 'алфавиту',
            text: 'алфавиту',
            value: 'алфавиту',
            content: 'алфавиту',
        },
    ];

    return (
        <div className="main__content">
            <div className="main__navigation">
                <div className="main__navigation-buttons">
                    <PizzaType name="Все" />
                    <PizzaType name="Мясные" />
                    <PizzaType name="Вегетарианская" />
                    <PizzaType name="Гриль" />
                    <PizzaType name="Острые" />
                    <PizzaType name="Закрытые" />
                </div>
                <div className="main__navigation-sorting">
                    <Header as='h4'>
                        <Header.Content>
                            Сортировка по{' '}
                            <Dropdown
                                inline
                                options={options}
                                defaultValue={options[0].value}
                                className="main__navigation-dropdown"
                                onChange={(e, data) => sortBy(data.value)}
                            />
                        </Header.Content>
                    </Header>
                </div>
            </div>
        </div>
    );
};

export default Navigation;