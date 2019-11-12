import React, {Component} from "react";
import EditClient from "./EditClient";
import ShowClient from "./ShowClient"

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFlipped: false
        }
        this.onClickEdit = this.onClickEdit.bind(this)
    }

    onClickEdit() {
        this.setState({isFlipped: !this.state.isFlipped})
    }

    render() {
        return( <div className = "card">
            { this.state.isFlipped ? <EditClient user = {this.props.user} onClick/> : <ShowClient user = {this.props.user} onClickEdit = {this.onClickEdit}/>}
                </div>)
    }
}

export default User;