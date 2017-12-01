import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';

export default class Details extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Details">
                <Navbar />
            </div>
        )
    }
}
