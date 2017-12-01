import React from 'react';
import { Link } from 'react-router-dom';

export default function BookTile(props) {
    return (
        <div className="BookTile">
            <img src={props.imgurl} />
            <div className="book-tile-center">
                <div className="book-tile-title">{props.title}</div>
                <div className="book-tile-author">by {props.author}</div>
            </div>
            <div className='book-tile-right'>
                <div className="book-tile-top">In Stock: {}</div>
                <Link className="button" to={`details/${props.id}`} >Details</Link>
            </div>
        </div>
    )
}
