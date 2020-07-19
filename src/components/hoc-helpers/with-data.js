import React, {Component} from "react";


const WithData = (Wrapped, getData, getSearch) => {
    return class extends Component {

        state = {
            cards: [],
            keyword: ''
        }

        componentDidMount() {
            getData()
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
          getSearch(this.state.keyword)
                .then((cards) => this.setState({cards}))
        }

        render() {

            return (
                <Wrapped {...this.props}  cards={this.state.cards} updateCards={this.updateCards} onChange={this.onChange} onChoseObj={this.props.onChoseObj}/>
            )
        }
    }
}

export default WithData