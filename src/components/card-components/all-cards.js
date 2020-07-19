import React, {Component} from "react";
import ItemCard, {ContentCard} from "../item-card";
import './card-components.css'


class AllCards extends Component{  //Только прорисовка , логика в НОС
//HOC

    render() {
        const {cards, onChoseObj, openModal} = this.props
        const renderCards = cards.map((card) =>
            <ItemCard key={card.id} {...card} onChoseObj={onChoseObj} openModal={openModal}>
                <ContentCard field="title" label="Name"/>
                <ContentCard field="popularity" label="Popularity"/>
            </ItemCard>)

        return (
            <React.Fragment>
                <form className="cards-search" onSubmit={this.props.updateCards}>
                    <input type="text" onChange={this.props.onChange}/>
                    <button className="btn btn-primary">Search</button>
                </form>
                <div className="cards-main">
                    {renderCards}
                </div>
            </React.Fragment>
        )
    }
}

export default AllCards