import React from "react";
import './item-card.css'

const ContentCard = ({card,field,label}) => {
    return (
        <li>
            <span className="card-text">{label}: </span>
            <span className="card-text">{card[field]}</span>
        </li>
    )
}

export {
    ContentCard
}


const ItemCard = (card) => {
    return (
             <div className="item-details card">
                <img className="item-image"
                     src={card.poster}
                     alt="item"/>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(card.children, (child) => {
                            return React.cloneElement(child, {card})
                        })
                        }
                    </ul>
                    <button className="btn btn-secondary btn-open">Open</button>
                </div>
             </div>
    )
}

export default ItemCard