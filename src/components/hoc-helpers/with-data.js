import React, {Component} from "react";


const WithData = (Wrapped, getData) => {
    return class extends Component {
        state = {
            cards: [],
            keyword: ''
        }

        componentDidMount() {
            this.props.getTopRatedData()
                .then((cards) => this.setState({cards}))
        }

        onChange = (e) => {
            let keyword = e.target.value
            this.setState({keyword})
        }

        updateCards = (e) => {
            e.preventDefault()
            if (this.state.keyword === '') {
                return
            }
            this.props.getSearchData(this.state.keyword)
                .then((cards) => this.setState({cards}))
        }

        render() {
            return (
                <Wrapped {...this.props}  cards={this.state.cards} updateCards={this.updateCards} onChange={this.onChange}/>
            )
        }
    }
}

export default WithData