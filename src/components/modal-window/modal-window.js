import React, {Component} from "react";
import './modal-window.css'
import DimflixService from "../../service/dimflix-service";

const ModalWindow = (props) => {

   const dimflixService = new DimflixService()



    const onClose = () => {
        props.closeModal()
    }

        const content = <ModalContent  onClose={onClose} />

        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        )
}

const ModalContent = ({ onClose}) => {
    return (
        <div className="modal">
            <div className="modal-overlay">
                <div className="modal-window">
                    <div className="modal__main">
                        <img className="modal__img" src="https://image.tmdb.org/t/p/w500/" alt=""/>
                        <div className="modal__content">
                            <h1 className="modal__title">

                            </h1>
                            <h3 className="modal__genres">

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


export default ModalWindow