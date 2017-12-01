import React from 'react';
import { Link } from 'react-router-dom';


export default function DetailsTile(props) {
    return (
        <div className="DetailsTile">
            <img src={props.src} />
            <div className="details">
                <div className="details-line">
                    <div className="property">Title:</div>
                    <div className="value">{props.title}</div>
                </div>
                <div className="details-line">
                    <div className="property">Author:</div>
                    <div className="value">{props.author}</div>
                </div>
                <div className="details-line">
                    <div className="property">Genre:</div>
                    <div className="value">{props.genre}</div>
                </div>
                <div className="details-line">
                    <div className="property">In Stock:</div>
                    <div className="value">{props.stock}</div>
                </div>
                <div className="details-description">
                    <div className="property">Description:</div>
                    <div className="description">{props.description}</div>
                </div>
                <div className="details-buttons">
                    <Link id="edit" className="button" to={`/edit/${props.id}`} >Edit</Link>
                    <button id="delete" className="button" onClick={props.del} >Delete</button>
                    <button id="add" className="button" onClick={props.addToCart}>+ Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

