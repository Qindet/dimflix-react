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
        this.interval = setInterval(this.updatePreview, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updatePreview = () => {
        const id = Math.floor(Math.random()*500)
        this.dimflixService.getRandomMovie(id)
            .then((item) => this.setState({item, hasError: false}))
            .catch(() => this.setState({hasError: true}))
    }

    onOpenModal = (e) => {
        this.props.openModal()
        this.props.onChoseObj(this.state.item)
    }


    render() {

        const {item} = this.state
        const { title, poster, overview, imdb_id} = item

        const imgStyle = {
            backgroundImage: `url(${poster})`,
            backgroundSize: "60% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }


        const content = <PreviewContent title={title} overview={overview} onOpenModal={this.onOpenModal}/>
        return (
            <div className="d-flex preview-main" style={imgStyle} data-id={imdb_id}>
                <div className="preview-content">
                    {content}
                </div>
            </div>

        )
    }
}

const PreviewContent = ({title,overview, onOpenModal}) => {
    return (
        <React.Fragment>
            <h4 className="dimflix-title">Dimflix Original</h4>
            <h1 className="dimflix-title">{title}</h1>
            <div className="preview-about">
                {overview}
            </div>
            <div className="d-flex">
                <button className="preview-button" onClick={onOpenModal}>Open</button>
            </div>
        </React.Fragment>
    )
}
