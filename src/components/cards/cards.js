import React, {Component} from "react";
import ItemCard, {ContentCard} from "../item-card";
import WithData from "../hoc-helpers";
import './cards.css'

class Cards extends Component{  //Только прорисовка , логика в НОС
//HOC

    render() {
        const {cards, onChoseObj} = this.props
        const renderCards = cards.map((card) =>
            <ItemCard key={card.id} {...card} onChoseObj={onChoseObj}>
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

export default WithData(Cards)












// export default class Cards extends Component{
// //HOC
//     state = {
//         cards: [],
//         keyword: ''
//     }
//
//     componentDidMount() {
//         this.props.getTopRatedData()
//             .then((cards) => this.setState({cards}))
//     }
//
//     onChange = (e) => {
//         let keyword = e.target.value
//         this.setState({keyword})
//     }
//
//     updateCards = (e) => {
//         e.preventDefault()
//         if (this.state.keyword === '') {
//             return
//         }
//         this.props.getSearchData(this.state.keyword)
//             .then((cards) => this.setState({cards}))
//     }
//
//     render() {
//
//         const {cards} = this.state
//         const renderCards = cards.map((card) =>
//             <ItemCard key={card.id} {...card}>
//                 <ContentCard field="title" label="Name"/>
//                 <ContentCard field="popularity" label="Popularity"/>
//             </ItemCard>)
//
//         return (
//             <React.Fragment>
//                 <form className="cards-search" onSubmit={this.updateCards}>
//                     <input type="text" onChange={this.onChange}/>
//                     <button className="btn btn-primary">Search</button>
//                 </form>
//                 <div className="cards-main">
//                     {renderCards}
//                 </div>
//             </React.Fragment>
//         )
//     }
//
// }
