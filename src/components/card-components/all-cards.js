import React, {Component} from "react";
import ItemCard, {ContentCard} from "../item-card";
import './card-components.css'
import ErrorBoundry from "../error-boundry";


class AllCards extends Component{  //Только прорисовка , логика в НОС
//HOC

    render() {

        const {cards, onChoseObj, openModal, onAddItem} = this.props
        const renderCards = cards.map((card) =>
            <ItemCard key={card.id} {...card} onChoseObj={onChoseObj} openModal={openModal} onAddItem={onAddItem}>
                <ContentCard field="title" label="Name"/>
                <ContentCard field="popularity" label="Popularity"/>
                <ContentCard field="vote" label="Rating"/>
            </ItemCard>)

        return (
            <ErrorBoundry>
                <React.Fragment>
                    <form className="cards-search" onSubmit={this.props.updateCards}>
                        <input type="text" onChange={this.props.onChange}/>
                        <button className="btn btn-primary">Search</button>
                    </form>
                    <div className="cards-main">
                        {renderCards}
                    </div>
                </React.Fragment>
            </ErrorBoundry>

        )
    }
}

export default AllCards