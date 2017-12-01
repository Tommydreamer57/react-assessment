import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import DetailsTile from '../../components/DetailsTile/DetailsTile';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            book: {}
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`http://localhost:3003/details/${id}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    book: response.data
                })
            })
    }
    del = () => {
        axios.delete(`http://localhost:3003/book/${this.state.book.id}`)
            .then(() => {
                this.props.history.push(`/browse`)
            })
    }
    addToCart = () => {
        axios.post(`http://localhost:3003/addtocart/${this.state.book.id}`)
            .then(response => {
                console.log(response.data)
            })
    }
    render() {
        return (
            <div className="Details">
                <div className="header">
                    <div className="title">Details</div>
                    <Link to="/browse" className="back-button">Back</Link>
                </div>
                <DetailsTile {...this.state.book} addToCart={this.addToCart} del={this.del} />
                <Navbar />
            </div>
        )
    }
}
