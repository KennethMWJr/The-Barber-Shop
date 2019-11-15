import React, {Component} from "react";
import User from "./User";
import axios from "axios"



class ClientList extends Component {
    constructor () {
        super()
        this.state = {
            users: [],
            clientForm: false
        }
    }

    componentDidMount = async () => {
        let response = await axios.get("/users")
        console.log(response.data.user)
        this.setState({
            users: response.data.user
        })
    }

    onClick = () => {
        this.setState({
            clientForm: !this.state.clientForm
        })
        
    } 

    render() {
       
        const renderList = this.state.users.map(user => {
            if (this.props.barberId == user.barber_id) {
                return <User goBack = {this.onClick} key = {user.id} user = {user}/>
            } 

        })
        return (<div className = "barber-list">
            {/* toggles between list of clients and button */}
            { this.state.clientForm ? renderList : <button onClick = {this.onClick}>Barber's list</button>}
            </div>)

    }
}

export default ClientList;