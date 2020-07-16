import React, {Component} from "react";
import ItemCard from "../item-card/item-card";
import './cards.css'

export default class Cards extends Component{

    state = {
        cards: [],
        keyword: ''
    }

    componentDidMount() {
        this.props.getTopRatedData()
            .then((cards) => this.setState({cards}))
    }

    onChange = (e) => {
        let keyword = e.target.value.trim()
        this.setState({keyword})

    }

    updateCards = (e) => {

        e.preventDefault()
        this.props.getSearchData(this.state.keyword)
            .then((cards) => this.setState({cards}))
    }

    render() {

        const {cards} = this.state

        const renderCards = cards.map((card) => <ItemCard key={card.id} {...card}/>)

        return(
            <React.Fragment>
                <form className="cards-search" onSubmit={this.updateCards}>
                    <input type="text" onChange={this.onChange}/>
                    <button className="btn btn-primary">Search</button>
                </form>
                <div className="cards-main">
                    {renderCards}
                </div>
            </React.Fragment>
        )
    }

}
