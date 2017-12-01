import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';

import axios from 'axios';

export default class Browse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            display: [], // books to display
            filter: {
                in: true,
                out: true,
                genre: ''
            }
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="Browse">
                <div className="browse-header">
                    <div className="title">Browse Inventory</div>
                    <div className="stock-filters">
                        <div>In Stock<input
                            type="checkbox"
                            value={this.state.filter.in}
                        /></div>
                        <div>Out of Stock<input
                            type="checkbox"
                            value={this.state.filter.out}
                        /></div>
                    </div>
                </div>
                {
                    this.state.display.length ?
                        this.state.display.map(book => {
                            return (
                                <div />
                            )
                        })
                        :
                        null
                }
                <Navbar />
            </div>
        )
    }
}
