import React, {Component} from "react";
import './preview.css'
import DimflixService from "../../service/dimflix-service";


export default class Preview extends Component {
    dimflixService = new DimflixService()

    state = {
        item: {},
        hasError: false
    }


    componentDidMount() {
        this.updatePreview()
        this.interval = setInterval(this.updatePreview, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updatePreview = () => {
        const id = Math.floor(Math.random()*500)
        this.dimflixService.getRandomMovie(id)
            .then((item) => this.setState({item}))
            .catch(() => this.setState({hasError: true}))
    }


    render() {

        const {item} = this.state
        const {title, poster, vote, overview} = item

        const imgStyle = {
            backgroundImage: `url("https://image.tmdb.org/t/p/w500/${poster}")`,
            backgroundSize: "60% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }

        return (

            <div className="d-flex preview-main" style={imgStyle}>
                <div className="preview-content">
                    <h4 className="dimflix-title">Dimflix Original</h4>
                    <h1 className="dimflix-title">{title}</h1>
                    <div className="preview-about">
                        {overview}
                    </div>
                    <div className="d-flex">
                        <button className="preview-button">Open</button>
                        <button className="preview-button">2</button>
                    </div>
                </div>
            </div>

        )
    }
}
