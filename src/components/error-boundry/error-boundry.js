import React, {Component} from "react";
import ErrorMark from "../error-mark";


export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
           return <ErrorMark/>
        }
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}