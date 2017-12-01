import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';

export default class Edit extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Edit">
                <Navbar />
            </div>
        )
    }
}
