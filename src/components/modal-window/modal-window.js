import React from "react";
import './modal-window.css'
import ErrorBoundry from "../error-boundry";

const ModalWindow = (props) => {
    const onClose = () => {
        props.closeModal()
    }

        const content = <ModalContent  onClose={onClose} {...props}/>

        return (
            <ErrorBoundry>
                <React.Fragment>
                    {content}
                </React.Fragment>
            </ErrorBoundry>

        )
}

const ModalContent = ({ onClose, item, onAddItem}) => {
    const {title, vote, overview, date, popularity, backdrop_img, media_type} = item
    const dateInfo = date ? `Released: ${date}`:null
    const type = media_type ?    `Type: ${media_type}` : null
    const voteInfo = vote ? `Rating: ${vote}`: null
    return (
        <div className="modal">
            <div className="modal-overlay">
                <div className="modal-window">
                    <div className="modal__main">
                        <img className="modal__img" src={backdrop_img} alt=""/>
                        <div className="modal__content">
                            <h1 className="modal__title">
                                {title}
                            </h1>
                            <h3 className="modal__type">
                                {type}
                            </h3>
                            <h3 className="modal__votes">
                                {voteInfo}
                            </h3>
                            <div className="modal__review">
                                {overview}
                            </div>
                            <span className="modal__popularity">
                               Popularity: {popularity}
                            </span>
                            <br/>
                            <span className="modal__date">
                                {dateInfo}
                            </span>
                        </div>
                        <button className="btn btn-modal" onClick={() =>onAddItem(item)}>Add to my List</button>
                    </div>
                    <span className="modal__close" onClick={onClose}>&#10060;</span>
                </div>
            </div>
        </div>
    )
}


export default ModalWindow