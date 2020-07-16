import React, {Component} from "react";
import ItemCard from "../item-card/item-card";
import './cards.css'

export default class Cards extends Component{

    state = {
        cards: []
    }

    componentDidMount() {
        this.props.getData()
            .then((cards) => this.setState({cards}))
    }

    render() {

        const {cards} = this.state
        console.log(cards)
        const renderCards = cards.map((card) => <ItemCard key={card.id} {...card}/>)

        return(
         <div className="cards-main">
             {renderCards}
         </div>
        )
    }

}
