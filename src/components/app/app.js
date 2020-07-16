import React from "react";
import './app.css'
import Header from "../header";
import Preview from "../preview";
import PopularContent from "../popular-content";
import Footer from "../footer";
import DimflixService from "../../service/dimflix-service";
import Cards from "../cards";

const App = () => {

    const dimflixService = new DimflixService()


    return (
        <React.Fragment>
            <Header/>
            <Preview />
            <div className="cont-main">
                <PopularContent getData={dimflixService.getTrending}/>
            </div>
            <Cards getData={dimflixService.getTopRated}/>
            <Footer />
        </React.Fragment>
    )
}

export default App