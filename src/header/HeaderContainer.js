import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Logo from '../icons/Logo';
import Burger from '../components/Burger';

export default class HeaderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            burgerActive: false
        };
    }
    /////////////////////////
    // EVENT HANDLERS
    /////////////////////////

    handleBurgerClick = (e) => {
        this.setState({
            burgerActive: !this.state.burgerActive
        });
    }

    render() {
        return (
            <header className="header">
                <div className="header__inner">
                    <Link to="/" className="header__logo">
                        <Logo/>
                    </Link>
                    <div className="header__burger">
                        <Burger
                            onBurgerClick={this.handleBurgerClick}
                            burgerActive={this.state.burgerActive}
                            size={20}
                        />
                    </div>
                </div>
            </header>
        );
    }
}
