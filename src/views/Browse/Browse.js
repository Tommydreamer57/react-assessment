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
    handleChange(target, value) {
        this.setState({
            filter: Object.assign({}, this.state.filter, { [target]: value })
        })
    }
    componentDidMount() {

    }
    render() {
        console.log(this.state.filter)
        return (
            <div className="Browse">
                <div className="browse-header">
                    <div className="title">Browse Inventory</div>
                    <div className="stock-filters">
                        <div className="label">In Stock<input
                            type="checkbox"
                            checked={this.state.filter.in}
                            onChange={() => this.handleChange('in', !this.state.filter.in)}
                        /></div>
                        <div className="label">Out of Stock<input
                            type="checkbox"
                            checked={this.state.filter.out}
                            onChange={() => this.handleChange('out', !this.state.filter.out)}
                        /></div>
                    </div>
                    <div className="browse-genre">
                        <div className="label">Genre<select
                            value={this.state.filter.genre}
                            defalutValue="None"
                            onChange={e => this.handleChange('genre', e.target.value)}
                        >
                            {
                                
                            }
                        </select></div>
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
