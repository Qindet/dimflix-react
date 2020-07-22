import React, {Component} from "react";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./popular-content.css"
import ErrorBoundry from "../error-boundry";


class PopularContent extends Component{
// ErroBoundry
    // 2 HOC!?
        state = {
            items: [],
            chosen: {}
        }

        componentDidMount() {
            this.props.getData()
                .then((items) => this.setState({items}))
                .catch(() => new Error('Something went wrong'))
        }

        onOpenModal = (e) => {
            const el = e.target.closest('img')
            const id = +el.dataset.id
            const obj = this.state.items.find((item) => item.id===id)
            this.props.onChoseObj(obj)
            this.props.openModal()
        }


    render() {

            const {items} = this.state
            const renderItems = items.map(({id,poster}) => <img key={id} data-id={id} className="item1" src={poster} alt="pop-content" onClick={this.onOpenModal}/>)
        return (
            <ErrorBoundry>
                <div className="popular-main">
                    <h1 className="dimflix-title">Popular this week on Dimflix</h1>
                    <Carousel  //popularContent HOC then (carousle in HOC)
                        slidesPerPage={5}
                        offset={100}
                        itemWidth={295}
                        arrows
                        className="car-top">
                        {renderItems}
                    </Carousel>
                </div>
            </ErrorBoundry>

        )
    }
}

export default PopularContent

