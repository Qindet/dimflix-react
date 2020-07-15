import React, {Component} from "react";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./popular-content.css"

export default class PopularContent extends Component{

        state = {

        }

    render() {
        return (
            <div className="popular-main">
                <h2>Popular on</h2>
                <Carousel
                slidesPerPage={7}
                className="car-top">
                   <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                </Carousel>

                <Carousel
                    slidesPerPage={7}
                className="car-top">
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                    <img className="item1" src="https://picfiles.alphacoders.com/287/287994.jpg"/>
                </Carousel>
            </div>


        )
    }
}