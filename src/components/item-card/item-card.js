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
        const {children,onChoseObj,openModal, ...obj} = card
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
                    <button className="btn btn-secondary btn-add">Add to my List</button>
                    <button className="btn btn-secondary btn-open" onClick={()=>{
                        card.onChoseObj(obj)
                        card.openModal()}
                    }>Open</button>
                </div>
             </div>
    )
}

export default ItemCard