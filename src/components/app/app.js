import React, {Component} from "react";
import './app.css'
import Header from "../header";
import Preview from "../preview";
import PopularContent from "../popular-content";
import Footer from "../footer";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DimflixService from "../../service/dimflix-service";

import {AllCardsSearch, MovieCardsSearch, PeopleCardsSearch, TvCardsSearch} from "../card-components";
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

         const {toShowModal,item} = this.state
         const {getTrending, getTrendingMovies,getTrendingTv, getTrendingPeople} = this.dimflixService
        console.log(getTrendingPeople)
        const modal = toShowModal ?<ModalWindow show={toShowModal} closeModal={this.openModal} item={item}/> : null



        return (
            <React.Fragment>
                <Router>
                    <Header/>

                    <Route path="/" render={() => modal} exact/>
                    <Route path="/movies" render={() => modal} />
                    <Route path="/tv" render={() => modal} />
                    <Route path="/" render={() => <Preview openModal={this.openModal} onChoseObj={this.onChoseObj}/>} exact/>

                    <div className="cont-main">
                        <Route path="/" render={() =>  <PopularContent openModal={this.openModal} getData={getTrending} onChoseObj={this.onChoseObj} />} exact/>
                    </div>
                    <Route path="/" render={() => <AllCardsSearch onChoseObj={this.onChoseObj} openModal={this.openModal}/>} exact/>


                    <div className="cont-main">
                    <Route path="/movies" render={() => <PopularContent openModal={this.openModal} getData={getTrendingMovies} onChoseObj={this.onChoseObj} />} />
                    </div>
                    <Route path="/movies" render={() => <MovieCardsSearch onChoseObj={this.onChoseObj} openModal={this.openModal}/>} />

                    <div className="cont-main">
                    <Route path="/tv" render={() => <PopularContent openModal={this.openModal} getData={getTrendingTv} onChoseObj={this.onChoseObj} />} />
                    </div>
                    <Route path="/tv" render={() => <TvCardsSearch onChoseObj={this.onChoseObj} openModal={this.openModal}/>} />


                    <div className="cont-main">
                        <Route path="/people" render={() => <PopularContent openModal={this.openModal} getData={getTrendingPeople} onChoseObj={this.onChoseObj} />} />
                    </div>
                    <Route path="/people" render={() => <PeopleCardsSearch onChoseObj={this.onChoseObj} openModal={this.openModal}/>} />

                    <Footer />

                </Router>
            </React.Fragment>
        )
    }
}

