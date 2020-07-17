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
         chosenId: '',
         toShowModal: false
     }

    dimflixService = new DimflixService()


    onChoseItem = (id) => {
         this.setState({chosenId: id})
    }

    openModal = () => {
        this.setState((state) => {
            return {
                toShowModal: !state.toShowModal
            }
        }  )
    }



    render() {
         const {toShowModal, chosenId} = this.state
         const {getTrending, getTopRated, getSearchAll} = this.dimflixService

        const modal = toShowModal ?<ModalWindow id={chosenId} show={toShowModal} closeModal={this.openModal}/> : null

        return (
            <React.Fragment>
                <Header/>
                {modal}
                <Preview onChoseItem={this.onChoseItem} openModal={this.openModal}/>
                <div className="cont-main">
                    <PopularContent getData={getTrending}/>
                </div>
                <Cards
                    getTopRatedData={getTopRated}
                    getSearchData={getSearchAll}/>
                <Footer />
            </React.Fragment>
        )
    }
}

