import React, {Component} from "react";
import './modal-window.css'

export default class ModalWindow extends Component{


    onClose = () => {
        this.props.closeModal()
    }

    render() {
        const content = <ModalContent  onClose={this.onClose} id={this.props.id}/>

        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        )
    }
}

const ModalContent = ({ onClose, id}) => {
    return (
        <div className="modal">
            <div className="modal-overlay">
                <div className="modal-window">
                    <div className="modal__main">
                        <img className="modal__img" src="img/novote.jpg" alt=""/>
                        <div className="modal__content">
                            <h1 className="modal__title">
                                Title
                            </h1>
                            <h3 className="modal__genres">
                                {id}
                            </h3>
                            <div className="modal__review">
                                Good movie :)
                            </div>
                            <span className="modal__popularity">
                                        100
                                    </span>
                            <div className="modal__lang">
                                RU
                            </div>
                            <span className="modal__homepage"></span>
                        </div>
                    </div>
                    <span className="modal__close" onClick={onClose}>&#10060;</span>
                </div>
            </div>
        </div>
    )
}