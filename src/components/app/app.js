import React from "react";
import './app.css'
import Header from "../header";
import Preview from "../preview";
import PopularContent from "../popular-content";
import Footer from "../footer";

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <Preview />
            <PopularContent />
            <Footer />
        </React.Fragment>
    )
}

export default App