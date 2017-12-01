import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className="Navbar">
            <div className="navbar-left">
                <div className="logo" />
                <Link className="navbar-button" to="/browse" >Browse</Link>
                <Link className="navbar-button" to="/cart" >Cart</Link>
                <Link className="navbar-button" to="/shelf" >MyShelf</Link>
            </div>
            <Link onClick={props.logout} className="navbar-button logout" to="/" >Logout</Link>
        </div>
    )
}
