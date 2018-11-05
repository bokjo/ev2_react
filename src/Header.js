import React, { Component } from 'react';
import './styles/header.css';

class Header extends Component {
    render() {
        return (
            <header className="website-header">
                <h1>My website is: {this.props.websiteTitle}</h1>
            </header>
        )
    }
}


export default Header;
