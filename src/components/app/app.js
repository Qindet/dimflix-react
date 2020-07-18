import React, {Component} from "react";
import './app.css'
import Header from "../header";
import Preview from "../preview";
import PopularContent from "../popular-content";
import Footer from "../footer";
import DimflixService from "../../service/dimflix-service";
import Cards from "../cards";
import ModalWindow from "../modal-window";

export default class App extends Component {

     state = {
         toShowModal: false,
         item: {}
     }

    dimflixService = new DimflixService()



    openModal = () => {
        this.setState((state) => {
            return {
                toShowModal: !state.toShowModal
            }
        }  )
    }

    onChoseObj = (item) => {
         this.setState({item})
    }



    render() {
        console.log(this.state.item)
         const {toShowModal} = this.state
         const {getTrending, getTopRated, getSearchAll} = this.dimflixService

        const modal = toShowModal ?<ModalWindow show={toShowModal} closeModal={this.openModal}/> : null

        return (
            <React.Fragment>
                <Header/>
                {modal}
                <Preview openModal={this.openModal} onChoseObj={this.onChoseObj}/>
                <div className="cont-main">
                    <PopularContent openModal={this.openModal} getData={getTrending} onChoseObj={this.onChoseObj} />
                </div>
                <Cards
                    getTopRatedData={getTopRated}
                    getSearchData={getSearchAll}
                    onChoseObj={this.onChoseObj}
                    openModal={this.openModal}/>
                <Footer />
            </React.Fragment>
        )
    }
}

