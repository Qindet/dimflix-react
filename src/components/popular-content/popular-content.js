import React, {Component} from "react";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./popular-content.css"

export default class PopularContent extends Component{

        state = {
            items: []
        }

        componentDidMount() {
            this.props.getData()
                .then((items) => this.setState({items}))
        }

        updateItems() {

        }

    render() {

            const {items} = this.state

            const renderItems = items.map(({id,poster}) => <img key={id} className="item1" src={poster}/>)

        return (
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


        )
    }
}