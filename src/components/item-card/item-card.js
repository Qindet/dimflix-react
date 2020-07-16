import React from "react";
import './item-card.css'

const ItemCard = ({title,poster,popularity,vote,date}) => {

    const realised = date !== undefined ?    <li>Released: <span className="card-date">{date}</span></li> : null
    return (
             <div className="item-details card">
                <img className="item-image"
                     src={poster}
                     alt="item"/>
                <div className="card-body">
                    <h4>{title}</h4>
                    <ul className="list-group list-group-flush">
                        <li>Popularity: {popularity}</li>
                        <li>Rating: {vote}</li>
                        {realised}
                    </ul>
                    <button className="btn btn-secondary">Open</button>
                </div>
             </div>
    )
}

export default ItemCard