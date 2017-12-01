import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';

export default class Shelf extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Shelf">
                <Navbar />
            </div>
        )
    }
}
