import React, {Component} from "react";
import User from "./User";
import axios from "axios"
import ShowBarbers from "./ShowBarbers";
import ClientForm from "./ClientForm";

class UserList extends Component {
    constructor () {
        super()
        this.state = {
            users: [],
            renderForm: false
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
            renderForm: true
        })
    } 

    render() {
        const filteredUsers = this.state.users.filter(user => { 
            if (this.props.barberId == user.barber_id) {
                return true;
            } 

            return false;
           })
        return (<div>
              <h2>Has {filteredUsers.length} waiting</h2>
              { this.state.renderForm ? <ClientForm barberId = {this.props.barberId} /> : <button onClick = {this.onClick}  >Add yourself to list</button>}
                </div>)

    }
}

export default UserList;