import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';

export default class Cart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Cart">
                <Navbar />
            </div>
        )
    }
}
