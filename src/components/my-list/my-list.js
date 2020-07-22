import React from "react";
import './my-list.css'


const MyList = ({item, onChoseObj, onOpenModal}) => {

    const choseCard = (item) => {
        onChoseObj(item)
        onOpenModal()
    }

    const updateItems = (items) => {
        return items.map(item => {
            if (!item.id) {
                return null
            }
            return (
                <img key={item.id} className="card-mylist" src={item.poster} onClick={() => choseCard(item)} alt="img"/>
            )
        })

    }

    const content = updateItems(item)
    if (content.length === 1) {
        return  <div className="mylist-text">Add something to your list :)</div>
    }
    return (
        <div className="d-flex mylist-main">
            {content}
        </div>
    )
}

export default MyList